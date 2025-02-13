import { IconsPenagananKepentingan, IconsPengendalianGratifikasi, IconsSPIP } from "@/assets/icons"
import MainLayout from "@/components/layout/mainLayout"
import Image from "next/image"
import Link from "next/link"

const Page = () => {
    const DataPengawasanInternal = [
        { url : '/pengawasan', image : IconsSPIP, title : "SPIP" },
        { url : '/pengawasan', image : IconsPenagananKepentingan, title : "Penanganan Benturan Kepentingan" },
        { url : '/pengendalian-gratifikasi', image : IconsPengendalianGratifikasi, title : "Pengendalian Gratifikasi" },
    ]

    return (
        <MainLayout>
           
            <div className="w-full h-[600px]  center-flex">
                <div className="container h-full flex flex-col items-center py-10 gap-2">
                    <h1 className="uppercase text-2xl text-blue-secondary font-semibold tracking-wider">Pengawasan internal</h1>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-3 w-full">
                        {DataPengawasanInternal.map((item, index) => (
                            <Link href={item.url} key={index} className="h-[400px]  flex flex-col items-center justify-between">
                                <Image src={item.image} alt="image pengawasan internal" className="w-full" />
                                <p className="p-2 border-t border-black">{item.title}</p>
                            </Link>
                        ))}
                    </div>
                </div>
            </div>

        </MainLayout>
    )
}

export default Page