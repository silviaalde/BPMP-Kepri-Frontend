import React from "react";
import Link from "next/link";
import { FaChevronRight } from "react-icons/fa";
import { BgKepriMaju } from "@/assets/background";

// Definisi tipe untuk properti komponen
interface BannerProps {
    links: { href: string; title: string }[]; // Array link dengan href dan title
    title: string | string[] | undefined; // Judul halaman saat ini
}

const BannerBreadcrumb: React.FC<BannerProps> = ({  links, title }) => {
    const truncatedTitle = typeof title === "string" && title.length > 20 ? title.slice(0, 20) + "..." : title;
    return (
        <div
            className="w-full h-[200px] flex items-end justify-center py-3 bg-cover bg-center relative"
            style={{
                backgroundImage: `url(${BgKepriMaju.src})`,
            }}
        >
            <div className="absolute top-0 left-0 w-full h-full bg-[#142c66f1] opacity-60"></div>
            <div className="flex items-center justify-center gap-2 text-white z-10">
                {links.map((link, index) => (
                    <React.Fragment key={index}>
                        <Link href={link.href}>
                            <p className="hover:text-red-primary">{link.title}</p>
                        </Link>
                        {index < links.length  && <FaChevronRight />}
                    </React.Fragment>
                ))}
                <p className="  ">{truncatedTitle}</p>
                
            </div>
        </div>
    );
};

export default BannerBreadcrumb;
