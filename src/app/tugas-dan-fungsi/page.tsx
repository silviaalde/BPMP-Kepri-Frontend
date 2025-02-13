"use client"

import { BgKepriMaju } from "@/assets/background"
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
                    title="Tugas Dan Fungsi"
                />

                <div className="w-full h-max py-20 center-flex">
                    <div className="container flex md:flex-row flex-col gap-10">
                        <div className="flex flex-col gap-7 ">
                            <div className="flex flex-col gap-3">
                                <h2 className=" font-semibold text-xl">Tugas BPMP Provinsi Kepulauan Riau</h2>
                                <p>
                                Melaksanakan penjaminan dan peningkatan mutu pendidikan anak usia dini, pendidikan dasar, pendidikan menengah, dan pendidikan masyarakat di provinsi
                                </p>
                            </div>
                            <div className="flex flex-col gap-3">
                                <h2 className=" font-semibold text-xl">BPMP menyelenggarakan fungsi:</h2>
                                <p>
                                Pelaksanaan pemetaan mutu pendidikan anak usia dini, pendidikan dasar, pendidikan menengah, dan pendidikan masyarakat;
                                </p>
                                <div className="mx-6 flex flex-col gap-3 mt-5">
                                    <div className="flex gap-2">
                                        <p>1.</p>
                                        <p>
                                        Pengembangan model penjaminan dan peningkatan mutu pendidikan anak usia dini, pendidikan dasar, pendidikan menengah, dan pendidikan masyarakat;
                                        </p>
                                    </div>
                                    <div className="flex gap-2">
                                        <p>2.</p>
                                        <p>
                                        Pelaksanaan supervisi penjaminan dan peningkatan mutu pendidikan anak usia dini, pendidikan dasar, pendidikan menengah, dan pendidikan masyarakat dalam penjaminanmutu pendidikan;
                                        </p>
                                    </div>
                                    <div className="flex gap-2">
                                        <p>3.</p>
                                        <p>
                                        Pelaksanaan fasilitasi peningkatan mutu pendidikan anak usia dini, pendidikan dasar, pendidikan menengah, dan pendidikan masyarakat dalam penjaminan mutu pendidikan;
                                        </p>
                                    </div>
                                    <div className="flex gap-2">
                                        <p>4.</p>
                                        <p>
                                        Pengembangan dan pelaksanaan kemitraan di bidang penjaminan dan peningkatan mutu pendidikan anak usia dini, pendidikan dasar, pendidikan menengah, dan pendidikan masyarakat;
                                        </p>
                                    </div>
                                    <div className="flex gap-2">
                                        <p>5.</p>
                                        <p>
                                        Pemantauan dan evaluasi pelaksanaan penjaminan dan peningkatan mutu pendidikan anak usia dini, pendidikan dasar, pendidikan menengah, dan pendidikan masyarakat; dan
                                        </p>
                                    </div>
                                    <div className="flex gap-2">
                                        <p>6.</p>
                                        <p>
                                        Pelaksanaan urusan administrasi.
                                        </p>
                                    </div>
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