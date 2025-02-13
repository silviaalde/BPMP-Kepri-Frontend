"use client";

import AsideBlog from "@/components/element/user/AsideBlog";
import BannerBreadcrumb from "@/components/element/user/BannerBreadcrumb";
import MainLayout from "@/components/layout/mainLayout"
import { Blog } from "@/services/api";
import { useParams } from "next/navigation"
import { useCallback, useEffect, useState } from "react";
import Image from "next/image";
import { FaCalendar, FaComment, FaFacebook, FaFolder, FaPinterest, FaTwitter, FaUser } from "react-icons/fa";
import Link from "next/link";

interface BlogState {
    id: string; // UUID dari artikel
    title: string; // Judul artikel
    category: string; // Kategori artikel
    date: string; // Tanggal publikasi
    name: string; // Nama penulis atau pembuat artikel
    status: string; // Status publikasi artikel (e.g., "published")
    createdAt: string; // Waktu artikel dibuat
    updatedAt: string; // Waktu artikel terakhir diperbarui
    image: string; // URL gambar untuk artikel
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
        <MainLayout>
            <>
                <BannerBreadcrumb 
                    links={[
                        { href: "/", title: "Home" },
                        { href: `/blog/${data?.category}`, title: `${data?.category}` },
                    ]}
                    title={title}
                />

                {data ? (
                    <div className="w-full h-max py-20 center-flex">
                        <div className="h-max container flex lg:flex-row flex-col gap-7">
                            <div className="flex flex-1 flex-col gap-8">
                                <Image 
                                    src={data?.image}
                                    alt={`imag ${data?.title}`}
                                    width={600}
                                    height={300}
                                    className="w-full h-[450px] object-cover"
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

                                    <div className="w-full h-max flex items-center justify-end">
                                        <div className="flex items-center gap-3">
                                            <h2 className="text-blue-secondary text-lg font-semibold">
                                                Share:
                                            </h2>
                                            <a 
                                                href={`https://x.com/intent/post?text=${title}&hashtags=simplesharebuttons`}
                                                className="h-12 w-12 rounded-full bg-gray-100 text-blue-secondary hover:bg-blue-light hover:text-white center-flex"
                                            >
                                                <FaTwitter />
                                            </a>
                                            <a 
                                                href={`https://www.facebook.com/sharer/sharer.php?u=${title}`}
                                                className="h-12 w-12 rounded-full bg-gray-100 text-blue-secondary hover:bg-blue-light hover:text-white center-flex"
                                            >
                                                <FaFacebook />
                                            </a>
                                            <a 
                                                href={`https://pinterest.com/pin/create/button/?url=${title}`}
                                                className="h-12 w-12 rounded-full bg-gray-100 text-blue-secondary hover:bg-blue-light hover:text-white center-flex"
                                            >
                                                <FaPinterest />
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <AsideBlog />
                        </div>
                    </div>
                ) : (
                    <div className="h-[400px] w-full center-flex">
                        <h1 className="text-xl text-blue-secondary font-semibold">
                            {title} Tidak terdaftar 
                        </h1>
                    </div>
                )}
            </>
        </MainLayout>
    )
}

export default Page