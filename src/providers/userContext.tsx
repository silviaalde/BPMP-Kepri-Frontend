'use client';

import React, { createContext, useState, useContext, ReactNode, useEffect } from 'react';

// Mendefinisikan tipe untuk context kita
interface AuthContextType {
    token: string | null;
    setToken: React.Dispatch<React.SetStateAction<string | null>>;
}

// Membuat context
const AuthContext = createContext<AuthContextType | undefined>(undefined);

// Fungsi untuk mengatur cookies
const setCookie = (name: string, value: string, days: number) => {
    const expires = new Date();
    expires.setTime(expires.getTime() + days * 24 * 60 * 60 * 1000); // Mengatur waktu kadaluarsa
    document.cookie = `${name}=${value};expires=${expires.toUTCString()};path=/`;
};

// Fungsi untuk membaca cookies
const getCookie = (name: string): string | null => {
    if (typeof document === 'undefined') return null; // Cek apakah dijalankan di client
    const cookies = document.cookie.split('; ');
    const cookie = cookies.find(row => row.startsWith(`${name}=`));
    return cookie ? cookie.split('=')[1] : null;
};

// Provider untuk AuthContext
export const AuthProvider = ({ children }: { children: ReactNode }) => {
    const [token, setToken] = useState<string | null>(null);

    // Membaca token dari cookies hanya di client
    useEffect(() => {
        const storedToken = getCookie('token');
        if (storedToken) setToken(storedToken);
    }, []);

    // Mengupdate cookies saat token berubah
    useEffect(() => {
        if (token) {
            setCookie('token', token, 7); // Menyimpan token di cookies selama 7 hari
        } else {
            setCookie('token', '', -1); // Menghapus token jika null
        }
    }, [token]);

    return (
        <AuthContext.Provider value={{ token, setToken }}>
            {children}
        </AuthContext.Provider>
    );
};

// Hook untuk mengakses context
export const useAuth = () => {
    const context = useContext(AuthContext);
    if (!context) {
        throw new Error('useAuth must be used within an AuthProvider');
    }
    return context;
};
