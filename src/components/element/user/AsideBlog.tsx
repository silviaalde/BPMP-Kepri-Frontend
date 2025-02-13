"use client";

import { Blog } from "@/services/api";
import { BlogDataProps } from "@/utils/interface/blog";
import Link from "next/link";
import { useEffect, useState } from "react";
import { FaSearch } from "react-icons/fa";
import { useRouter } from "next/navigation";

const AsideBlog = () => {
    const [data, setData] = useState<BlogDataProps[] | null>(null);
    const [searchValue, setSearchValue] = useState<string>('');
    const router = useRouter();

    // Fungsi untuk mengambil data blog
    const fetchData = async () => {
        try {
            const response = await Blog.GetBlog();
            setData(response?.data.data);
        } catch (error) {
            console.log(error);
        }
    };

    // Ambil data blog saat komponen dimuat
    useEffect(() => {
        fetchData();
    }, []);

    // Fungsi untuk menangani pencarian saat menekan Enter
    const handleSearch = (e: React.KeyboardEvent) => {
        if (e.key === "Enter" && searchValue.trim() !== "") {
            // Navigasi ke halaman pencarian
            router.push(`/blog/search/${searchValue}`);
        }
    };

    return (
        <div className="w-full lg:w-[400px] h-max flex flex-col gap-6">
            <div className="w-full h-16 bg-blue-light px-5 flex items-center justify-between gap-5">
                <input
                    type="text"
                    className="flex flex-1 h-full placeholder:text-white bg-transparent focus:outline-none text-white"
                    placeholder="Search"
                    value={searchValue}
                    onChange={(e) => setSearchValue(e.target.value)} // Mengatur nilai pencarian
                    onKeyDown={handleSearch} // Menangani event Enter
                />
                <FaSearch className="text-white" />
            </div>
            <div className="flex flex-col p-7 bg-gray-100 gap-5">
                <h4 className="text-xl font-semibold text-blue-light">
                    Berita dan Opini Terakhir
                </h4>
                <div className="flex flex-col gap-3 text-sm">
                    {data && data.slice(0, 4).map((items, index) => (
                        <Link key={index} href={`/blog/by/${items.title}`}>
                            <p className="hover:text-blue-light cursor-pointer">
                                {items.title}
                            </p>
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default AsideBlog;
