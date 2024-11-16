import { useState, useEffect } from 'react';
import { db } from '@/lib/firebaseConfig';
import { collection, getDocs, deleteDoc, doc } from 'firebase/firestore';
import { TrashIcon } from '@heroicons/react/20/solid';
import { SvgIcon } from '@mui/material';

export default function StaffingList() {
    const [staffingRequests, setstaffingRequests] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');

    useEffect(() => {
        const fetchStaffingRequests = async () => {
            try {
                const querySnapshot = await getDocs(collection(db, 'staffingRequests'));
                const staffingData = querySnapshot.docs.map(doc => ({
                    id: doc.id,
                    ...doc.data()
                }));
                setstaffingRequests(staffingData);
                setLoading(false);
            } catch (err) {
                setError('Failed to fetch articles');
                setLoading(false);
            }
        };
        fetchStaffingRequests();
    }, []);

    // Delete an article by ID
    const handleDelete = async (id) => {
        try {
            await deleteDoc(doc(db, 'staffingRequests', id));
            setstaffingRequests(prevStaffingRequests => prevStaffingRequests.filter(staffingRequests => staffingRequests.id !== id));
        } catch (err) {
            setError('Failed to delete article');
        }
    };

    return (
        <div className="p-6 max-w-7xl mx-auto">
            {loading ? (
                <div className={`flex gap-4 p-4 items-center border rounded-lg bg-gray-800 text-white border-white`}>
                    <div className="inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-current border-e-transparent align-[-0.125em] text-surface motion-reduce:animate-[spin_1.5s_linear_infinite] dark:text-white">
                        <span className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]">
                            Loading...
                        </span>
                    </div>
                    Processing
                </div>
            ) : error ? (
                <div className={`p-4 mt-8 border rounded-lg bg-red-100 text-red-700 border-red-700`}>
                    {error}
                </div>
            ) : staffingRequests.length === 0 ? (
                <p>No Staffing Requests Submitted Yet</p>
            ) : (
                <table className="min-w-full table-auto border-collapse border-2 border-black">
                    <thead className="bg-gray-200">
                        <tr>
                            <th className="border border-gray-300 px-4 py-2">First Name</th>
                            <th className="border border-gray-300 px-4 py-2">Last Name</th>
                            <th className="border border-gray-300 px-4 py-2">Company</th>
                            <th className="border border-gray-300 px-4 py-2">Email</th>
                            <th className="border border-gray-300 px-4 py-2">Phone Number</th>
                            <th className="border border-gray-300 px-4 py-2">Website</th>
                            <th className="border border-gray-300 px-4 py-2">Positions</th>
                            <th className="border border-gray-300 px-4 py-2">Availability</th>
                            <th className="border border-gray-300 px-4 py-2">Shifts</th>
                            <th className="border border-gray-300 px-4 py-2">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {staffingRequests.length === 0 ? (
                            <tr>
                                <td colSpan="7" className="text-center py-4">No Submissions Found</td>
                            </tr>
                        ) : (
                            staffingRequests.map((staffingRequest) => (
                                <tr key={staffingRequest.id} className="hover:bg-gray-100 bg-white">
                                    <td className="border border-gray-300 px-4 py-2">{staffingRequest.firstName}</td>
                                    <td className="border border-gray-300 px-4 py-2">{staffingRequest.lastName}</td>
                                    <td className="border border-gray-300 px-4 py-2">{staffingRequest.company}</td>
                                    <td className="border border-gray-300 px-4 py-2">{staffingRequest.email}</td>
                                    <td className="border border-gray-300 px-4 py-2">{staffingRequest.phoneNumber}</td>
                                    <td className="border border-gray-300 px-4 py-2">{staffingRequest.website}</td>
                                    <td className="border border-gray-300 px-4 py-2">{staffingRequest.Positions}</td>
                                    <td className="border border-gray-300 px-4 py-2">{staffingRequest.Availability}</td>
                                    <td className="border border-gray-300 px-4 py-2">{staffingRequest.Shifts}</td>
                                    <td className="border border-gray-300 px-4 py-2 text-center">
                                        <button onClick={() => handleDelete(staffingRequest.id)}>
                                            <SvgIcon className="text-red-500" aria-label="trash icon">
                                                <TrashIcon />
                                            </SvgIcon>
                                        </button>
                                    </td>
                                </tr>
                            ))
                        )}
                    </tbody>
                </table>
            )}
        </div>
    );
}