import { useAuth } from '@/hooks/authContext';
import { useRouter } from 'next/router';
import { useEffect } from 'react';

export default function withAuth(Component) {
    return function ProtectedRoute(props) {
        const { isAuthorized } = useAuth();
        const router = useRouter();

        useEffect(() => {
            if (!isAuthorized) {
                router.push('/login'); // Redirect to login if not authorized
            }
        }, [isAuthorized, router]);

        return isAuthorized ? <Component {...props} /> : null;
    };
}
