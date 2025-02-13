"use client";

import BannerBreadcrumb from "@/components/element/user/BannerBreadcrumb"
import MainLayout from "@/components/layout/mainLayout"
import { Kegiatan } from "@/services/api";
import Image from "next/image";
import { useParams } from "next/navigation"
import { useCallback, useEffect, useState } from "react";

// Define the type for the ImageKegiatan
interface ImageKegiatan {
  id: string;
  name: string;
  image: string;
  kegiatan_id: string;
  created_at: string;
  updated_at: string;
}

// Define the type for the Kegiatan
interface KegiatanItem {
  id: string;
  title: string;
  description: string;
  date: string;
  location: string;
  department: string;
  created_at: string;
  updated_at: string;
  image_kegiatan: ImageKegiatan[]; // Add image_kegiatan here
}

const Page = () => {
    const params = useParams();
    const { title } = params;
    const titleDecode = typeof title === 'string' ? decodeURIComponent(title) : '';
    const [data, setData] = useState<KegiatanItem | null>(null); // State for a single KegiatanItem

    const fetchData = useCallback(async () => {
        try {
            const response = await Kegiatan.GetKegiatan({ title: titleDecode });
            setData(response?.data.data[0] || null); // Make sure to set the first item or null if no data
        } catch (error) {
            console.log(error);
        }
    }, [titleDecode]); // Only depend on `title` here

    useEffect(() => {
        fetchData(); // Fetch data based on the `title` prop
    }, [title, fetchData]);

    return (
        <MainLayout>
            <>
                <BannerBreadcrumb
                    links={[
                        { href: "/", title: "Home" },
                        { href: "/galeri", title: "Galeri" },
                    ]}
                    title={titleDecode}
                />

                {data ? (
                    <div className="w-full h-max py-20 center-flex">
                        <div className="h-max container flex flex-col gap-10">
                            <div className="grid xl:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5">
                                {data.image_kegiatan.map((item, index) => (
                                    <div key={index} className="h-[500px] bg-black">
                                        <Image
                                          src={item.image}
                                          alt={item.name}
                                          className="w-full h-full object-cover"
                                          height={500}
                                          width={500}
                                        />
                                    </div>
                                ))}
                            </div>
                            
                            <div className="w-full h-max flex lg:flex-row flex-col-reverse gap-5">
                                <div className="flex w-full lg:flex-1 h-max ">
                                    <div
                                        dangerouslySetInnerHTML={{
                                            __html: data?.description, // Pastikan content berasal dari sumber terpercaya
                                        }}
                                    />
                                </div>
                                <div className="h-max w-full lg:w-[400px] bg-white shadow-lg flex flex-col gap-5 px-7 py-12">
                                    <div className="flex flex-col gap-1">
                                        <h3 className="text-xl text-blue-secondary font-semibold">Category</h3>
                                        <p>Galeri</p>
                                    </div>
                                    <div className="flex flex-col gap-1">
                                        <h3 className="text-xl text-blue-secondary font-semibold">Date</h3>
                                        <p>{data?.date}</p>
                                    </div>
                                    <div className="flex flex-col gap-1">
                                        <h3 className="text-xl text-blue-secondary font-semibold">Location</h3>
                                        <p>{data?.location}</p>
                                    </div>
                                    <div className="flex flex-col gap-1">
                                        <h3 className="text-xl text-blue-secondary font-semibold">Department</h3>
                                        <p>{data?.department}</p>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                ) : (
                    <div className="w-full h-[500px] center-flex">
                        <h2>
                            {titleDecode} Tidak ada
                        </h2>
                    </div>
                )}
            </>
        </MainLayout>
    );
};

export default Page;
