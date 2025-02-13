import { ImagePlaceholder } from "@/assets/images";
import Image, { StaticImageData } from "next/image"
import Link from "next/link";
import { FaArrowRight } from "react-icons/fa";

interface CardPDMProps {
    image?: StaticImageData | null; // URL gambar
    title: string; // Judul
    Icon?: React.ComponentType<{ className?: string }> | null; // Ikon yang bisa diubah
}

const CardProgramPDM = ({
    image,
    title,
    Icon,
} : CardPDMProps) => {

    return (
        <div className="flex flex-col items-center relative group  ">
            {/* Gambar Utama */}
            <Image 
                src={image ? image : ImagePlaceholder}
                alt="Program PDM"
                className="w-full h-[260px] object-cover"
            />

            {/* Container Deskripsi */}
            <div className="h-max w-[90%] bg-white absolute bottom-[-30px] flex flex-col justify-center py-4 px-5 cursor-pointer group gap-2 shadow-xl">
                {/* Icon */}
                <div className="absolute top-[-45px] right-0 h-14 w-14 bg-blue-light flex items-center justify-center">
                    {Icon && 
                        <Icon className="text-2xl text-white" />
                    }
                </div>

                {/* Judul */}
                <h1 className="text-xl text-blue-light font-semibold">{title}</h1>

                {/* Konten yang muncul saat hover */}
                <div className="group-hover:flex hidden flex-col gap-5 mt-2 w-full ">
                    <p className="text-sm">{title}</p>
                    <Link href={`/program-prioritas-pdm/${title}`} 
                        className="w-full h-12 bg-gray-200 hover:bg-blue-light hover:text-white flex items-center justify-between px-4 text-sm font-medium"
                    >
                        <p>View Services</p>
                        <FaArrowRight />
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default CardProgramPDM