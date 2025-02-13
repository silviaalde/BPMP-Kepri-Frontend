"use client" ;

import React, {  useState } from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

// Import your image
import { ImageBanner1, ImageBanner2, ImageBanner3, ImageBanner4 } from "@/assets/images";

const Banners = [
    { 
        img : ImageBanner1, 
        title : "BPMP provinsi Kepulauan Riau Sebagai Mitra Strategis Pemda Mendapatkan", 
        heading : "Apresiasi Gubernur Kepulauan Riau", 
        url : "/"
    },
    { 
        img : ImageBanner2, 
        title : "Kepulauan Riau raih penghargaan terbanyak pada", 
        heading : "Anugerah merdeka belajar 2024", 
        url : "/"
    },
    { 
        img : ImageBanner3, 
        title : "Penandatanganan fakta integritas dan dukungan", 
        heading : "Perlaksanaan PPDB TA 2024 / 2025", 
        url : "/"
    },
    { 
        img : ImageBanner4, 
        title : "Gubernur Kepulauan Riau Apresiasi Peraihan Penghargaan", 
        heading : "AMB 2024 KEMENDIKBUDRISTEK", 
        url : "/"
    },
]

const BannerSlider = () => {
    const [activeIndex, setActiveIndex] = useState(0);

    return (
        <div className="w-full h-[400px] sm:h-[400px] md:h-[500px] xl:h-[700px]">
            <Swiper
                spaceBetween={0}
                slidesPerView={1}
                loop={true}
                autoplay={{
                    delay: 6000, // 4 seconds per slide
                    disableOnInteraction: false,
                }}
                pagination={{ clickable: true }}
                navigation={false}
                modules={[Navigation, Pagination, Autoplay]}
                onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)} // Update active index
            >
            {Banners.map((items, index) => (
                <SwiperSlide key={index}>
                    <div className="w-full h-full relative overflow-hidden ">
                        {/* Gambar */}
                        <Image
                            src={items.img}
                            alt={`Banner ${index + 1}`}
                            className={`h-[400px] sm:h-[400px] md:h-[500px] xl:h-[700px] w-full object-cover`}
                            style={{
                            animation:
                                activeIndex === index ? "zoomEffect 4s ease-in-out" : "",
                            }}
                            priority={index === 0} // Prioritize loading for the first image
                        />
                        <div className="absolute top-0 left-0 w-full h-full bg-[#142c66f1] opacity-60"></div>

                        {/* Teks di Tengah dengan animasi */}
                        <div className="absolute inset-0 center-flex w-full text-white">
                            <div className="container flex flex-col gap-4">
                            <p className="uppercase font-medium text-animation">
                                {items.title}
                            </p>
                            <h2 className="text-3xl md:text-7xl font-semibold shadow-md uppercase heading-animation">
                                {items.heading}
                            </h2>
                            <button className="h-14 w-52 bg-yellow-400 text-sm font-medium mt-2 btn-animation">
                                Baca Selengkapnya
                            </button>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
            ))}
            </Swiper>
        </div>
    );
};

export default BannerSlider;
