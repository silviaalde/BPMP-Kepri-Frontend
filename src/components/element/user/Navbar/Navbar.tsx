'use client';

import {  FaBars, FaFacebook, FaGlobe, FaInstagram, FaPaperPlane, FaPhone, FaTwitter, FaYoutube } from 'react-icons/fa';
import { FiMail } from 'react-icons/fi';
import Image from 'next/image';
import { IconsChevronDouble } from '@/assets/icons';
import Link from 'next/link';
import NavMenu from './NavMenu';
import SocialLink from '../SocialLink';
import { BPMPLogo } from '@/assets/images';
import { useEffect, useState } from 'react';
import SidebarModal from '../sidebar/SidebarModals';
import { ImageBanner1 } from '@/assets/images';
import { FaLocationPin } from 'react-icons/fa6';
import SidebarMenu from '../sidebar/SidebarMenu';
import { MenuUtama } from '@/data/menu-utama';

const Navbar = () => {
    const [contactIsOpen, setContactIsOpen] = useState(false);
    const [sidebarMenuActive, setSidebarMenuActive] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);

    // Handle scroll event
    const handleScroll = () => {
        if (window.scrollY > 50) {
            setIsScrolled(true);
        } else {
            setIsScrolled(false);
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    
    return (
        <div className="h-max w-full bg-white flex flex-col ">
           
            <div className="h-16 z-50 w-full bg-blue-light hidden md:flex items-center justify-between px-10">
                <div className="flex items-center gap-5 text-sm">
                    <div className='flex items-center gap-2'>
                        <FiMail className='text-xl' />
                        <a href="" className="text-underline group">bpmp.kepri@kemdikbud.go.id</a>
                    </div>
                    <a href="" className="text-underline group">Jl. Tata Bumi Km.20 Ceruk Ijuk, Toapaya, Bintan</a>
                </div>
    
                <SocialLink />
            </div>


            <div className={` ${isScrolled ? 'fixed top-0 left-0 right-0 bg-white z-50 shadow-xl' : ''} 
                flex h-max  bg-gray-50 w-full items-center lg:flex-row flex-col justify-start md:justify-between px-0 lg:px-5
                `}>
                {/* Nav */}
                <div className="flex items-center w-full h-full gap-4 text-white relative">
                    
                    {/* Nav Logo */}
                    <div className='flex items-center justify-between h-20 lg:h-28  w-full lg:w-max flex-shrink-0 px-3'>
                        <Link href="/" className=' flex items-center justify-start gap-2 md:gap-1  py-4 '>
                           <Image src={BPMPLogo} alt='logo' className='w-[12rem]'></Image>
                        </Link>
                        {/* Trigger sidebar menu */}
                        <FaBars 
                            className='text-xl cursor-pointer lg:hidden flex' 
                            onClick={() => setSidebarMenuActive(true)}
                        />
                        <SidebarModal 
                            isOpen={sidebarMenuActive}
                            onClose={() => setSidebarMenuActive(false)}
                            positon="left"
                            className='bg-blue-secondary'
                        >
                            <div className='h-max w-full flex flex-col gap-3 mt-16'>
                                {MenuUtama.map((item, index) => (
                                    <SidebarMenu 
                                        key={index}
                                        {...item}
                                    />
                                ))}
                                <div className='w-full center-flex mt-10'>
                                    <Link 
                                        href="/contact"
                                        className='flex items-center'
                                    >
                                        <button className='px-7 h-12 bg-blue-light hover:opacity-60'>
                                            Contact Us
                                        </button>
                                    </Link>
                                </div>
                            </div>
                        </SidebarModal>
                    </div>

                    {/* Menu Section */}
                    <div className="hidden lg:flex flex-wrap items-center gap-8 text-blue-primary font-medium py-2 ">
                        {MenuUtama.map((item, index) => (
                            <NavMenu key={index} {...item} />
                        ))}
                    </div>

                </div>

                {/* contact */}
                <div className="hidden md:flex items-center gap-4 w-full lg:w-max  justify-end px-3 h-20">
                    <div className='flex items-center gap-2 text-sm flex-shrink-0'>
                        <FaPhone />
                        <p className='cursor-pointer font-bold whitespace-nowrap'>(0771) 4442196</p>
                    </div>
                    <Link href="/wbs">
                        <button className='h-12 text-sm w-28 bg-red-primary text-white hover:opacity-60'>
                            Lapor WBS
                        </button>
                    </Link>
                    <a  
                        href='https://kemedikbud.lapor.go.id'
                        target='blank' 
                        className='h-12 text-sm w-28 bg-red-primary text-white hover:opacity-60 center-flex'
                    >
                        SP4N Lapor
                    </a>
                    

                    {/* handle button contact */}
                    <FaBars  
                        onClick={() => setContactIsOpen(true)} 
                        className='text-xl cursor-pointer'
                    />

                    <SidebarModal
                        isOpen={contactIsOpen}
                        onClose={() => setContactIsOpen(false)}
                        positon="right"
                        className='bg-[#222222]'
                    >
                        <div className='flex flex-col gap-8 text-white'>
                            <Image src={ImageBanner1} alt='banner1' className='w-full h-20 object-cover' />
                            <h1 className='text-4xl font-medium'>Kontak Kami</h1>
                            <p className='text-sm'>
                                Kami Berkomitmen Memberikan Pelayanan yang terbaik
                            </p>
                            <Link href="/contact" className='h-56 w-full bg-blue-light flex items-center px-4 hover:bg-white cursor-pointer hover:text-black'>
                                <p>Get a Qoute</p>
                                <Image src={IconsChevronDouble} className='h-40 w-40' alt='Chevron double icons' />
                            </Link>
                            <h1 className='text-4xl font-medium '>Kontak Kami</h1>
                            <div className='flex flex-col gap-4'>
                                <div className='flex items-center gap-3'>
                                    <FaPhone className='text-blue-light' />
                                    <p className='text-sm'>(0771) 4442196</p>
                                </div>
                                <div className='flex items-center gap-3'>
                                    <FaPaperPlane className='text-blue-light' />
                                    <p className='text-sm'>bpmpkepri@kemdikbud.go.id</p>
                                </div>
                                <div className='flex items-center gap-3'>
                                    <FaGlobe className='text-blue-light' />
                                    <p className='text-sm'>bpmpkepri.kemedikbud.go.id</p>
                                </div>
                                <div className='flex items-center gap-3'>
                                    <FaLocationPin className='text-blue-light' />
                                    <p className='text-sm'>Jl. Tata Bumi Km.20 Ceruk Ijuk, Toapaya, Bintan</p>
                                </div>
                            </div>
                            <div className='flex items-center gap-3'>
                                <a href='' className='h-10 w-10 bg-blue-light hover:opacity-60 cursor-pointer rounded-full center-flex'>
                                    <FaTwitter />
                                </a>
                                <a href='' className='h-10 w-10 bg-blue-light hover:opacity-60 cursor-pointer rounded-full center-flex'>
                                    <FaYoutube />
                                </a>
                                <a href='' className='h-10 w-10 bg-blue-light hover:opacity-60 cursor-pointer rounded-full center-flex'>
                                    <FaFacebook />
                                </a>
                                <a href='' className='h-10 w-10 bg-blue-light hover:opacity-60 cursor-pointer rounded-full center-flex'>
                                    <FaInstagram />
                                </a>
                            </div>
                        </div>
                    </SidebarModal>
                </div>
                

            </div>
        </div>
    )
}

export default Navbar