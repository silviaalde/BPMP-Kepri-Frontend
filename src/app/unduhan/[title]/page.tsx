"use client"

import AnggaranBars from "@/components/element/user/AnggaranBars";
import MainLayout from "@/components/layout/mainLayout";
import { useParams } from "next/navigation"
import Link from 'next/link';
import { FaDownload, FaEye, FaFilePdf } from "react-icons/fa";
import { useCallback, useEffect, useState } from "react";
import BannerBreadcrumb from "@/components/element/user/BannerBreadcrumb";
import { Unduhan } from "@/services/api";

// Definisikan tipe data untuk Content, SubContent, dan Document
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
    const [data, setData] = useState<Unduhan | null>(null);

    const params = useParams();
    const { title } = params;
    const decodedTitle = typeof title === 'string' ? decodeURIComponent(title) : '';

    const fetchData = useCallback(async () => {
        try {
            const response = await Unduhan.GetUnduhan({ title : decodedTitle });
            setData(response?.data.data[0]);
        } catch (error) {
            console.log(error);
        }
    }, [decodedTitle]);

    useEffect(() => {
        fetchData();
    }, [decodedTitle, fetchData]);

    if (!data) {
        return (
            <MainLayout>
                <div className="h-[600px] w-full flex justify-center items-center">
                    <p>Laporan tidak ditemukan.</p>
                </div>
            </MainLayout>
        );
    }

    return (
        <MainLayout>
            <div className="h-max center-flex flex-col">
                <BannerBreadcrumb
                    links={[
                        { href: "/", title: "Home" },
                        { href: "/unduhan", title: "Unduhan" },
                    ]}
                    title={decodedTitle}
                />
                <div className="container py-16 h-max grid grid-cols-1 lg:grid-cols-3 gap-8">
                    <AnggaranBars />
                    <div className="col-span-1 lg:col-span-2 h-max flex flex-col gap-2">
                        <h3 className="text-blue-light font-medium text-xl">
                            SAKIP, SEMUA UNDUHAN
                        </h3>
                        <div className="flex flex-col gap-14">
                            <div className="flex flex-col gap-10">
                                <h3 className="text-3xl font-semibold uppercase text-blue-secondary">
                                    {data.title}
                                </h3>
                                <div
                                    dangerouslySetInnerHTML={{
                                        __html: data?.content, // Pastikan content berasal dari sumber terpercaya
                                    }}
                                />
                            </div>

                            <div className="flex flex-col gap-10">
                                <h3 className="text-3xl font-semibold uppercase text-blue-secondary">
                                    Attachments
                                </h3>
                                <div className="flex flex-col gap-5">
                                    {data?.files.map((items, index) => (
                                        <div key={index} className="min-h-20 h-max w-full border flex items-center justify-between px-5 py-4">
                                            <div className="flex items-center gap-5">
                                                <FaFilePdf className="text-blue-light text-3xl" />
                                                <div className="flex flex-col text-blue-secondary">
                                                    <p className="font-medium">{items.title}</p>
                                                    <p className="text-sm">{items.size}</p>
                                                </div>
                                            </div>
                                            <div className="flex items-center gap-2">
                                                <Link href={items.file}>
                                                    <div className="h-10 w-10 border center-flex cursor-pointer text-blue-secondary text-lg hover:text-blue-light hover:border-blue-light">
                                                        <FaEye />
                                                    </div>
                                                </Link>
                                                <Link href={items.file}>
                                                    <div className="h-10 w-10 border center-flex cursor-pointer text-blue-secondary text-lg hover:text-blue-light hover:border-blue-light">
                                                        <FaDownload />
                                                    </div>
                                                </Link>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </MainLayout>
    )
}

export default Page;
