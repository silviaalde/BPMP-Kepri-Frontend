"use client";

import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import SidebarAdmin from '../element/admin/sidebar/SidebarAdmin';
import NavbarAdmin from '../element/admin/Navbar/Navbar';
import Image from 'next/image';
import { GifSpinnerBlue } from '@/assets/gif';

interface AdminLayoutProps {
    children: React.ReactNode;
}

const getCookie = (name: string): string | null => {
    if (typeof document === 'undefined') return null; // Cek apakah dijalankan di browser
    const cookies = document.cookie.split('; ');
    const cookie = cookies.find(row => row.startsWith(`${name}=`));
    return cookie ? cookie.split('=')[1] : null;
};


const AdminLayout: React.FC<AdminLayoutProps> = ({ children }) => {
    const [isAuthenticated, setIsAuthenticated] = useState<boolean | null>(null);
    const router = useRouter();

    useEffect(() => {
        // Mengecek apakah token dan userId ada di sessionStorage
        const token = getCookie('token');
        
        if (!token) {
            // Jika tidak ada token atau userId, redirect ke halaman login
            router.push('/admin/sign-in');
        } else {
            setIsAuthenticated(true);
        }
    }, [router]);

    // Jika komponen belum terautentikasi, tampilkan loading
    if (isAuthenticated === null) {
        return <div className='w-full h-screen center-flex'>
            <Image 
                src={GifSpinnerBlue}
                alt='Spinneer Blue'
                className='h-28 w-28'
                width={200} // Adjust width
                height={200} // Adjust height
            />
        </div>;
    }

    if (!isAuthenticated) {
        return null; // Don't render the admin layout if not authenticated
    }

    return (
        <div className='flex min-h-screen w-full h-max'>
            <SidebarAdmin />
            <div className='ml-0 md:ml-[280px] flex flex-1 h-max min-h-screen flex-col gap-5  p-10'>
                <NavbarAdmin />
                {children}
            </div>
        </div>
    );
};

export default AdminLayout;
