import { ImageSPLKerjaSama, ImageSPLKonsultasi, ImageSPLPeminjamanGedung, ImageSPLPengaduan, ImageSPLPermohonan } from "@/assets/images"
import MainLayout from "@/components/layout/mainLayout"
import Image from "next/image"

const Page = () => {

    const DataStandarPelayanan = [
        { 
            title : "Layanan Pengaduan", 
            image : ImageSPLPengaduan
        },
        { 
            title : "Layanan Konsultasi Program", 
            image : ImageSPLKonsultasi
        },
        { 
            title : "Layanan Data Dan Informasi Mutu Pendidikan", 
            image : ImageSPLPengaduan
        },
        { 
            title : "Layanan Permohonan Narasumber", 
            image : ImageSPLPermohonan
        },
        { 
            title : "Layanan Peminjaman Fasilitas Gedung", 
            image : ImageSPLPeminjamanGedung
        },
        { 
            title : "Layanan Kerjasama Peningkatan Mutu Pendidikan", 
            image : ImageSPLKerjaSama
        },
    ]

    return (
        <MainLayout>
            <div className="w-full h-max center-flex py-16">
                <div className="container grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-8">
                    {DataStandarPelayanan.map((item, index) => (
                        <div key={index} className="center-flex relative cursor-pointer group h-auto w-auto">
                            <Image 
                                src={item.image}
                                alt="Standar pelayanan image"
                                className="w-auto h-auto"
                            />
                            <div className="absolute bg-[#00000075] w-full h-full items-center justify-center  flex-col gap-3 group-hover:flex hidden
                                group-hover:transform group-hover:scale-105 transition-transform duration-700 ease-in-out
                            ">
                                <p className="text-white font-semibold">Standar Pelayanan</p>
                                <p className="text-white font-medium text-center ">
                                    {item.title}
                                </p>
                            </div>
                        </div>
                    ))}
                    
                </div>
            </div>
        </MainLayout>
    )
}

export default Page