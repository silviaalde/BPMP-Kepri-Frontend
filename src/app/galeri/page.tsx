"use client";

import MainLayout from '@/components/layout/mainLayout'
import { Kegiatan } from '@/services/api';
import React, { useEffect, useState } from 'react'
import Image from 'next/image';
import { FaChevronRight } from 'react-icons/fa';
import Link from 'next/link';

// Define the type for the image_kegiatan
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
    // Use the proper type for 'data'
    const [data, setData] = useState<KegiatanItem[] | null>(null);

    const fetchData = async () => {
        try {
            const response = await Kegiatan.GetKegiatan();
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
            <div className='center-flex h-max w-full py-16'>
                <div className='h-max container flex flex-col gap-16'>
                    <div className='flex flex-col gap-6 items-center'>
                        <div className='flex items-center gap-2 text-5xl font-semibold'>
                            <h1 className='text-blue-light'>Galeri</h1>
                            <h2 className='text-gray-400'>Kegiatan</h2>
                        </div>
                            <p>
                            Dokumentasi kegiatan BPMP Prov. Kepri dalam mendukung peningkatan mutu pendidikan di Provinsi Kepulauan Riau
                            </p>
                    </div>
                    {data ? (
                        <div className='h-max w-full grid grid-cols-4 gap-5'>
                            {data?.map((item, index) => (
                                <div 
                                    key={index}
                                    className='h-[400px] cursor-pointer relative group '
                                >
                                    {/* Check if image_kegiatan has any images and display the first one */}
                                    {item.image_kegiatan && item.image_kegiatan.length > 0 && (
                                        <Image 
                                            src={item.image_kegiatan[0].image} // Access the first image from the array
                                            alt={item.image_kegiatan[0].name} // Use the name of the image as alt text
                                            className='h-full w-full object-cover'
                                            height={500}
                                            width={500}
                                        />
                                    )}

                                    <div className='w-full h-full top-0 bg-[#7cd4fda9] hidden absolute group-hover:flex items-center justify-center gap-5 flex-col text-white'>
                                        <div className='h-16 w-16 border border-white z-10 rounded-full center-flex transition-transform duration-300 hover:rotate-45'>
                                            <FaChevronRight className='text-xl ' />
                                        </div>
                                        <Link
                                            href={`/galeri/${item.title}`}
                                        >
                                            <h4 className='text-2xl  font-semibold z-10 uppercase text-center hover:underline'>
                                                {item?.title}
                                            </h4>
                                        </Link>
                                    </div>
                                </div>
                            ))}
                        </div>
                    ) : (
                        <div className='h-[300px] w-full center-flex'>
                            <h4 className='text-xl font-semibold text-black'>
                                Tidak ada data Galeri
                            </h4>
                        </div>
                    )}
                </div>
            </div>
        </MainLayout>
    )
}

export default Page
