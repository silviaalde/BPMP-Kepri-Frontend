import { ImagePlaceholder } from "@/assets/images";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import { FaArrowRight } from "react-icons/fa";

interface BeritaItem {
    date: string | undefined; // Format: "YYYY-MM-DD"
    title: string | undefined;
    name: string | undefined;
    profile: StaticImageData; // URL gambar profil
    image: StaticImageData | string | null | undefined; // URL gambar berita
}

// Fungsi untuk memformat tanggal
const formatDate = (date: string | undefined) => {
    if (!date) return { day: "", month: "", year: "" };

    const months = [
        "Jan", "Feb", "Mar", "Apr", "Mei", "Jun",
        "Jul", "Agu", "Sep", "Okt", "Nov", "Des"
    ];
    

    const [year, month, day] = date.split("-"); // Pisahkan berdasarkan tanda "-"
    return {
        day,
        month: months[parseInt(month, 10) - 1], // Ambil nama bulan
        year
    };
};

const CardBerita = ({
    date,
    title,
    name,
    profile,
    image
}: BeritaItem) => {
    const { day, month, year } = formatDate(date); // Format tanggal menjadi bagian terpisah

    return (
        <div className="h-[530px] flex flex-col cursor-pointer group">
            <div className="h-[350px] bg-white w-full relative overflow-hidden">
                <Image
                    src={image || ImagePlaceholder}
                    alt="Sample"
                    className="w-full h-full  object-cover transform scale-100 group-hover:scale-110 transition-transform duration-300 ease-in-out"
                    height={100}
                    width={100}
                />
                <div className="absolute top-6 left-6 h-24 w-20 bg-white flex flex-col">
                    <div className="flex-1 bg-blue-light center-flex text-white text-3xl font-semibold">
                        <p>{day}</p>
                    </div>
                    <div className="py-1 text-xs text-blue-light text-center font-medium">
                        <p>{month}, {year}</p>
                    </div>
                </div>
            </div>

            <div className="flex flex-1 bg-white p-7 flex-col gap-5 relative">
                <Image src={profile} alt="Image Profile" className="h-10 w-10 rounded-full border border-blue-light absolute top-[-20px] object-cover" />
                <p>{name}</p>
                <Link href={`/blog/by/${title}`}>
                    <p className="text-blue-primary text-xl font-semibold group-hover:text-blue-light transition-colors ease-in">
                        {title}
                    </p>
                </Link>
                <Link href={`/blog/by/${title}`}>
                    <div className="h-12 w-full flex items-center justify-between px-5 bg-gray-100 hover:text-blue-light group">
                        <p className="text-sm font-medium">Baca Selengkapnya</p>
                        <FaArrowRight className="text-blue-primary group-hover:text-blue-light" />
                    </div>
                </Link>
            </div>
        </div>
    );
};

export default CardBerita;
