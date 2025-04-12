"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { ImageProfile } from "@/assets/images";
import { Testimoni } from "@/services/api";
import { BgTestimoni } from "@/assets/background";


const TestimoniSlider = () => {
    const [testimoni, setTestimoni] = useState<{
        name:string
        title : string,
        content : string
    }[]|null>(null);

    useEffect(()=>{
        Testimoni.getTestimoni().then((res)=>{
            console.log(res);
            if(res.status == 200){
                setTestimoni(res.data.data);
            }
        });
    },[]);

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
                    delay: 6000, // 4 seconds per slide
                    disableOnInteraction: false,
                }}
                pagination={{ clickable: true }}
                navigation={true}
                modules={[Navigation, Pagination, Autoplay]}
            >
                {testimoni ? 
                testimoni.map((testimonial, index) => (
                    <SwiperSlide key={index}>
                        <div className="bg-white shadow-lg flex flex-col gap-8 p-10 relative">
                            <Image 
                                src={BgTestimoni} 
                                alt={`Profile of ${testimonial.name}`} 
                                className="absolute top-0 right-0 w-52" 
                            />
                            <div className="w-full h-20 z-10 flex items-center gap-5">
                                <Image 
                                    src={ImageProfile} 
                                    alt="Profile" 
                                    className="h-20 w-20 object-cover" 
                                />
                                <div className="flex flex-col">
                                    <p className="text-xs">{testimonial.title}</p>
                                    <h2 className="text-blue-light font-semibold text-lg">{testimonial.name}</h2>
                                </div>
                            </div>
                            <hr />
                            <p className="overflow-y-auto h-72 max-h-72">
                                {testimonial.content}
                            </p>
                        </div>
                    </SwiperSlide>
                )):
                <div></div>
            }
            </Swiper>
        </div>
  ) ;
};

export default TestimoniSlider;
