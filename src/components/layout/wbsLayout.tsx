"use client";

import { Logo } from "@/assets/icons"
import Image from "next/image"
import { ReactElement, useState } from "react";
import { FaBars } from "react-icons/fa"
import { FaX } from "react-icons/fa6";
import Link from "next/link";
import { usePathname } from "next/navigation";

interface Props {
    children : ReactElement;
}

const WbsLayout = ({
    children
} : Props) => {
    const [menuIsOpen, setMenuIsOpen] = useState<boolean>(false);
    const pathname = usePathname();

    return (
        <div className="w-full h-max min-h-screen flex flex-col font-serif">
            {/* Nav */}
            <div className="h-max md:h-20 w-full bg-blue-secondary center-flex text-white md:p-0 py-5">
                <div className="container h-full flex items-center justify-center md:justify-between md:flex-row flex-col gap-5">
                    <div className="flex items-center gap-4 w-full md:justify-start justify-between">
                        <Image src={Logo} alt="logo tut wuri handayani" className="h-14 w-14" />
                        <p className="text-xl font-semibold">
                            WBS BPMP KEPRI
                        </p>
                        {menuIsOpen 
                            ? 
                            <FaX 
                                className="md:hidden flex text-xl cursor-pointer"
                                onClick={() => setMenuIsOpen(false)}
                            /> 
                            : 
                            <FaBars 
                                className="md:hidden flex text-xl cursor-pointer"
                                onClick={() => setMenuIsOpen(true)}
                            />
                        }
                    </div>

                    {/* Menu */}
                    <div className={` ${menuIsOpen ? 'flex md:flex' : 'hidden md:flex'}
                        gap-4 text-sm md:flex-row flex-col w-full justify-end
                    `}>
                        <Link href='/wbs'>
                            <p
                                className={`hover:text-yellow-500  ${
                                pathname === "/wbs" ? "text-yellow-500 font-medium" : "text-white"
                                }`}
                            >
                                Beranda
                            </p>
                        </Link>
                        <Link href='/wbs/pengaduan'>
                            <p
                                className={`hover:text-yellow-500  ${
                                pathname === "/wbs/pengaduan" ? "text-yellow-500 text-medium" : "text-white"
                                }`}
                            >
                                Sampaikan Pengaduan
                            </p>
                        </Link>
                    </div>
                </div>
            </div>

            <div className="flex flex-1 w-full py-10 justify-center">
                {children}
            </div>
            
            {/* Footer */}
            <div className="w-full h-16 bg-[#A6A8A9] center-flex text-white">
                <div className="container flex items-center h-full text-sm font-light">
                    <p>© Tim WBS BPMP Provinsi Kepulauan Riau</p>
                </div>
            </div>
        </div>
    )
}

export default WbsLayout