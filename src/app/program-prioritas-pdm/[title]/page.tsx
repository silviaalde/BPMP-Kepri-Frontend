"use client"

import { useParams } from "next/navigation";
import { useState, useEffect, useMemo } from "react";
import { FaBriefcase, FaUsers, FaHands, FaTwitter, FaPinterest, FaFacebook } from "react-icons/fa";
import { ImagePlaceholder, ImagePrioritasPDM1, ImagePrioritasPDM2, ImagePrioritasPDM3 } from "@/assets/images";
import MainLayout from "@/components/layout/mainLayout";
import Image, { StaticImageData } from "next/image";

type Program = {
    icon: React.ElementType | null;
    title: string;
    Image: StaticImageData | string | null;
    category: string;
};

const ProgramDetail = () => {
    const [program, setProgram] = useState<Program | null>(null);

    const params = useParams();
    const { title } = params;
    const decodedTitle = typeof title === 'string' ? decodeURIComponent(title) : '';

    // Memoize the DataProgramPDM array to avoid re-creating it on every render
    const DataProgramPDM = useMemo(() => [
        { 
            icon : FaBriefcase,  
            title : "Program Sekolah Penggerak", 
            Image : ImagePrioritasPDM1,
            category : "Utama"
        },
        { 
            icon : FaUsers,  
            title : "Implemntasi Kurikulum Merdeka", 
            Image : ImagePrioritasPDM2,
            category : "Utama"
        },
        { 
            icon : FaHands,  
            title : "Gerakan Sekolah Sehat", 
            Image : ImagePrioritasPDM3,
            category : "Utama"
        },
        { 
            icon : null,  
            title : "Gerakan Sekolah Sehat", 
            Image : null,
            category : "Program Prioritas PDM"
        },
        { 
            icon : null,  
            title : "Sumber Daya Sekolah (SDS)", 
            Image : null,
            category : "Program Prioritas PDM"
        },
        { 
            icon : null,  
            title : "Pendidikan Inklusif", 
            Image : null,
            category : "Program Prioritas PDM"
        },
        { 
            icon : null,  
            title : "Pencegahann dan Penanganan Kekerasan di Satuan Pendidikan", 
            Image : null,
            category : "Program Prioritas PDM"
        },
        { 
            icon : null,  
            title : "Pemulihan Pembelajaran / Buku Bacaan untuk Literasi Indonesia", 
            Image : null,
            category : "Program Prioritas PDM"
        },
        { 
            icon : null,  
            title : "Rapor Pendidikan / Perencanaan Berbasis Data", 
            Image : null,
            category : "Program Prioritas PDM"
        },
        { 
            icon : null,  
            title : "Penerimaan Peserta Didik Baru (PPDB)", 
            Image : null,
            category : "Program Prioritas PDM"
        },
        { 
            icon : null,  
            title : "Pemanfaatan TIK dalam Pembelajaran", 
            Image : null,
            category : "Program Prioritas PDM"
        },
        { 
            icon : null,  
            title : "Transisi PAUD ke SD", 
            Image : null,
            category : "Program Prioritas PDM"
        },
        { 
            icon : null,  
            title : "Asesmen Nasional", 
            Image : null,
            category : "Program Prioritas PDM"
        },
    ], []);

    useEffect(() => {
        if (decodedTitle) {
            const foundProgram = DataProgramPDM.find(item => item.title.toLowerCase() === decodedTitle.toLowerCase());
            setProgram(foundProgram || null);
        }
    }, [decodedTitle, DataProgramPDM]); 

    if (!program) {
        return (
            <MainLayout>
                <div className="h-full w-full flex justify-center items-center">
                    <p>Program tidak ditemukan.</p>
                </div>
            </MainLayout>
        );
    }

    return (
        <MainLayout>
            <div className="center-flex py-20">
                <div className="container flex flex-col h-max gap-14">
                    <Image 
                        src={program.Image || ImagePlaceholder}
                        alt="Image Program PDM"
                        className=" w-full h-[400px] object-cover"
                    />
                    <div className="flex flex-col gap-4">
                        <h4 className="text-blue-secondary uppercase text-3xl font-semibold">
                            {program.title}
                        </h4>
                        <p>
                            {program.title}
                        </p>
                    </div>
                    <div className="flex items-center gap-6">
                        <h4 className="text-xl font-semibold text-blue-secondary">
                            Share :
                        </h4>
                        <div className="flex items-center gap-2">
                            <div className="h-12 w-12 bg-gray-200 text-blue-secondary hover:bg-blue-light hover:text-white rounded-full center-flex cursor-pointer">
                                <FaTwitter />
                            </div>
                            <div className="h-12 w-12 bg-gray-200 text-blue-secondary hover:bg-blue-light hover:text-white rounded-full center-flex cursor-pointer">
                                <FaFacebook />
                            </div>
                            <div className="h-12 w-12 bg-gray-200 text-blue-secondary hover:bg-blue-light hover:text-white rounded-full center-flex cursor-pointer">
                                <FaPinterest />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </MainLayout>
    );
};

export default ProgramDetail;
