"use client"

import AsideBlog from "@/components/element/user/AsideBlog";
import BannerBreadcrumb from "@/components/element/user/BannerBreadcrumb";
import CardBlog from "@/components/element/user/card/CardBlog";
import MainLayout from "@/components/layout/mainLayout";
import { Blog } from "@/services/api";
import { useParams } from "next/navigation"
import { useCallback, useEffect, useState } from "react";

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
    const params = useParams();
    const { title } = params;
    const Decodetitle = typeof title === 'string' ? decodeURIComponent(title) : '';

    const [data, setData] = useState<BlogState | null>(null)

    const fetchData = useCallback(async () => {
        try {
            const response = await Blog.GetBlog({ title : Decodetitle });
            setData(response?.data.data[0]);
        } catch (error) {
            console.log(error);
        }
    }, [Decodetitle]); // Depend on `category` so that the function updates when `category` changes.
    
    useEffect(() => {
        fetchData(); // Fetch data based on the `category` prop
    }, [Decodetitle, fetchData]); 

    return (
        <MainLayout>
            <>
                <BannerBreadcrumb 
                    links={[{ href: "/", title: "Home" }]}
                    title={Decodetitle}
                />

                {data ? (
                    <div className="w-full h-max py-20 center-flex">
                        <div className="h-max container flex lg:flex-row flex-col gap-7">
                            <div className="flex flex-1 flex-col gap-12">
                                {/* Pastikan data ada dan memiliki array yang dapat dipetakan */}
                                {data && Array.isArray(data) && data.map((item, index) => (
                                    <CardBlog 
                                        key={index}
                                        image={typeof item.image === "string" ? item.image : null}
                                        title={item.title || ""}
                                        date="December 1, 2024"
                                        category={"berita"}
                                        comment={0}
                                        content={item?.article || ""}
                                    />
                                ))}
                            </div>

                            {/* Aside */}
                            <AsideBlog />
                        </div>
                    </div>
                ) : (
                    <div className="h-[400px] w-full center-flex">
                        <h1 className="text-xl text-blue-secondary font-semibold">
                            Tidak ada {Decodetitle}
                        </h1>
                    </div>
                )}
            </>
        </MainLayout>
    )
}

export default Page