"use client"

import { BgKepriMaju } from "@/assets/background"
import PieChart from "@/components/element/pieChart"
import BannerBreadcrumb from "@/components/element/user/BannerBreadcrumb"
import MainLayout from "@/components/layout/mainLayout"
import Image from "next/image"
import Link from "next/link"
import { FaFacebook, FaInstagram, FaTiktok } from "react-icons/fa"

const Page = () => {

    return (
        <MainLayout>
            <>
                <BannerBreadcrumb 
                    links={[{ href: "/", title: "Home" }]}
                    title="Stuktur Organisasi"
                />

                <div className="w-full h-max py-20 center-flex">
                    <div className="container flex md:flex-row flex-col gap-10">
                        <div className="flex flex-col flex-1  gap-16">
                            <div className="flex gap-2">
                                <h2 className="font-semibold">Jumlah Pegawai</h2>
                                <p>BPMP Provinsi Kepulauan Riau keseluruhan adalah</p>
                                <h2 className="font-semibold">61 Orang</h2>
                            </div> 
                            <div className=" flex justify-center gap-10  ">
                                <div className="h-72 w-72">
                                    <PieChart 
                                        labels={[
                                            "PNS",
                                            "PPPK",
                                            "PPNPN",
                                        ]}
                                        data={[55.7, 4.9, 49.3]}
                                        backgroundColor={[
                                            "#3366CC",
                                            "#DC3912",
                                            "#FF9900",
                                        ]}
                                    />
                                </div>
                                <div className="flex flex-col gap-3">
                                {[
                                    "PNS",
                                    "PPPK",
                                    "PPNPN",
                                ].map((label, index) => (
                                    <div key={index} className="flex items-center gap-3">
                                        <div
                                            className="w-4 h-4 rounded-full"
                                            style={{
                                                backgroundColor: [
                                                    "#3366CC",
                                                    "#DC3912",
                                                    "#FF9900",
                                                ][index],
                                            }}
                                        />
                                        <p className="text-[10px]">{label}</p>
                                    </div>
                                ))}
                            </div>
                            </div>  
                        </div>
                            
                        <div className="flex flex-col gap-8 items-center">
                            <Image 
                                src={BgKepriMaju}
                                alt="Image Kepri"
                                className="h-32 w-32 rounded-full object-cover"
                            />
                            <div className="flex flex-col gap-2 items-center w-full">
                                <h5 className="font-semibold uppercase text-blue-secondary">Kunjungi</h5>
                                <h2 className="text-3xl font-semibold text-blue-light">Profile</h2>
                                <p className="font-light">
                                    BPMP Provinsi Kepulauan Riau
                                </p>
                                <div className="flex items-center gap-5 text-2xl mt-3 mb-10">
                                    <a href="" target="blank">
                                        <FaFacebook />
                                    </a>
                                    <a href="" target="blank">
                                        <FaInstagram />
                                    </a>
                                    <a href="" target="blank">
                                        <FaTiktok />
                                    </a>
                                </div>
                                <div className="flex flex-col gap-5 ">
                                    <Link href="/visi-dan-misi">
                                        <div className="w-72 h-12 bg-blue-secondary rounded-xl center-flex text-white">
                                            <p>Visi dan Misi</p>
                                        </div>
                                    </Link>
                                    <Link href="/tugas-dan-fungsi">
                                        <div className="w-72 h-12 bg-blue-secondary rounded-xl center-flex text-white">
                                            <p>Tugas Dan Fungsi</p>
                                        </div>
                                    </Link>
                                    <Link href="/struktur-organisasi">
                                        <div className="w-72 h-12 bg-blue-secondary rounded-xl center-flex text-white">
                                            <p>Struktur Organisasi</p>
                                        </div>
                                    </Link>
                                    <Link href="/sumber-daya-manusia">
                                        <div className="w-72 h-12 bg-blue-secondary rounded-xl center-flex text-white">
                                            <p>Sumber Daya Manusia</p>
                                        </div>
                                    </Link>
                                    <Link href="/maklumat-pelayanan">
                                        <div className="w-72 h-12 bg-blue-secondary rounded-xl center-flex text-white">
                                            <p>Maklumat Pelayanan</p>
                                        </div>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        </MainLayout>
    )
}

export default Page