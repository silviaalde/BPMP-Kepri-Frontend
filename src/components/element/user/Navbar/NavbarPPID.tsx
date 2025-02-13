"use client";

import { ImageLogoBPMP1 } from "@/assets/images";
import Image from "next/image";
import NavMenu from "./NavMenu";
import { FaBars } from "react-icons/fa";
import { useEffect, useState } from "react";
import SidebarModal from "../sidebar/SidebarModals";
import SidebarMenu from "../sidebar/SidebarMenu";
import { MenuPPID } from "@/data/menu-ppid";

const NavbarPPID = () => {
    const [sidebarIsActive, setSidebarIsActive] = useState<boolean>(false);
    const [isScrolled, setIsScrolled] = useState(false);

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
        <div className={` ${isScrolled ? 'fixed top-0 left-0 right-0 bg-blue-secondary z-50 shadow-xl' : 'bg-blue-primary'} 
        w-full h-max min-h-20  px-3 md:px-10 flex items-center justify-between gap-10 py-4`}>
            <div className="flex items-center lg:justify-start justify-between lg:w-max w-full">
                <Image src={ImageLogoBPMP1} className="h-10 w-72" alt="Logo BPMP" />
                
                {/* Triger sidebar menu */}
                <FaBars 
                    onClick={() => setSidebarIsActive(true)}
                    className="flex lg:hidden text-xl text-white cursor-pointer" 
                />

                <SidebarModal
                    isOpen={sidebarIsActive}
                    onClose={() => setSidebarIsActive(false)}
                    positon="left"
                    className="bg-white"
                >
                    <div className="h-max w-full flex flex-col gap-3 mt-16">
                        {MenuPPID.map((item, index) => (
                            <SidebarMenu 
                                key={index}
                                {...item}
                            />
                        ))}
                    </div>
                </SidebarModal>
           
            </div>
            <div className="hidden lg:flex flex-wrap items-center gap-4 text-sm  justify-start  ">
                {MenuPPID.map((item, index) => (
                    <NavMenu 
                        key={index}
                        {...item}
                        textColor="text-white"
                    />
                ))}
            </div>
        </div>
    )
}

export default NavbarPPID