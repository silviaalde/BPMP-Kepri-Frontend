"use client";

import { useState } from 'react';
import { ImagePlaceholder } from '@/assets/images';
import BannerBreadcrumb from '@/components/element/user/BannerBreadcrumb';
import LayoutPPID from '@/components/layout/ppidLayout';
import { DataPegawai } from '@/data/data-pegawai';  // Assuming Pegawai is an interface for each employee
import Image, { StaticImageData } from 'next/image';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import { GifSpinnerBlue } from '@/assets/gif';
import Link from 'next/link';

const ITEMS_PER_PAGE = 6; // Jumlah data per halaman

// Define types for better type safety
interface TeamItem {
  title: string;
}

interface Pegawai {
    name : string;
    position : string;
    image : StaticImageData | null;
}

const Page = () => {
    const [selectedTeam, setSelectedTeam] = useState<string>("All");
    const [currentPage, setCurrentPage] = useState<number>(1);
    const [spinerIsActive, setSpinnerIsActive] = useState<boolean>(false);

    const Team: TeamItem[] = [
        { title: "All" },
        { title: "PPID" },
        { title: "Timker 01" },
        { title: "Timker 02" },
        { title: "Timker 03" },
        { title: "Timker 04" },
        { title: "Timker 05" },
    ];

    const filterPegawai = (team: string): Pegawai[] => {
        switch (team) {
            case "All":
                return DataPegawai;
            case "PPID":
                return DataPegawai.filter((pegawai) =>
                    ["Ferdian Syah", "Nurul Wahida Nasution", "Silvia Elrahman", "Lilik Sri Kusumaningayu D.", "Ellyco Alvian", "Supri Ariyadi", "Angga Putra Kelana"].includes(pegawai.name)
                );
            case "Timker 01":
                return [];
            case "Timker 02":
                return DataPegawai.filter((pegawai) =>
                    ["Lilik Sri Kusumaningayu D.", "Angga Putra Kelana"].includes(pegawai.name)
                );
            case "Timker 03":
                return DataPegawai.filter((pegawai) => pegawai.name === "Nurul Wahida Nasution");
            case "Timker 04":
                return DataPegawai.filter((pegawai) => pegawai.name === "Ellyco Alvian");
            case "Timker 05":
                return DataPegawai.filter((pegawai) =>
                    ["Ferdian Syah", "Silvia Elrahman", "Supri Ariyadi"].includes(pegawai.name)
                );
            default:
                return [];
        }
    };

    const paginateData = (data: Pegawai[]): Pegawai[] => {
        const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
        return data.slice(startIndex, startIndex + ITEMS_PER_PAGE);
    };

    const filteredPegawai = filterPegawai(selectedTeam);
    const totalPages = Math.ceil(filteredPegawai.length / ITEMS_PER_PAGE);

    const handlePagination = (item: TeamItem) => {
        setSpinnerIsActive(true);
        
        setTimeout(() => {
            setSelectedTeam(item.title);
            setCurrentPage(1);
            setSpinnerIsActive(false);
        }, 2000);
    };

    return (
        <LayoutPPID>
            <>
                <BannerBreadcrumb
                    links={[{ href: "/ppid", title: "PPID" }]}
                    title='Team'
                />
                <div className='w-full h-max center-flex py-20'>
                    <div className='container h-full flex-col flex gap-14'>
                        <div className='flex items-center justify-center flex-wrap gap-4'>
                            {Team.map((item, index) => (
                                <button
                                    key={index}
                                    onClick={() => handlePagination(item)}
                                    className={`${selectedTeam === item.title ? 'bg-blue-light text-white' : ' bg-transparent text-blue-secondary'}
                                        px-3 py-2 rounded  hover:bg-blue-light hover:text-white font-medium`}
                                >
                                    {item.title}
                                </button>
                            ))}
                        </div>
                        {spinerIsActive && 
                            <div className='h-10 w-full center-flex'>
                                <Image 
                                    src={GifSpinnerBlue}
                                    alt='Gif Spinner'
                                    className='h-20 w-20'
                                />
                            </div>
                        }
                        <div className={`${spinerIsActive ? 'opacity-60' : ''} w-full h-max grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5`}>
                            {paginateData(filteredPegawai).map((item, index) => (
                                <Link
                                    href={`/ppid/team/${item.name}`} 
                                    key={index} 
                                    className="flex flex-col justify-end gap-9 cursor-pointer"
                                >
                                    <Image
                                        src={item.image ? item.image : ImagePlaceholder}
                                        alt={item.name}
                                        className='flex flex-1 w-full'
                                    />
                                    <div className="flex flex-col items-center">
                                        <p className="text-xs">
                                            {item.position}
                                        </p>
                                        <h4 className="text-blue-secondary text-2xl font-semibold">
                                            {item.name}
                                        </h4>
                                    </div>
                                </Link>
                            ))}
                        </div>
                        {/* Pagination */}
                        <div className='flex items-center justify-center gap-3'>
                            {currentPage > 1 && (
                                <button
                                    onClick={() => {
                                        setSpinnerIsActive(true);
                                        setTimeout(() => {
                                            setCurrentPage(currentPage - 1);
                                            setSpinnerIsActive(false);
                                        }, 2000);
                                    }}
                                    className="h-12 w-12 font-medium rounded bg-gray-200  hover:bg-blue-light center-flex"
                                >
                                    <FaChevronLeft />
                                </button>
                            )}

                            {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                                <button
                                    key={page}
                                    onClick={() => {
                                        setSpinnerIsActive(true);
                                        setTimeout(() => {
                                            setCurrentPage(page);
                                            setSpinnerIsActive(false);
                                        }, 2000);
                                    }}
                                    className={`h-12 w-12 font-medium rounded ${currentPage === page ? 'bg-blue-light text-white' : 'bg-gray-200 text-gray-800'}`}
                                >
                                    {page}
                                </button>
                            ))}

                            {currentPage < totalPages && (
                                <button
                                    onClick={() => {
                                        setSpinnerIsActive(true);
                                        setTimeout(() => {
                                            setCurrentPage(currentPage + 1);
                                            setSpinnerIsActive(false);
                                        }, 2000);
                                    }}
                                    className="h-12 w-12 font-medium rounded bg-gray-200  hover:bg-blue-light center-flex"
                                >
                                    <FaChevronRight />
                                </button>
                            )}
                        </div>
                    </div>
                </div>
            </>
        </LayoutPPID>
    );
};

export default Page;
