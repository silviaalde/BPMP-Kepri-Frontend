"use client";

import { ImageLogoBPMP1, ImageProfile } from '@/assets/images'
import Image from 'next/image'
import React, { useState } from 'react'
import { FaBars, FaBell, FaSignOutAlt } from 'react-icons/fa'
import SidebarModal from '../../user/sidebar/SidebarModals';
import { DataMenuAdmin } from '@/data/menu-admin';
import SidebarMenuAdmin from '../sidebar/SidebarMenuAdmin';
import { useAuth } from '@/providers/userContext';
import { useRouter } from "next/navigation";
import { usePathname } from 'next/navigation'; // Import usePathname

const NavbarAdmin = () => {
    const [sidebarIsActive, setSidebarIsActive] = useState<boolean>(false);
    const { setToken } = useAuth();
    const router = useRouter();
    const pathName = usePathname();  // Use usePathname to get the current path

    const handleLogout = () => {
        setToken('');
        router.push('/admin/sign-in')
    }

    // Get the dashboard name based on the current path
    const getDashboardName = (path: string) => {
        switch (path) {
            case '/admin':
                return 'Dashboard';
            case '/admin/blog/berita':
                return 'Berita';
            case '/admin/blog/add':
                return 'Tambah Blog';
            case '/admin/users':
                return 'User Management';
            case '/admin/galeri':
                return 'Galeri Kegiatan';
            case '/admin/galeri/add':
                return 'Galeri Kegiatan';
            case '/admin/penghargaan':
                return 'Penghargaan';
            case '/admin/penghargaan/add':
                return 'Penghargaan';
            case '/admin/unduhan':
                return 'Unduhan';
            case '/admin/unduhan/add':
                return 'Unduhan';
            case '/admin/progress':
                return 'Progress';
            case '/admin/faq':
                return 'Faq';
            case '/admin/faq/add':
                return 'Faq';
            // Add more cases as needed
            default:
                return 'Administrator';
        }
    };

    const dashboardName = getDashboardName(pathName);

    return (
        <>
            <div className='h-14 w-full flex items-center justify-between text-blue-secondary'>
                <div className='flex items-center'>
                    <div className='flex flex-col'>
                        <h4 className='text-xl font-semibold'>
                            Administrator
                        </h4>
                        <p className='text-sm'>
                            {dashboardName}
                        </p>
                    </div>
                </div>
                <div className='flex items-center gap-5'>
                    <div className='flex items-center gap-4'>
                        <FaBell />
                    </div>
                    <Image
                        src={ImageProfile}
                        alt='Image Profile'
                        className='h-10 w-10 object-cover rounded-full'
                    />
                    <FaBars
                        className='flex md:hidden'
                        onClick={() => setSidebarIsActive(true)}
                    />
                </div>
            </div>

            <SidebarModal
                isOpen={sidebarIsActive}
                onClose={() => setSidebarIsActive(false)}
                positon="left"
                className="bg-[#008DD1] py-14"
            >
                <aside className='flex flex-col gap-10'>
                    <Image
                        src={ImageLogoBPMP1}
                        alt="Image Logo"
                    />
                    <div className='flex flex-col h-max gap-2'>
                        {DataMenuAdmin.map((item, index) => (
                            <SidebarMenuAdmin
                                key={index}
                                title={item.title}
                                type={item.type}
                                url={item.url}
                                Icon={item.icon}
                                menu={item.menu}
                            />
                        ))}
                        <div
                            onClick={handleLogout}
                            className=" w-full h-12 flex gap-2 items-center rounded-lg px-2 text-white cursor-pointer hover:bg-[#ffffff71]">
                            <div className="h-10 w-10 center-flex text-xl">
                                <FaSignOutAlt />
                            </div>
                            <p>Logout</p>
                        </div>
                    </div>
                </aside>
            </SidebarModal>
        </>
    );
}

export default NavbarAdmin;
