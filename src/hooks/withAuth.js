import { useAuth } from '@/hooks/authContext';
import { useRouter } from 'next/router';
import { useEffect } from 'react';

export default function withAuth(Component) {
    return function ProtectedRoute(props) {
        const { isAuthorized, logout } = useAuth();
        const router = useRouter();

        useEffect(() => {
            const expiration = localStorage.getItem('authExpiration');
            const now = new Date().getTime();

            if (!isAuthorized || (expiration && now >= Number(expiration))) {
                logout();
                router.push('/login');
            }
        }, [isAuthorized, router, logout]);

        return isAuthorized ? <Component {...props} /> : null;
    };
}
