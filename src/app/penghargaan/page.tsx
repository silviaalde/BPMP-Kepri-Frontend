"use client";

import CardPenghargaan from "@/components/element/user/card/CardPenghargaan"
import MainLayout from "@/components/layout/mainLayout"
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { useEffect, useState } from "react";
import { Penghargaan } from "@/services/api";

interface DataProps {
    title : string;
    date : string;
    image : string | null;
    category : string;
    location : string;
    content  : string;
}

const Page = () => {
    const [data, setData] = useState<DataProps[] | null>(null);

    const fetchData = async () => {
        try {
            const response = await Penghargaan.GetPenghargaan();
            setData(response?.data.data); // Ensure 'response.data' is of the correct type
        } catch (error) {
            console.log(error);
        }
    }
    
    useEffect(() => {
        fetchData();
    }, []);
    
    return (
        <MainLayout>
            <div className="center-flex h-max w-full py-16">
                <div className="h-max container flex flex-col gap-16">
                    <div className="flex flex-col items-center gap-10">
                        <h1 className="text-2xl md:text-5xl font-semibold text-blue-secondary uppercase tracking-wider">
                            Penghargaan BPMP Prov. Kepri
                        </h1>

                        {data ? (
                            <div className="w-full h-max">
                                <Swiper
                                    spaceBetween={20}
                                    breakpoints={{
                                        640: { slidesPerView: 1 },
                                        768: { slidesPerView: 2 },
                                        1024: { slidesPerView: 3 },
                                    }}
                                    loop={true}
                                    autoplay={{
                                        delay: 3000, // 4 seconds per slide
                                        disableOnInteraction: false,
                                    }}
                                    pagination={{ clickable: true }}
                                    modules={[Navigation, Pagination, Autoplay]}
                                >   
                                    {data.filter(item => item.category === "BPMP Prov.kepri").map((item, index) => (
                                        <SwiperSlide key={index}>
                                            <CardPenghargaan 
                                                title={item.title}
                                                date={item.date}
                                                category={item.category}
                                                image={item.image}
                                            />
                                        </SwiperSlide>
                                    ))}
                                </Swiper>
                            </div>

                        ) : (
                            <div className="h-[400px] w-full center-flex">
                                <p>Tidak Ada Penghargaan</p>
                            </div>
                        )}
                    </div>
                    <div className="flex flex-col items-center gap-10">
                        <h1 className="text-2xl md:text-5xl font-semibold text-blue-secondary uppercase text-center tracking-wider">
                            Penghargaan Pemerintah Daerah & Satuan Pendidikan
                        </h1>

                        {data ? (
                            <div className="w-full h-max">
                                <Swiper
                                    spaceBetween={20}
                                    breakpoints={{
                                        640: { slidesPerView: 1 },
                                        768: { slidesPerView: 2 },
                                        1024: { slidesPerView: 3 },
                                    }}
                                    loop={true}
                                    autoplay={{
                                        delay: 3000, // 4 seconds per slide
                                        disableOnInteraction: false,
                                    }}
                                    pagination={{ clickable: true }}
                                    modules={[Navigation, Pagination, Autoplay]}
                                >   
                                    {data.filter(item => item.category !== "BPMP Prov.kepri").map((item, index) => (
                                        <SwiperSlide key={index}>
                                            <CardPenghargaan 
                                                title={item.title}
                                                date={item.date}
                                                category={item.category}
                                                image={item.image}
                                            />
                                        </SwiperSlide>
                                    ))}
                                </Swiper>
                            </div>

                        ) : (
                            <div className="h-[400px] w-full center-flex">
                                <p>Tidak Ada Penghargaan</p>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </MainLayout>
    )
}

export default Page