import { BgBerlangganan, BgKepriMaju, BgPPID1, BgPPID2, BgPPID3 } from "@/assets/background"
import Footer from "@/components/element/user/Footer"
import NavbarPPID from "@/components/element/user/Navbar/NavbarPPID"
import SocialLink from "@/components/element/user/SocialLink"
import { FiMail } from "react-icons/fi"
import Image from "next/image"
import { IconsBriefcaseClock, IconsCalendar, IconsCalendarCheck } from "@/assets/icons"
import Dropdown from "@/components/element/user/Dropdown"
import SectionTitle from "@/components/element/user/SectionTitle"
import { ImageKetuaPPID } from "@/assets/images"
import { FaFile, FaPlay } from "react-icons/fa"
import ButtonToTop from "@/components/element/user/button/ButtonToTop"
import PegawaiSlider from "@/components/element/user/slider/PegawaiSlider"

const Page = () => {

    const ContentBanner = [
        {
            title : "Informasi Setiap Saat",
            icon : IconsBriefcaseClock,
            menu : [
                { title : 'Profile', url : '/ppid' },
                { title : 'Portal Layanan', url : '/portal_layanan' },
                { title : 'Akun Instagram', url : 'https://www.instagram.com/bpmp_kepri/', isExternal : true },
                { title : 'Akun Facebook', url : 'https://www.facebook.com/bpmpkepri/', isExternal : true },
                { title : 'Akun Tiktok', url : 'https://www.tiktok.com/@bpmpkepri', isExternal : true },
                { title : 'Akun X', url : 'https://x.com/bpmpkepri', isExternal : true },
                { title : 'Akun Youtube', url : 'https://www.youtube.com/@bpmpkepri', isExternal : true },
                { title : 'Akun WhatsApp', url : 'https://api.whatsapp.com/send/?phone=62811779916&text&type=phone_number&app_absent=0', isExternal : true },
                { title : 'Standar Pelayanan', url : '/standar-pelayanan' },
                { title : 'SOP Pengelolaan Permohonan Informasi Publik', url : '/doc/POS-Pengelolaan-Permohonan-Informasi-1.pdf' },
                { title : 'SOP  Pengelolaan Keberatan atas Informasi Publik', url : '/doc/POS-Pengelolaan-Keberatan-atas-Informasi-Publik-1.pdf' },
                { title : 'SOP Penanganan Sengketa Informasi Publik', url : '/doc/POS-Penanganan-Sengketa-Informasi-1.pdf' },
                { title : 'SOP Pendokumentasian Informasi Publik', url : '/doc/POS-Pendokumentasian-Informasi-Publik-2.pdf' },
                { title : 'SOP Pendokumentasian Informasi yang dikecualikan', url : '/doc/POS-Pendokumentasian-Informasi-Publik-2.pdf' },
                { title : 'SOP Penetapan dan Pemutakhiran Daftar Informasi Publik', url : '/doc/POS-Penetapan-dan-Pemutakhiran-Draft-Informasi-Publik-1.pdf' },
                { title : 'SOP Pengujian tentang Kosekuensi', url : '/doc/POS-Pengujian-Konsekuensi-1.pdf' },
                { title : 'Data Statistik Kepegawaian', url : '/ppid/statistik-pegawai' },
            ]
        }, 
        {
            title : "Informasi Serta Merta",
            icon : IconsCalendarCheck,
            menu : [
                { title : 'Pengumuman dari Kementerian Pendidikan, Kebudayaan, Riset, dan Teknologi', url : 'https://www.kemdikbud.go.id/main/?lang=id', isExternal : true },
            ]
        },
        {
            title : "Informasi berkala",
            icon : IconsCalendar,
            menu : [
                { title : 'LHKPN', url : '/ppid' },
                { title : 'Program dan Kegiatan', url : '/ppid' },
                { title : 'Agenda Kegiatan', url : '/ppid' },
                { title : 'Rencana Strategis', url : '/sakip/doc/Rencana Strategis' },
                { title : 'Laporan Keuangan', url : '/sakip/doc/Laporan Keuangan' },
                { title : 'Rencana Kerja Anggaran', url : '/ppid' },
                { title : 'DIPA', url : '/sakip/doc/Dokumen Anggaran' },
                { title : 'Laporan Kinerja', url : '/sakip/doc/Laporan Kinerja' },
                { title : 'Evaluasi Capaian Kinerja', url : '/sakip/doc/Dokumen Evaluasi Capaian Kinerja' },
                { title : 'Rencana Kinerja Tahunan', url : '/sakip/doc/Rencana Kinerja Tahunan' },
                { title : 'Lembar Hasil Evaluasi SAKIP', url : '/sakip/doc/Lembar Hasil Evaluasi Sakip' },
                { title : 'Rencana Aksi', url : '/sakip/doc/Rencana Aksi' },
                { title : 'Perjanjian Kinerja', url : '/sakip/doc/Perjanjian Kinerja' },
                { title : 'Survei Kepuasan Masyarakat', url : '/ppid' },
            ]
        }
    ]

    return (
        <div className="w-full min-h-screen h-max flex flex-col relative overflow-hidden">
            <div className="h-12 z-50 w-full bg-blue-primary hidden md:flex items-center justify-between pr-10 text-gray-200">
                <div className="flex items-center gap-8 text-sm text-gray-100 h-full">
                    <div className='flex items-center gap-2 bg-red-primary h-full px-10' >
                        <FiMail className='text-xl' />
                        <a href="" className="text-underline group ">bpmp.kepri@kemdikbud.go.id</a>
                    </div>
                    <a href="" className="text-underline group">Jl. Tata Bumi Km.20 Ceruk Ijuk, Toapaya, Bintan</a>
                </div>
    
                <SocialLink />
            </div>

            {/* Navbar */}
            <NavbarPPID />

            {/* Button To Top */}
            <ButtonToTop />

            {/* Bannner */}
            <div className="min-h-[340px] h-max w-full bg-blue-primary pb-14 pt-8 center-flex relative">
                <Image src={BgPPID1} className=" absolute bottom-[-30px] right-[-170px] pointer-events-none md:flex hidden"  alt="bg-banner-01" />
                <Image src={BgPPID2} className="absolute bottom-[-30px] left-[-170px] pointer-events-none md:flex hidden"  alt="bg-banner-02" />
                <Image src={BgPPID3} className="absolute bottom-0 opacity-5 pointer-events-none " alt="bg-banner-03" />
 
                <div className="container z-10 h-max grid grid-cols-1 lg:grid-cols-3 gap-4">
                    {ContentBanner.map((item, index) => (
                        <div 
                            key={index}
                            className="h-max min-h-[250px] border-b flex flex-col py-2  relative"
                        >
                            <Image 
                                src={item.icon} 
                                alt="Icons bann" 
                                className="h-24 w-24 mx-6 flex-shrink-0"
                            />
                            <h2 className="text-2xl mx-6 uppercase font-semibold text-white h-24 flex items-center  ">
                                {item.title}
                            </h2>
                            <div className="relative">
                                <Dropdown 
                                    title="Selengkapnya"
                                    type="ppid"
                                    menu={item.menu}
                                />

                            </div>
                        </div>
                    ))}
                    
                </div>
            </div>
            

            <div className="h-max w-full center-flex pt-20 pb-10">
                <div className="container h-max min-h-[800px] flex flex-col gap-14">
                    {/* Profile Ketua */}
                    <div className="w-full h-max grid lg:grid-cols-2 grid-cols-1 gap-5">
                        <div className="h-max lg:h-[500px] flex justify-center py-4">
                            <Image 
                                src={ImageKetuaPPID}
                                alt="Ketua PPID Image"
                                className="object-contain"
                            />
                        </div>
                        <div className="h-[500px] flex flex-col gap-10">
                            <SectionTitle 
                                title="Maklumat"
                                heading="Layanan Informasi Publik"
                                alignItems="items-start"
                            />
                            <div className="flex flex-col gap-2">
                                <h4 className="text-red-primary font-medium text-lg">
                                    Kami Berkomitmen
                                </h4>
                                <p>
                                    untuk memberikan pelayanan informasi publik yang prima sesuai undang-undang nomor 14 tahun 2008 tentang keterbukaan informasi publik dengan penuh profesionalisme dan tanggung jawab. Apabila tidak menepati janji, kami siap menerima sanksi yang sesuai dengan peraturan perundang-undangan.
                                </p>
                            </div>
                            <div className="flex flex-col gap-2">
                                <h3 className="font-semibold">Dr. Roni Indra, S.Sos., M.Pd.</h3>
                                <p>PPID BPMP Provinsi Kepulauan Riau</p>
                            </div>
                        </div>
                    </div>

                    {/* Tim Pengelola Informasi Publik */}
                    <div className="flex flex-col gap-12 my-16">
                        <div className="flex flex-col gap-2 items-center ">
                            <h4 className=" text-xl md:text-4xl font-semibold text-blue-secondary text-center">
                                Tim Pengelola Informasi Publik
                            </h4>
                            <p>
                                Kami melayani dengan Sepenuh Hati
                            </p>
                        </div>
                        <PegawaiSlider />
                    </div>

                </div>
            </div>

            {/* Section Komitmen */}
            <div className="xl:h-[600px] lg:h-[580px] h-[400px] md:h-[500px] w-full bg-cover bg-center relative center-flex"
                style={{
                    backgroundImage: `url(${BgKepriMaju.src})`, // Menambahkan gambar sebagai background
                }}
            >
                <div className="absolute top-0 left-0 w-full h-full bg-[#142c66f1] opacity-60"></div>
                <div className="container h-max flex flex-col gap-5 z-10">
                    <h4 className="text-white font-semibold uppercase">Komitmen</h4>
                    <div className="h-1 w-20 bg-blue-light"></div>
                    <h1 className="uppercase text-3xl md:text-5xl font-semibold text-white leading-snug">
                     Komitmen BPMP Provinsi Kepulauan Riau untuk Keterbukaan Informasi Publik
                    </h1>
                    <div className="flex items-center gap-5">
                        <div 
                            style={{
                                animation: "pulse 1.5s infinite ease-in-out",
                            }}
                            className="w-20 h-20 bg-[rgba(255,255,255,0.19)] z-20 rounded-full p-2 animate-pulse cursor-pointer group">
                            <div
                                className="h-full w-full bg-[#7CD4FD] z-20 rounded-full center-flex text-white group-hover:bg-white group-hover:text-[#7CD4FD]"
                            >
                                <FaPlay />
                            </div>
                        </div>
                        <a href="" className="text-white underline text-lg">
                            Tonton Video 
                        </a>
                    </div>
                </div>
            </div>

            {/* Section Jumlah Permintaan Infromasi */}
            <div className="h-max md:h-[300px] bg-white w-full center-flex">
                <div className="container flex items-center justify-between md:flex-row flex-col gap-5 py-10">
                    <div className="w-full flex  text-center items-center text-blue-secondary text-4xl md:text-6xl font-semibold">
                        <h1 className=" w-full">Jumlah Permintaan Informasi</h1>
                    </div>
                    <div className="w-full flex flex-col items-center gap-3 text-blue-secondary">
                        <h1 className="text-6xl  font-semibold">0</h1>
                        <p className="text-lg">Permintaan</p>
                    </div>
                </div>
            </div>
            
            <div className="w-full h-max center-flex bg-blue-light relative">
                <Image src={BgBerlangganan} className="absolute bottom-0 right-0 h-full w-full opacity-20 object-cover" alt="bg-berlangganan" />
                <div className="container h-full center-flex lg:justify-between lg:flex-row flex-col p-10 lg:gap-0 gap-10 text-white">
                    <div className="flex items-center lg:flex-row flex-col  gap-6 z-10 w-full">
                        <div className="h-28 w-28 rounded-full bg-[#DC3938] center-flex">
                            <FaFile className="text-white text-4xl" />
                        </div>  
                        <div className="flex flex-col lg:text-start text-center gap-1">
                            <h2 className="text-2xl font-semibold">Permohonan Informasi Publik</h2>
                            <p className="text-lg">Silahkan isi Formulir Permohonan</p>
                        </div>
                    </div>
                    <div className="flex items-center justify-center lg:justify-end gap-6 z-10 w-full">
                        <a 
                            target="blank"
                            href="https://docs.google.com/forms/d/e/1FAIpQLSeEmEB0PhnttN35ckZ7DFzY-C0dyNAZRtutLhE99nJcXR7BWQ/viewform"
                            className=" px-5 h-16 bg-blue-primary text-white hover:opacity-75 font-medium center-flex"
                        >
                            Formulir Permohonan
                        </a>
                    </div>
                </div>
            </div>

            
            {/* Footer */}
            <Footer />
        </div>
    )
}

export default Page