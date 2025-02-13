'use client';

import { ImagePlaceholder } from "@/assets/images";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import { FaArrowRight, FaCalendar, FaFolder } from "react-icons/fa";

interface CardPenghargaanProps {
    title : string | null;
    date : string | null;
    category : string | null;
    image : string | null | StaticImageData;
}

const CardPenghargaan = ({
    title,
    date,
    category,
    image
} : CardPenghargaanProps) => {
    return (
        <div className='w-max max-w-[400px] h-[550px]  flex flex-col gap-7'>
            <Image 
                src={image || null || ImagePlaceholder}
                alt="Image Penghargaan"
                className="w-full h-[250px] object-cover"
                width={700}
                height={700}
            />
            <div className="flex flex-col gap-5 px-3">
                <div className="flex flex-col gap-3">
                    <div className="flex items-center gap-3">
                        <FaCalendar className="text-blue-light text-lg" />
                        <p className="text-sm">{date}</p>
                    </div>
                    <div className="flex items-center gap-3">
                        <FaFolder className="text-blue-light text-lg" />
                        <Link href={`/penghargaan/${category}`}>
                            <p className="text-sm hover:text-blue-light">{category}</p>
                        </Link>
                    </div>
                </div>
                <hr />
                <Link href={`/penghargaan/by/${title}`}>
                    <h2 className="text-xl text-blue-secondary font-semibold hover:underline">
                        {title}
                    </h2>
                </Link>
                <Link href={`/penghargaan/by/${title}`}>
                    <div className="flex items-center gap-2 hover:text-blue-light ">
                        <p className="font-medium underline">
                            View Exhbition
                        </p>
                        <FaArrowRight className="text-sm" />
                    </div>
                </Link>
            </div>
        </div>
    )
}

export default CardPenghargaan