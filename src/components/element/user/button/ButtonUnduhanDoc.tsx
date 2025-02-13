"use client"

import Link from "next/link"
import { useState } from "react";
import { FaDownload, FaEye, FaFilePdf } from "react-icons/fa";
import Image from "next/image";
import { GifSpinner } from "@/assets/gif";
import Modal from "../modals/Modals";

interface BtnUnduhanProps {
    title : string;
    link : string;
    menu : MenuItem[];
    type? : string;
}

interface MenuItem {
    title: string;
    file: string; // URL of the file
    size: string;
}

const ButtonUnduhanDoc = ({
    title,
    link,
    menu,
    type
} : BtnUnduhanProps) => {
    const [spinnerIsActive, setSpinnerIsActive] = useState<boolean>(false);
    const [modalsIsOpen, setModalsIsOpen] = useState<boolean>(false);

    const handleModals = () =>  {
        setSpinnerIsActive(true);

        setTimeout(() => {
            setSpinnerIsActive(false);
            setModalsIsOpen(true);
        }, 2000)
    }

    return (
        <>
            {type === "card" ? (
                <div className="h-36 w-full bg-gray-100  flex items-center px-5 justify-between ">
                    <Link
                        href={link}
                    >
                        <p className=" hover:underline text-blue-secondary font-medium">
                            {title}
                        </p>
                    </Link>
                    <div 
                         onClick={handleModals}
                        className="h-14 w-14 rounded-full  center-flex cursor-pointer bg-blue-secondary text-white flex-shrink-0 hover:opacity-60"
                    >
                        {spinnerIsActive ? (
                            <Image 
                                src={GifSpinner} 
                                alt="Gif Spinner"
                                className="h-7 w-7"
                            />
                        ) : (
                            <FaDownload />
                        )}
                    </div>
                </div>
            ) : (
                <div className="flex items-center justify-between h-16 w-full border-b">
                    <Link
                        href={link}
                    >
                        <p className="text-lg font-semibold hover:underline">
                            {title}
                        </p>
                    </Link>
                    <div className="flex items-center gap-3">
                        {spinnerIsActive && 
                            <Image 
                                src={GifSpinner} 
                                alt="Gif Spinner"
                                className="h-7 w-7"
                            />
                        }
                        <FaEye 
                            onClick={handleModals}
                            className="cursor-pointer text-3xl text-blue-light hover:text-white"
                        />
                    </div>
                </div>
            )}
            
            <Modal
                isOpen={modalsIsOpen}
                onClose={() => setModalsIsOpen(false)}
                classname="max-h-[80vh] w-[90%] max-w-[700px] py-10 px-5 overflow-y-auto bg-white"
            >
                <div className="flex flex-col gap-6">
                    {menu.map((items, index) => (
                        <div key={index} className="h-max w-full border flex items-center justify-between px-5 py-2">
                            <div className="flex items-center gap-5">
                                <FaFilePdf 
                                    className="text-blue-light text-3xl"
                                />
                                <div className="flex flex-col  text-blue-secondary">
                                    <p className="font-medium">
                                        {items.title}
                                    </p>
                                    <p className="text-sm">
                                        pdf ({items.size}) 
                                    </p>
                                </div>
                            </div>
                            <div className="flex items-center gap-2">
                                <Link href={items.file}>
                                    <div 
                                        className="h-10 w-10 border center-flex cursor-pointer text-blue-secondary text-lg hover:text-blue-light hover:border-blue-light"
                                    >
                                        <FaEye />
                                    </div>
                                </Link>
                                <Link href={items.file}>
                                    <div 
                                        className="h-10 w-10 border center-flex cursor-pointer text-blue-secondary text-lg hover:text-blue-light hover:border-blue-light"
                                    >
                                        <FaDownload />
                                    </div>
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>
            </Modal>
            
        </>
    )
}

export default ButtonUnduhanDoc