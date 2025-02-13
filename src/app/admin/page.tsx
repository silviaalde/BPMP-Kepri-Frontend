"use client";

import AdminLayout from "@/components/layout/adminLayout"
import { Stats } from "@/services/api";
import { useEffect, useState } from "react";

interface BlogCategoryCount {
    Berita: number;
    Opini: number;
    Artikel: number;
}

interface DashboardCounts {
    BlogcategoryCount: BlogCategoryCount;
    BlogCount: number;
    kegiatanCount: number;
    unduhanCount: number;
    faqCount: number;
}

const Page = () => {
    const [data, setData] = useState<DashboardCounts | null>(null);

    const fetchData = async () => {
        try {
            const response = await Stats.GetStats();
            setData(response?.data);
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        fetchData();
    }, [])

    return (
        <AdminLayout>
            <div className="w-full flex flex-1 flex-col gap-5">
                <div className="h-max w-full grid grid-cols-1 lg:grid-cols-2 gap-3">

                    <div className=" h-max bg-yellow-400 rounded-xl p-8 flex flex-col items-center gap-6 text-blue-secondary">
                        <h4 className="text-2xl lg:text-4xl font-semibold text-center">
                            Jumlah Publikasi
                        </h4>
                        <div className="w-full flex flex-1  items-center justify-center gap-7 ">
                            <div className="flex items-center gap-4">
                                <div className="flex flex-col items-center gap-1">
                                    <h4 className="text-3xl font-bold">
                                        {data?.BlogcategoryCount.Berita ? data.BlogcategoryCount.Berita : 0}
                                    </h4>
                                    <p className="font-semibold">
                                        Berita
                                    </p>
                                </div>
                                <div className="flex flex-col items-center gap-1">
                                    <h4 className="text-3xl font-bold">
                                    {data?.BlogcategoryCount.Opini ? data.BlogcategoryCount.Opini : 0}
                                    </h4>
                                    <p className="font-semibold">
                                        Opini
                                    </p>
                                </div>
                                <div className="flex flex-col items-center gap-1">
                                    <h4 className="text-3xl font-bold">
                                    {data?.BlogcategoryCount.Artikel ? data.BlogcategoryCount.Artikel : 0}
                                    </h4>
                                    <p className="font-semibold">
                                        Artikel
                                    </p>
                                </div>
                            </div>
                            <div className="h-24 w-24 bg-blue-secondary rounded-xl center-flex flex-col text-yellow-400">
                                <h4 className="text-4xl font-bold">
                                    {data?.BlogCount ? data.BlogCount : 0}
                                </h4>
                                <p className="font-semibold">
                                    Total
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className=" h-max  rounded-xl p-8 flex flex-col items-center gap-6 text-blue-secondary border border-yellow-500">
                        <h4 className="text-2xl lg:text-4xl font-semibold text-center">
                            Jumlah Unduhan
                        </h4>
                        <div className="w-full flex flex-1  items-center justify-center gap-7 ">
                            <div className="flex items-center gap-10">
                                <div className="flex flex-col items-center gap-1">
                                    <h4 className="text-3xl font-bold">
                                        {data?.kegiatanCount ? data.kegiatanCount : 0}
                                    </h4>
                                    <p className="font-semibold">
                                        Kegiatan 
                                    </p>
                                </div>
                                <div className="flex flex-col items-center gap-1">
                                    <h4 className="text-3xl font-bold">
                                    {data?.unduhanCount ? data.unduhanCount : 0}
                                    </h4>
                                    <p className="font-semibold">
                                        Unduhan
                                    </p>
                                </div>
                                <div className="flex flex-col items-center gap-1">
                                    <h4 className="text-3xl font-bold">
                                    {data?.faqCount ? data.faqCount : 0}
                                    </h4>
                                    <p className="font-semibold">
                                        Faq
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>


                </div>
            </div>
        </AdminLayout>
    )
}

export default Page