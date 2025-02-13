"use client"

import { BgKepriMaju } from "@/assets/background"
import {  ImageKepalaBPMPKep } from "@/assets/images"
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
                    title="Maklumat Pelayanan"
                />

                <div className="w-full h-max py-20 center-flex">
                    <div className="container grid lg:grid-cols-3 grid-cols-1 gap-2">
                        <div className="h-max flex flex-col gap-3">
                            <Image 
                                src={ImageKepalaBPMPKep} 
                                alt="Kepala BPMP"
                                className="object-contain"
                            />
                            <div className="flex flex-col gap-1">
                                <h2 className="font-semibold">Warsita, S.S., M.Pd.</h2>
                                <p>Kepala BPMP Prov. Kepulauan Riau</p>
                            </div>
                        </div>
                        <div className="flex flex-col gap-3 text-blue-secondary">
                            <h2 className=" font-semibold text-xl">Maklumat Pelayanan BPMP Provinsi Kepulauan Riau</h2>
                            <p>
                            “Kami Pimpinan dan segenap pegawai Balai Penjaminan Mutu Pendidikan Provinsi Kepulauan Riau, kami berjanji dan sanggup untuk melaksanakan pelayanan sesuai dengan standar pelayanan memberikan pelayanan sesuai dengan kewajiban dan akan dilakukan perbaikan secara terus menerus, bersedia untuk menerima sanksi, dan/atau memberikan kompensasi apabila pelayanan yang diberikan tidak sesuai standar”
                            </p>
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