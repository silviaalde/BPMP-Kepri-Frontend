"use client";

import BannerBreadcrumb from "@/components/element/user/BannerBreadcrumb";
import CardPenghargaan from "@/components/element/user/card/CardPenghargaan";
import MainLayout from "@/components/layout/mainLayout";
import { Penghargaan } from "@/services/api";
import { useParams } from "next/navigation";
import { useCallback, useEffect, useState } from "react";

interface DataProps {
    title : string;
    date : string;
    image : string | null;
    category : string;
    location : string;
    content  : string;
}

const Page = () => {
    const { category } = useParams();
    const decodeCategory = typeof category === "string" ? decodeURIComponent(category) : "";
    const [data, setData] = useState<DataProps[]>([]);

    const fetchData = useCallback(async () => {
        try {
            const response = await Penghargaan.GetPenghargaan({ category : decodeCategory })
            setData(response?.data.data);
        } catch (error) {
            console.log(error);
        }
    }, [decodeCategory]); // Depend on `category` so that the function updates when `category` changes.
    
    useEffect(() => {
        fetchData(); // Fetch data based on the `category` prop
    }, [decodeCategory, fetchData]);

    return (
        <MainLayout>
            <>
                <BannerBreadcrumb 
                    links={[
                        { href: "/", title: "Home" },
                        { href: "/penghargaan", title: "Penghargaan" },
                    ]}
                    title={decodeCategory}
                />

                <div className="w-full h-max py-20 center-flex">
                    <div className="h-max container">
                        {data ? (
                            <div className="w-full h-max grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3">
                                {data.map((item, index) => (
                                    <CardPenghargaan 
                                        key={index}
                                        title={item.title}
                                        date={item.date}
                                        category={item.category}
                                        image={item.image}
                                    />
                                ))}
                            </div>
                        ) : (
                            <div className="h-[400px] w-full center-flex">
                                <p> {decodeCategory} Tidak ada</p>
                            </div>
                        )}
                        
                    </div>
                </div>
            </>
        </MainLayout>
    )
}

export default Page