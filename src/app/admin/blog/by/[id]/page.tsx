"use client";

import AdminLayout from "@/components/layout/adminLayout"
import { Blog } from "@/services/api";
import { useParams } from "next/navigation"
import { useCallback, useEffect, useState } from "react";
import Image from "next/image";
import { FaCalendar, FaComment, FaFolder, FaUser } from "react-icons/fa";
import Link from "next/link";
import { ImagePlaceholder } from "@/assets/images";


interface BlogState {
    id: string; // UUID dari artikel
    title: string; // Judul artikel
    category: string; // Kategori artikel
    date: string; // Tanggal publikasi
    name: string; // Nama penulis atau pembuat artikel
    status: string; // Status publikasi artikel (e.g., "published")
    createdAt: string; // Waktu artikel dibuat
    updatedAt: string; // Waktu artikel terakhir diperbarui
    image: string | null; // URL gambar untuk artikel
    article: string; // Isi artikel dalam format HTML
}

const Page = () => {
    const [data, setData] = useState<BlogState | null>(null)
    const params = useParams();
    const { id } = params;
    const title = typeof id === 'string' ? decodeURIComponent(id) : '';

    const fetchData = useCallback(async () => {
        try {
            const response = await Blog.GetBlog({ title : title });
            setData(response?.data.data[0]);
        } catch (error) {
            console.log(error);
        }
    }, [title]); // Depend on `category` so that the function updates when `category` changes.
    
    useEffect(() => {
        fetchData(); // Fetch data based on the `category` prop
    }, [title, fetchData]); 


    return (
        <AdminLayout>
            <div className="h-max w-full  pb-20">
                {data? (
                    <div className="flex-col gap-5 w-full flex">
                        <Image 
                            src={data?.image || ImagePlaceholder}
                            alt={`imag ${data?.title}`}
                            width={600}
                            height={250}
                            className="w-full h-[350px] object-cover"
                        />
                        <div className="h-max w-full flex flex-col gap-5">
                            <div className="h-max flex items-center gap-6">
                                <div className="flex items-center gap-2">
                                    <FaCalendar
                                        className="text-blue-light"
                                    />
                                    <p className="text-sm">{data?.date}</p>
                                </div>
                                <div className="flex items-center gap-2">
                                    <FaFolder
                                        className="text-blue-light"
                                    />
                                    <Link href={`/blog/${data?.category}`}>
                                        <p className="text-sm hover:text-blue-light ">{data?.category}</p>
                                    </Link>
                                </div>
                                <div className="flex items-center gap-2">
                                    <FaUser
                                        className="text-blue-light"
                                    />
                                    <p className="text-sm">{data?.name}</p>
                                </div>
                                <div className="flex items-center gap-2">
                                    <FaComment
                                        className="text-blue-light"
                                    />
                                    <p className="text-sm">0 Comments</p>
                                </div>
                            </div>

                            <h4 className="text-2xl text-blue-secondary hover:text-blue-light uppercase font-semibold tracking-wider">
                                {data?.title}
                            </h4>

                            <div
                                dangerouslySetInnerHTML={{
                                    __html: data?.article, // Pastikan content berasal dari sumber terpercaya
                                }}
                            />

                            <hr />
                        </div>
                    </div>

                ) : (
                    <div className="h-[400px] w-full center-flex">
                        <h1 className="text-xl text-blue-secondary font-semibold">
                            {title} Tidak terdaftar 
                        </h1>
                    </div>
                )}
            </div>
        </AdminLayout>
    )
}

export default Page