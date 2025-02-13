"use client"

import Image from "next/image"
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import { DataPegawai } from "@/data/data-pegawai";
import { ImagePlaceholder } from "@/assets/images";
import Link from "next/link";

const PegawaiSlider = () => {

    return (
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
                    delay: 1000, // 4 seconds per slide
                    disableOnInteraction: false,
                }}
                pagination={{ clickable: true }}
                
                modules={[Navigation, Pagination, Autoplay]}
            >
                {DataPegawai.slice(0, 6).map((item, index) => (
                    <SwiperSlide
                        key={index}
                    >
                        <Link 
                            href={`/ppid/team/${item.name}`} 
                            className="flex flex-col justify-end gap-5 cursor-pointer"
                        >
                            <Image 
                                src={item.image ? item.image : ImagePlaceholder}
                                alt="image silvia"
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
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    )
}

export default PegawaiSlider