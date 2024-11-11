import { useState } from 'react';
import { useRouter } from 'next/router';
import { useAuth } from '@/hooks/authContext';

export default function LoginPage() {
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const { login } = useAuth();
    const router = useRouter();

    const handleLogin = (e) => {
        e.preventDefault();
        if (login(password)) {
            router.push('/admin'); // Redirect to a protected page
        } else {
            setError('Incorrect password. Please try again.');
        }
    };

    return (
        <div className="flex flex-col items-center justify-center h-screen p-4">
            <h1 className="text-2xl font-semibold mb-4">Enter Password to Access</h1>
            <form onSubmit={handleLogin} className="flex flex-col items-center">
                <input
                    type="password"
                    placeholder="Enter Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="p-2 border border-gray-300 rounded mb-2"
                />
                <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
                    Submit
                </button>
                {error && <p className="text-red-500 mt-2">{error}</p>}
            </form>
        </div>
    );
}