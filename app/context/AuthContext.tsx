"use client";
import React, { createContext, useContext, useState, useEffect } from "react";
import { toast } from "sonner";
import { useRouter } from "next/navigation";

export interface User {
    id: string;
    name: string;
    email: string;
    avatar?: string;
}

interface AuthContextType {
    user: User | null;
    login: (email: string, pass: string) => Promise<boolean>;
    logout: () => void;
    updateProfile: (data: Partial<User>) => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const useAuth = () => {
    const context = useContext(AuthContext);
    if (!context) {
        throw new Error("useAuth must be used within an AuthProvider");
    }
    return context;
};

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [user, setUser] = useState<User | null>(null);
    const router = useRouter();

    useEffect(() => {
        // Check local storage for persisted session
        const storedUser = localStorage.getItem("currentUser");
        if (storedUser) {
            setUser(JSON.parse(storedUser));
        }
    }, []);

    const login = async (email: string, pass: string): Promise<boolean> => {
        // Mock login logic
        if (email.includes("@")) {
            const mockUser: User = {
                id: "u_123",
                name: email.split("@")[0].charAt(0).toUpperCase() + email.split("@")[0].slice(1),
                email: email,
                avatar: `https://ui-avatars.com/api/?name=${email}&background=0D8ABC&color=fff`
            };
            setUser(mockUser);
            localStorage.setItem("currentUser", JSON.stringify(mockUser));
            toast.success("¡Bienvenido de nuevo!");
            return true;
        }
        toast.error("Email inválido");
        return false;
    };

    const logout = () => {
        setUser(null);
        localStorage.removeItem("currentUser");
        toast.info("Sesión cerrada");
        router.push("/login");
    };

    const updateProfile = (data: Partial<User>) => {
        if (user) {
            const updatedUser = { ...user, ...data };
            setUser(updatedUser);
            localStorage.setItem("currentUser", JSON.stringify(updatedUser));
            toast.success("Perfil actualizado");
        }
    };

    return (
        <AuthContext.Provider value={{ user, login, logout, updateProfile }}>
            {children}
        </AuthContext.Provider>
    );
};
