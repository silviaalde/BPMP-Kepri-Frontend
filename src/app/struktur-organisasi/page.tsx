"use client"

import { BgKepriMaju } from "@/assets/background"
import {  ImageKepalaBPMPKep, ImageKetuaPPID } from "@/assets/images"
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
                        <div className="flex flex-col flex-1 items-center">
                            <div className="h-max w-52 border rounded flex flex-col items-center text-sm py-5 ">
                                <Image 
                                    src={ImageKepalaBPMPKep}
                                    alt="Kepala BPMP"
                                    className="flex flex-1"
                                />
                                <h2 className="font-semibold">Warsita, S.S., M.Pd</h2>
                                <p>Kepala</p>
                            </div>
                            <div className="w-[1px] h-20 bg-gray-300"></div>
                            <div className="h-max w-52 border rounded flex flex-col items-center text-sm py-5 ">
                                <Image 
                                    src={ImageKetuaPPID}
                                    alt="Kepala BPMP"
                                    className="flex flex-1"
                                />
                                <h2 className="font-semibold">Dr. Roni Indra, S.Sos., M.Pd.</h2>
                                <p>Kepala Subbagian Umum</p>
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