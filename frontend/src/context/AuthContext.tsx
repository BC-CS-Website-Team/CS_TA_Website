import { createContext, useState, useEffect, useContext, ReactNode } from 'react';
// @ts-expect-error - auth service is not typed yet
import { login as authLogin, logout as authLogout, getCurrentUser } from '../services/auth';

export interface User {
    id: number;
    email: string;
    is_superuser?: boolean;
    first_name?: string;
    last_name?: string;
    profile_picture?: string;
    created_at?: string;
    roles?: { id: number, name: string }[];
}

interface AuthContextType {
    user: User | null;
    loading: boolean;
    error: string | null;
    login: (email: string, password: string) => Promise<User>;
    logout: () => void;
    refreshUser: () => Promise<void>;
    isAuthenticated: boolean;
}

const AuthContext = createContext<AuthContextType | null>(null);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
    const [user, setUser] = useState<User | null>(null);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        // Check if user is logged in on mount
        const initAuth = async () => {
            try {
                const token = localStorage.getItem('token');
                if (token) {
                    const userData = await getCurrentUser();
                    setUser(userData);
                }
            } catch (err) {
                console.error("Failed to restore session:", err);
                // Token might be invalid, clear it
                localStorage.removeItem('token');
            } finally {
                setLoading(false);
            }
        };

        initAuth();
    }, []);

    const login = async (email: string, password: string): Promise<User> => {
        setLoading(true);
        setError(null);
        try {
            await authLogin(email, password);
            const userData = await getCurrentUser();
            setUser(userData);
            return userData;
        } catch (err: any) {
            setError(err.message);
            throw err;
        } finally {
            setLoading(false);
        }
    };

    const logout = () => {
        authLogout();
        setUser(null);
    };

    const refreshUser = async () => {
        try {
            const userData = await getCurrentUser();
            setUser(userData);
        } catch (err: any) {
            console.error("Failed to refresh user:", err);
        }
    };

    const value = {
        user,
        loading,
        error,
        login,
        logout,
        refreshUser,
        isAuthenticated: !!user,
    };

    return (
        <AuthContext.Provider value={value}>
            {!loading && children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => {
    const context = useContext(AuthContext);
    if (!context) {
        throw new Error('useAuth must be used within an AuthProvider');
    }
    return context;
};
