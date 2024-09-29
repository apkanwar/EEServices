import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import { storage } from "@/lib/firebaseConfig";
import { useState } from "react";
import CheckboxInput from "./inputs/checkbox";
import InputField from "./inputs/htmlInputs";
import saveToFireBase from "@/pages/api/saveToFirebase";

export default function EmployeeForm() {
    const GeneralInfoInputs = [
        { name: 'firstName', type: 'text', placeholder: 'First Name', required: 'Please Enter your First Name' },
        { name: 'lastName', type: 'text', placeholder: 'Last Name', required: 'Please Enter your Last Name' },
        { name: 'email', type: 'email', placeholder: 'Email Address', required: 'Please Enter a Valid Email Address' },
        { name: 'phoneNumber', type: 'tel', placeholder: 'Phone Number', pattern: '[0-9]{3}-[0-9]{3}-[0-9]{4}', required: 'The Format should be 123-456-7890' }
    ];

    const AdditonalInfoInputs = [
        { name: 'heard', type: 'text', placeholder: 'Where did you hear about us?' },
        { name: 'recentJob', type: 'text', placeholder: 'What was your most recent job and title?' },
    ];

    const PositionInputs = [
        { title: 'General Labour', id: 'GeneralLabour' },
        { title: 'Machine Operator', id: 'MachineOperator' },
        { title: 'Office', id: 'Office' },
        { title: 'Managerial', id: 'Managerial' },
        { title: 'Forklift', id: 'Forklift' },
        { title: 'Driver', id: 'Driver' },
        { title: 'Tech', id: 'Tech' },
        { title: 'Other', id: 'Other' }
    ];

    const Availability = [
        { title: 'Part-Time', id: 'PartTime' },
        { title: 'Full-Time', id: 'FullTime' },
        { title: 'Weekends', id: 'Weekends' }
    ];

    const PerferedShifts = [
        { title: 'Morning', id: 'Morning' },
        { title: 'Afternoon', id: 'Afternoon' },
        { title: 'Night', id: 'Night' }
    ];

    const [selectedFile, setSelectedFile] = useState(null);
    const [selectedFileText, setSelectedFileText] = useState("Click to upload or drag and drop");

    const handleFile = async (e) => {
        e.preventDefault();
        setSelectedFile(e.target.files[0])
        setSelectedFileText(e.target.files[0].name)
    };

    // Function to upload the resume to Firebase Storage and get the URL
    const uploadResume = async (file) => {
        const storageRef = ref(storage, `resumes/${file.name}`);  // Save to "resumes" folder
        const snapshot = await uploadBytes(storageRef, file);  // Upload file
        const downloadURL = await getDownloadURL(snapshot.ref);  // Get file URL
        return downloadURL;
    };

    async function storeEmployeeInfo(e) {
        e.preventDefault();
        let resumeURL = '';
        if (selectedFile) {
            resumeURL = await uploadResume(selectedFile);
        }

        const formData = {
            firstName: e.target.firstName.value,
            lastName: e.target.lastName.value,
            email: e.target.email.value,
            phoneNumber: e.target.phoneNumber.value,
            heard: e.target.heard.value,
            recentJob: e.target.recentJob.value,
            resume: resumeURL,
            Positions: PositionInputs
                .filter((position) => e.target[position.id].checked)
                .map((position) => position.title)
                .join(', '),
            Availability: Availability
                .filter((availability) => e.target[availability.id].checked)
                .map((availability) => availability.title)
                .join(', '),
            Shifts: PerferedShifts
                .filter((shift) => e.target[shift.id].checked)
                .map((shift) => shift.title)
                .join(', '),
        };
        console.log(formData);

        try {
            await saveToFireBase(formData, 'resumes');
            console.log("Data successfully saved to Firestore.");
        } catch (error) {
            console.error("Failed to save data: ", error.message);
        }
    }


    return (
        <div className="py-24">
            <section className="mx-4 xl:mx-auto max-w-5xl flex flex-col bg-white rounded-lg p-20">
                <form autoComplete="off" className="font-dText" onSubmit={storeEmployeeInfo}>
                    <div className="flex flex-col">
                        <h2 className="font-medium text-2xl font-headings mb-4">
                            General Information
                        </h2>
                        <div className="grid grid-cols-2 gap-4">
                            <InputField
                                name={GeneralInfoInputs[0].name}
                                type={GeneralInfoInputs[0].type}
                                placeholder={GeneralInfoInputs[0].placeholder}
                                pattern={GeneralInfoInputs[0].pattern}
                                required={GeneralInfoInputs[0].required}
                            />

                            <InputField
                                name={GeneralInfoInputs[1].name}
                                type={GeneralInfoInputs[1].type}
                                placeholder={GeneralInfoInputs[1].placeholder}
                                pattern={GeneralInfoInputs[1].pattern}
                                required={GeneralInfoInputs[1].required}
                            />

                            <InputField
                                name={GeneralInfoInputs[2].name}
                                type={GeneralInfoInputs[2].type}
                                placeholder={GeneralInfoInputs[2].placeholder}
                                pattern={GeneralInfoInputs[2].pattern}
                                required={GeneralInfoInputs[2].required}
                            />

                            <InputField
                                name={GeneralInfoInputs[3].name}
                                type={GeneralInfoInputs[3].type}
                                placeholder={GeneralInfoInputs[3].placeholder}
                                pattern={GeneralInfoInputs[3].pattern}
                                required={GeneralInfoInputs[3].required}
                            />
                        </div>
                    </div>

                    <div className="flex flex-col">
                        <h2 className="font-medium text-2xl font-headings mt-12 mb-4">
                            Additonal Information
                        </h2>
                        <div className="grid grid-cols gap-4">
                            <InputField
                                name={AdditonalInfoInputs[0].name}
                                type={AdditonalInfoInputs[0].type}
                                placeholder={AdditonalInfoInputs[0].placeholder}
                                pattern={AdditonalInfoInputs[0].pattern}
                                required={AdditonalInfoInputs[0].required}
                            />

                            <InputField
                                name={AdditonalInfoInputs[1].name}
                                type={AdditonalInfoInputs[1].type}
                                placeholder={AdditonalInfoInputs[1].placeholder}
                                pattern={AdditonalInfoInputs[1].pattern}
                                required={AdditonalInfoInputs[1].required}
                            />

                            <CheckboxInput inputs={PositionInputs} title="What Positions Interest You?" size="2" />
                            <CheckboxInput inputs={Availability} title="Availability" size="3" />
                            <CheckboxInput inputs={PerferedShifts} title="Perfered Shift" size="3" />
                        </div>


                        <div className="flex flex-col w-full">
                            <h2 className="font-medium text-2xl font-headings mt-12 mb-4">
                                Upload Resume
                            </h2>
                            <label htmlFor="resumeDropzone" className="flex flex-col items-center justify-center w-full h-32 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 hover:bg-gray-100">
                                <div className="flex flex-col items-center justify-center py-2">
                                    <svg className="w-8 h-8 mb-4 text-gray-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 16">
                                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2" />
                                    </svg>
                                    <p className="mb-2 text-sm text-gray-500">{selectedFileText}</p>
                                    <p className="text-xs text-gray-500 font-semibold">PDF</p>
                                </div>
                                <input required id="resumeDropzone" type="file" className="hidden" accept="application/pdf" onChange={(e) => handleFile(e)} />
                            </label>
                        </div>

                    </div>

                    <div className="mt-10">
                        <button type="submit" className="bg-plum text-white rounded-full py-1 px-6 hover:bg-opacity-80 transition-opacity duration-300 text-lg font-medium font-headings w-fit">
                            Sumbit
                        </button>
                    </div>
                </form>
            </section>
        </div>
    )
}