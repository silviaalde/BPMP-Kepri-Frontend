"use client"

import { BgKepriMaju } from "@/assets/background"
import { ImagePrioritasPDM1, ImagePrioritasPDM2, ImagePrioritasPDM3 } from "@/assets/images"
import CardProgramPDM from "@/components/element/user/card/CardProgramPDM"
import MainLayout from "@/components/layout/mainLayout"
import Link from "next/link"
import { useState } from "react"
import { FaBriefcase, FaChevronRight, FaHands, FaUsers } from "react-icons/fa"

const Page = () => {
    const [searchName, setSearchName] = useState<string>("");
    const [searchCategory, setSearchCategory] = useState("");

    const DataProgramPDM = [
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
        
    ]

    const filteredData = DataProgramPDM.filter(item => {
        const matchesName = item.title.toLowerCase().includes(searchName.toLowerCase());
        const matchesCategory = item.category.toLowerCase().includes(searchCategory.toLowerCase());
        return matchesName && matchesCategory;
    });
     

    return (
        <MainLayout>
            <div className="flex flex-col w-full h-max">
                <div 
                    className="h-[200px] bg-cover bg-center relative p-3 flex items-end justify-center"
                    style={{
                        backgroundImage: `url(${BgKepriMaju.src})`, // Menambahkan gambar sebagai background
                    }}    
                >
                    <div className="absolute top-0 left-0 w-full h-full bg-[#142c66f1] opacity-70"></div>
                    <div className="flex items-center gap-2 z-10 text-white text-sm">
                        <p>Home</p>
                        <FaChevronRight className="text-sm" />
                        <Link href="/program-prioritas-pdm">
                            <p className="hover:text-blue-light">
                                Program Prioritas PDM
                            </p>
                        </Link>
                    </div>
                </div>

                <div 
                    className="w-full h-max center-flex py-20"
                    
                >
                    <div className="container h-max flex flex-col gap-10">  
                        <div className="flex items-center md:flex-row flex-col gap-8">
                            <input 
                                type="text" 
                                className="h-12 w-full border rounded indent-3 focus:outline-none placeholder:text-black"
                                placeholder="Name"
                                value={searchName}
                                onChange={(e) => setSearchName(e.target.value)}
                            />
                             <select 
                                name="" 
                                id="" 
                                className="h-12 w-full border rounded indent-3 focus:outline-none"
                                value={searchCategory}
                                onChange={(e) => setSearchCategory(e.target.value)} // Menangani perubahan input category
                            >
                                <option value="">All Category</option>
                                <option value="Utama">Utama</option>
                                <option value="Program Prioritas PDM">Program Prioritas PDM</option>
                            </select>
                        </div>
                        <hr />
                        <div className="h-max w-full grid md:grid-cols-2 grid-cols-1 gap-x-10 gap-y-20">
                            {filteredData.map((item, index) => (
                                <CardProgramPDM 
                                    image={item.Image}
                                    key={index}
                                    title={item.title}
                                    Icon={item.icon }
                                />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </MainLayout>
    )
}

export default Page