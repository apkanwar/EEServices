import { createContext, useContext, useEffect, useState } from 'react';

const AuthContext = createContext();

export function AuthProvider({ children }) {
    const [isAuthorized, setIsAuthorized] = useState(false);

    useEffect(() => {
        // Check if the user is already authorized
        const auth = localStorage.getItem('isAuthorized');
        if (auth === 'true') {
            setIsAuthorized(true);
        }
    }, []);

    const login = (password) => {
        const correctPassword = process.env.NEXT_PUBLIC_ADMIN_EDITOR_PASSWORD || 'your-password';
        if (password === correctPassword) {
            localStorage.setItem('isAuthorized', 'true');
            setIsAuthorized(true);
            return true;
        }
        return false;
    };

    const logout = () => {
        localStorage.removeItem('isAuthorized');
        setIsAuthorized(false);
    };

    return (
        <AuthContext.Provider value={{ isAuthorized, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
}

export function useAuth() {
    return useContext(AuthContext);
}
