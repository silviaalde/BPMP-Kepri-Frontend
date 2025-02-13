import { BgFooter } from "@/assets/background";
import { Logo } from "@/assets/icons";
import Image from "next/image";
import SocialLink from "../SocialLink";
import { FaMailBulk, FaPhone } from "react-icons/fa";
import Link from "next/link";

const Footer = () => {
    return (
        <div className="w-full h-max flex flex-col">
            <div className="min-h-[400px] h-max w-full bg-[#051A53] flex justify-center py-7 relative">
                <Image src={BgFooter} alt="" className="absolute bottom-0 right-0 opacity-5" />
                <div className="container flex flex-col gap-7">
                    {/* Logo and Information Section */}
                    <div className="w-full h-max md:h-24 flex md:flex-row flex-col items-start md:items-center justify-start md:justify-between gap-5">
                        <div className="flex items-center gap-2 md:gap-4 text-white">
                            <Image 
                                src={Logo} 
                                alt="Logo tut wuri handayani" 
                                className="h-12 w-12" 
                            />
                            <div className="flex flex-col">
                                <p className="text-2xl md:text-4xl font-bold" style={{ letterSpacing: '2px' }}>BPMP</p>
                                <p className="text-[5px] md:text-[10px]">BALAI PENJAMINAN MUTU PENDIDIKAN</p>
                            </div>
                            <div className="h-14 w-[1px] bg-white rounded-full"></div>
                            <div className="flex flex-col text-md md:text-lg font-medium">
                                <p>Provinsi</p>
                                <p>Kepulauan Riau</p>
                            </div>
                        </div>
                        <SocialLink type="footer" />
                    </div>

                    <hr />

                    {/* Footer Content Sections */}
                    <div className="grid md:grid-cols-2 sm:grid-cols-1 xl:grid-cols-5 md:gap-4 gap-7 h-max my-10 w-full text-white">
                        {/* Contact Section */}
                        <div className="flex flex-col gap-3 text-sm ">
                            <h1 className="text-2xl font-medium">KONTAK</h1>
                            <div className="flex flex-col gap-5">
                                <div className="flex items-center gap-2">
                                    <FaMailBulk />
                                    <p className="cursor-pointer">bpmpkepri@kemdikbud.go.id</p>
                                </div>
                                <div className="flex items-center gap-2">
                                    <FaPhone />
                                    <p className="cursor-pointer">(0771) 4442196</p>
                                </div>
                                <p className="cursor-pointer text-sm text-gray-400">Jl. Tata Bumi, Km.20 Ceruk Ijuk, Toapaya, Bintan</p>
                            </div>
                        </div>

                        {/* Jelajahi Section */}
                        <div className="flex flex-col gap-3">
                            <h1 className="text-2xl font-medium">JELAJAHI</h1>
                            <div className="flex flex-col gap-3 text-gray-400">
                                <Link href="/ppid">
                                    <p className="group inline-block relative">
                                        PPID
                                        <span className="footer-text-underline"></span>
                                    </p>
                                </Link>
                                <Link href="/">
                                    <p className="group inline-block relative">
                                        Kegiatan Mendatang
                                        <span className="footer-text-underline"></span>
                                    </p>
                                </Link>
                                <Link href="/">
                                    <p className="group inline-block relative">
                                        Berita Baru
                                        <span className="footer-text-underline"></span>
                                    </p>
                                </Link>
                                <Link href="/">
                                    <p className="group inline-block relative">
                                        Kontak
                                        <span className="footer-text-underline"></span>
                                    </p>
                                </Link>
                            </div>
                        </div>

                        {/* Profile Section */}
                        <div className="flex flex-col gap-3">
                            <h1 className="text-2xl font-medium">PROFILE</h1>
                            <div className="flex flex-col gap-3 text-gray-400">
                                <Link href="/">
                                    <p className="group inline-block relative">
                                        FAQ
                                        <span className="footer-text-underline"></span>
                                    </p>
                                </Link>
                                <Link href="/">
                                    <p className="group inline-block relative">
                                        Layanan
                                        <span className="footer-text-underline"></span>
                                    </p>
                                </Link>
                                <Link href="/">
                                    <p className="group inline-block relative">
                                        Survey
                                        <span className="footer-text-underline"></span>
                                    </p>
                                </Link>
                            </div>
                        </div>


                        {/* Subscription Section */}
                        <div className="flex flex-col gap-8 md:col-span-1 xl:col-span-2">
                            <h1 className="text-3xl font-bold uppercase" style={{ letterSpacing: '4px' }}>
                                Pendidikan adalah kunci masa depan bangsa yang lebih baik
                            </h1>
                            <div className="flex flex-col gap-2">
                                <p className="text-sm text-gray-400">Subscribe untuk mendapatkan berita terbaru seputar pendidikan</p>
                                <div className="w-full h-14 bg-white flex items-center gap-2">
                                    <input type="text" className="h-full flex flex-1 indent-3 text-sm focus:outline-none text-black" placeholder="Enter address" />
                                    <button className="h-14 px-7 bg-[#016BA3] hover:opacity-65">
                                        Subscribe
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>

            {/* Footer Copyright Section */}
            <div className="h-20 w-full bg-[#082060] flex items-center justify-center text-white">
                <p>© BPMP Prov. Kepri 2024</p>
            </div>
        </div>
    );
};

export default Footer;
