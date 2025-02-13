'use client';

import BannerBreadcrumb from "@/components/element/user/BannerBreadcrumb";
import LayoutPPID from "@/components/layout/ppidLayout";
import { DataPegawai } from "@/data/data-pegawai";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import Image, { StaticImageData } from "next/image";
import { GifSpinnerBlue } from "@/assets/gif";

// Definisikan tipe Pegawai
type Pegawai = {
    name: string;
    position: string;
    image: StaticImageData| string | null;
};

const Page = () => {
    const params = useParams();
    const { name } = params;
    const decodedTitle = typeof name === 'string' ? decodeURIComponent(name) : '';
    const [data, setData] = useState<Pegawai | null>(null);

    useEffect(() => {
        if (decodedTitle) {
            const DataPribadi = DataPegawai.find(
                (item) => item.name.toLowerCase() === decodedTitle.toLowerCase()
            );
            setData(DataPribadi || null);
        }
    }, [decodedTitle]);

    if (!data) {
        return (
            <LayoutPPID>
                <div className="h-[600px] w-full flex justify-center items-center">
                    <Image 
                        src={GifSpinnerBlue}
                        alt="Spinner"
                    />
                </div>
            </LayoutPPID>
        );
    }

    return (
        <LayoutPPID>
            <>
                <BannerBreadcrumb 
                    links={[
                        { href: "/ppid", title: "PPID" },
                        { href: "/ppid/team", title: "Team" },
                    ]}
                    title={decodedTitle}
                />
                <div className='w-full h-max center-flex py-20'>
                    <div className="container h-full grid grid-cols-1 md:grid-cols-2 gap-10">
                        <Image 
                            src={data.image || '/placeholder.png'} // Pastikan ada default untuk null
                            alt="Image Pegawai"
                            width={400}
                            height={400}
                            className="object-cover"
                        />
                        <div className="h-max flex flex-col items-center md:items-start gap-5 ">
                            <p className="text-lg">
                                {data.position}
                            </p>
                            <h1 className="text-4xl text-blue-secondary font-semibold">
                                {data.name}
                            </h1>
                            <h4 className="text-xl text-blue-light font-semibold"> 
                                Melayani dengan Sepenuh Hati
                            </h4>
                        </div>
                    </div>
                </div>
            </>
        </LayoutPPID>
    );
};

export default Page;
