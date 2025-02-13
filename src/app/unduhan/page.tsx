'use client';

import { useCallback, useEffect, useState } from "react";
import MainLayout from "@/components/layout/mainLayout";
import AnggaranBars from "@/components/element/user/AnggaranBars";
import ButtonUnduhanDoc from "@/components/element/user/button/ButtonUnduhanDoc";
import BannerBreadcrumb from "@/components/element/user/BannerBreadcrumb";
import { Unduhan } from "@/services/api";

interface File {
    id: string;
    unduhan_id: string;
    title: string;
    file: string; // URL of the file
    size: string; // Size of the file (e.g., "180kb")
}

interface Unduhan {
    id: string;
    title: string;
    content: string; // HTML content
    category: string;
    date: string; // Date when the unduhan was created or relevant
    files: File[]; // List of files associated with the unduhan
}

const Page = () => {
    const [searchTitle, setSearchTitle] = useState(""); // State untuk pencarian title
    const [selectedCategory, setSelectedCategory] = useState(""); // State untuk kategori
    const [currentPage, setCurrentPage] = useState(1); // State untuk pagination
    const [data, setData] = useState<Unduhan[] | null>(null);
    const [filteredData, setFilteredData] = useState<Unduhan[] | null>(null); // State untuk data yang difilter
    
    const fetchData = useCallback(async () => {
        try {
            const response = await Unduhan.GetUnduhan({ category: selectedCategory });
            setData(response?.data.data);
            setFilteredData(response?.data.data); 
        } catch (error) {
            console.log(error);
        }
    }, [selectedCategory]);

    // Filter data berdasarkan pencarian title dan kategori
    const filterData = () => {
        if (data) {
            const filteredDocuments = data.filter((item) => {
                const isTitleMatch = item.title.toLowerCase().includes(searchTitle.toLowerCase());
                const isCategoryMatch = selectedCategory ? item.category === selectedCategory : true;
                return isTitleMatch && isCategoryMatch;
            });
            setFilteredData(filteredDocuments);
        }
    };

    useEffect(() => {
        fetchData(); // Ambil data saat komponen pertama kali dimuat
    }, [fetchData, selectedCategory]); // Hanya dijalankan sekali saat pertama kali dimuat

    // Pagination logic
    const itemsPerPage = 6;
    const totalPages = Math.ceil((filteredData?.length ?? 0) / itemsPerPage);
    const displayedDocuments = filteredData?.slice(
        (currentPage - 1) * itemsPerPage,
        currentPage * itemsPerPage
    );

    // Handle pagination change
    const handlePageChange = (page: number) => {
        setCurrentPage(page);
    };

    return (
        <MainLayout>
            <div className="h-max center-flex flex-col">
                <BannerBreadcrumb 
                    links={[{ href: "/", title: "Home" }]}
                    title="Sakip"
                />
                <div className="container h-max py-16 grid grid-cols-1 md:grid-cols-3 gap-8">
                    <AnggaranBars />
                    <div className="col-span-1 md:col-span-2 h-max flex flex-col gap-9">
                        <div className="h-max md:h-64 w-full bg-gray-100 center-flex flex-col px-9 gap-5 py-7">
                            <div className="h-max md:h-20 w-full flex items-center justify-center md:justify-between md:flex-row flex-col gap-8">
                                <div className="flex flex-col gap-1 w-full h-max">
                                    <p className="text-blue-secondary font-medium">Name</p>
                                    <input
                                        type="text"
                                        className="w-full h-12 focus:outline-none indent-3"
                                        value={searchTitle}
                                        onChange={(e) => setSearchTitle(e.target.value)}
                                    />
                                </div>
                                <div className="flex flex-col gap-1 w-full h-max">
                                    <p className="text-blue-secondary font-medium">Category</p>
                                    <select
                                        className="h-12 w-full indent-3 focus:outline-none text-sm"
                                        value={selectedCategory}
                                        onChange={(e) => setSelectedCategory(e.target.value)}
                                    >
                                        <option value="">All Category</option>
                                        <option value="Sakip">Sakip</option>
                                        <option value="RBI">RBI</option>
                                        <option value="SPI">SPI</option>
                                        <option value="POS">POS</option>
                                        <option value="Layanan Informasi Publik">Layanan Informasi Publik</option>
                                    </select>
                                </div>
                            </div>
                            <div className="h-max w-full flex items-center">
                                <button
                                    className="px-5 h-14 bg-blue-secondary text-white hover:opacity-65"
                                    onClick={() => {
                                        filterData();
                                        setCurrentPage(1); // Reset to first page when searching
                                    }}
                                >
                                    Find Document
                                </button>
                            </div>
                        </div>
                        <div className="h-max w-full grid grid-cols-1 md:grid-cols-2 gap-8">
                            {displayedDocuments?.map((item, index) => (
                                <ButtonUnduhanDoc
                                    key={index}
                                    title={item.title}
                                    link={`/unduhan/${item.title}`}
                                    menu={item.files}
                                    type="card"
                                />
                            ))}
                        </div>
                        {/* Pagination */}
                        <div className="flex justify-center items-center gap-2 mt-4">
                            {Array.from({ length: totalPages }, (_, index) => (
                                <button
                                    key={index}
                                    onClick={() => handlePageChange(index + 1)}
                                    className={`px-4 py-2 ${
                                        currentPage === index + 1
                                            ? "bg-blue-secondary text-white"
                                            : "bg-gray-200"
                                    }`}
                                >
                                    {index + 1}
                                </button>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </MainLayout>
    );
};

export default Page;
