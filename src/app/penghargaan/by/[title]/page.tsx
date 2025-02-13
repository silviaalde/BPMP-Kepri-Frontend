'use client';

import { ImagePlaceholder } from '@/assets/images';
import BannerBreadcrumb from '@/components/element/user/BannerBreadcrumb'
import MainLayout from '@/components/layout/mainLayout'
import { Penghargaan } from '@/services/api';
import Image from 'next/image';
import { useParams } from 'next/navigation';
import React, { useCallback, useEffect, useState } from 'react'

interface DataProps {
    title : string | null ;
    date : string;
    image : string | null ;
    category : string;
    location : string;
    content  : string;
}

const Page = () => {
    const { title } = useParams();
    const decodeTitle = typeof title === "string" ? decodeURIComponent(title) : "";
    const [data, setData] = useState<DataProps | null>(null);

    const fetchData = useCallback(async () => {
        try {
            const response = await Penghargaan.GetPenghargaan({ title : decodeTitle });
            setData(response?.data.data[0] || null);
        } catch (error) {
            console.log(error);
        }
    }, [decodeTitle]); // Depend on `category` so that the function updates when `category` changes.
        
    useEffect(() => {
        fetchData(); // Fetch data based on the `category` prop
    }, [decodeTitle, fetchData]);

    return (
        <MainLayout>
            <>
                <BannerBreadcrumb 
                    links={[
                        { href: "/", title: "Home" },
                        { href: "/penghargaan", title: "Penghargaan" },
                    ]}
                    title={decodeTitle}
                />

                <div className='w-full h-max py-20 center-flex'>
                    <div className='h-max container'>
                        {data ? (
                            <div className='flex flex-col gap-10'>
                                <Image 
                                    src={data.image || ImagePlaceholder }
                                    alt='Image Penghargaan'
                                    height={500}
                                    width={400}
                                    className='w-full'
                                />

                                <div
                                    dangerouslySetInnerHTML={{
                                        __html: data?.content, // Pastikan content berasal dari sumber terpercaya
                                    }}
                                />
                            </div>
                        ) : (
                            <div className='h-[400px] center-flex w-full text-black'>
                                <h2>{decodeTitle} Tidak ada</h2>
                            </div>
                        )}

                    </div>
                </div>
            </>
        </MainLayout>
    )
}

export default Page