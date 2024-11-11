import { createContext, useContext, useEffect, useState } from 'react';

const AuthContext = createContext();

export function AuthProvider({ children }) {
    const [isAuthorized, setIsAuthorized] = useState(false);

    useEffect(() => {
        const auth = localStorage.getItem('isAuthorized');
        const expiration = localStorage.getItem('authExpiration');
        const now = new Date().getTime();

        if (auth === 'true' && expiration && now < Number(expiration)) {
            setIsAuthorized(true);
        } else {
            localStorage.removeItem('isAuthorized');
            localStorage.removeItem('authExpiration');
            setIsAuthorized(false);
        }
    }, []);

    const login = (password) => {
        const correctPassword = process.env.NEXT_PUBLIC_ADMIN_EDITOR_PASSWORD || 'your-password';
        if (password === correctPassword) {
            localStorage.setItem('isAuthorized', 'true');
            
            // Set Expiration Time
            const expirationTime = new Date().getTime() + 360 * 60 * 1000; // 12 Hrs in Milliseconds
            localStorage.setItem('authExpiration', expirationTime.toString());
            
            setIsAuthorized(true);
            return true;
        }
        return false;
    };

    const logout = () => {
        localStorage.removeItem('isAuthorized');
        localStorage.removeItem('authExpiration');
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
