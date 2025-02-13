"use client"

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";


interface MenuProps {
    title : string;
    Icon: React.ComponentType<{ className?: string }> | null;
    url? : string;
    type? : "dropdown" | string;
    menu? : SidebarMenuItem[];
}

interface SidebarMenuItem {
    title: string;
    url: string;
}

const SidebarMenuAdmin = ({
    title,
    url,
    type,
    menu,
    Icon
} : MenuProps) => {
    const [isActive, setIsActive] = useState<boolean>(false)
    const validUrl = url || "/admin";
    const pathname = usePathname();

    return (
        <>
            {type === 'submenu' ? (
                <div className="flex flex-col gap-2 text-white">
                    <div 
                        onClick={() => setIsActive(!isActive)}
                        className={`
                            w-full h-12 flex items-center justify-between px-2 rounded-lg  cursor-pointer hover:bg-[#ffffff71] "`}
                    >
                        <div className="flex items-center gap-2">
                            <div className="h-10 w-10 center-flex text-xl">
                                {Icon && 
                                    <Icon  />
                                }
                            </div>
                            <p>
                                {title}
                            </p>
                        </div>
                        {isActive ? (
                            <FaChevronUp
                                className="text-sm "
                            />
                        ) : (
                            <FaChevronDown 
                                className="text-sm "
                            />
                        )}
                    </div>

                    <div className={`${isActive ? 'flex' : 'hidden'}
                    
                         flex-col gap-1 text-sm`}
                    >
                        {menu?.map((item, index) => (
                            <Link
                                href={item.url} 
                                key={index} 
                                className={`
                                    ${pathname === item.url ? 'bg-[#ffffff71]' : 'bg-transparent'} rounded-lg
                                    h-10 w-full px-2 flex items-center gap-2 cursor-pointer hover:bg-[#ffffff71]`}
                            >
                                <div className="h-10 w-10 ">
                                </div>
                                <p>{item.title}</p>
                            </Link>
                        ))}
                    </div>
                </div>
            ) : (
                <Link href={validUrl} className={`${pathname === url ? 'bg-[#ffffff71]' : 'bg-transparent'}
                w-full h-12 flex items-center rounded-lg px-2 text-white cursor-pointer hover:bg-[#ffffff71]`}>
                    <div className="flex items-center gap-2">
                        <div className="h-10 w-10 center-flex text-xl">
                                {Icon && 
                                    <Icon  />
                                }
                        </div>
                        <p>
                            {title}
                        </p>
                    </div>
                </Link>
            )}
        </>
    )
}

export default SidebarMenuAdmin