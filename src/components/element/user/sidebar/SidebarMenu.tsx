"use client";

import Link from "next/link";
import { useState } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";

interface MenuProps {
    title : string;
    url? : string;
    type? : "dropdown" | string;
    menu? : SidebarMenuItem[];
}

interface SidebarMenuItem {
    title: string;
    url: string;
}

const SidebarMenu = ({
    title,
    url,
    type,
    menu
} : MenuProps) => {
    const [isActive, setIsActive] = useState(false);
    const validUrl = url || "/";

    return (
        <div>
            {type === 'dropdown' ? (
                <>
                    <div 
                        onClick={() => setIsActive(!isActive)}
                        className="h-14 w-full flex items-center justify-between border-b hover:text-blue-light cursor-pointer"
                    >
                        <p>{title}</p>
                        {isActive ? <FaChevronUp /> : <FaChevronDown />}
                    </div>   
                    <div 
                        className={` ${isActive ? 'flex' : 'hidden'} flex-col 
                            w-full h-max pl-5
                            `}
                    >
                        {menu?.map((items, index) => (
                            <Link 
                                key={index}
                                href={items.url} 
                                className="h-14 w-full flex items-center justify-between border-b hover:text-blue-light cursor-pointer"
                            >
                                <p>{items.title}</p>
                            </Link>
                        ))}
                    </div>
                </>
            ) : (
                <Link 
                    href={validUrl} 
                    className="h-14 w-full flex items-center justify-between border-b hover:text-blue-light cursor-pointer"
                >
                    <p>{title}</p>
                </Link>
            )}
        </div>
    )
}

export default SidebarMenu