"use client";

import Link from "next/link";
import { useState } from "react";
import { FaCaretRight, FaCaretUp, FaChevronDown, FaChevronUp } from "react-icons/fa";

interface Props {
    title : string;
    content? : string;
    type? : 'ppid' | string;
    menu? : MenuItems[];
}

interface MenuItems {
    title : string;
    url : string;
    isExternal?: boolean;
}

const Dropdown = ({
    title,
    content,
    type,
    menu
} : Props) => {
    const [isActive, setIsActive] = useState<boolean>(false);

    return (
        <div className="flex flex-col gap-7">
            {type === 'ppid' ? (
                <div className="flex flex-col ">
                    <div 
                        onClick={() => setIsActive(!isActive)}
                        className="flex items-center gap-2 text-white cursor-pointer h-10">
                        {isActive ? 
                            <FaCaretUp />
                            :
                            <FaCaretRight />
                        }
                        <p className="font-medium text-sm">{title}</p>
                    </div>
                    <div className={`${isActive ? 'flex' : 'hidden'} flex-col gap-2 h-max p-6`}>
                        {menu?.map((item, index) => (
                            <div key={index} className="flex items-center gap-1">
                                {item.isExternal ? (
                                    <a href={item.url} target="_blank" rel="noopener noreferrer" className="text-white flex  gap-1">
                                        <p>{index + 1}.</p>
                                        <span className="text-blue-light">{item.title}</span>
                                    </a>
                                ) : (
                                    <Link href={item.url} className="text-white flex gap-1 ">
                                        <p>{index + 1}.</p>
                                         <span className="text-blue-light">{item.title}</span>
                                    </Link>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            ) : (
                <>
                    <div 
                        onClick={() => setIsActive(!isActive)}
                        className={`  ${isActive ? 'border-red-primary' : 'border-gray-300'}
                            h-16 w-full flex items-center justify-between border-b cursor-pointer`}
                    >
                        <h2 className="text-xl text-blue-primary font-semibold">
                            {title}
                        </h2>
                        { isActive ? <FaChevronUp /> : <FaChevronDown /> }
                    </div>
                    <div 
                        className={` ${isActive ? 'flex' : 'hidden'}
                        h-10 flex items-center`}
                    >
                        <p>{content}</p>
                    </div>
                </>
            )}
        </div>
    )
}

export default Dropdown