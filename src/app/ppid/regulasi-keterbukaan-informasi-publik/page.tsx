import Footer from "@/components/element/user/Footer"
import Link from "next/link"

const Page = () => {

    const DataRegulasi = [
        { title : "Undang-Undang Nomor 14 Tahun 2008 tentang Keterbukaan Informasi Publik.", url : "/regulasi/UU_No_14_Tahun_2008_d5e667b6cb.pdf"},
        { title : "Peraturan Pemerintah Nomor 61 Tahun 2010 tentang Pelaksanaan Undang-Undang Keterbukaan Informasi Publik.", url : "/regulasi/PP_No_61_Tahun_2010.pdf"},
        { title : "Peraturan Mahkamah Agung Nomor 2 Tahun 2011 tentang Tata Cara Penyelesaian Sengketa Informasi Publik di Pengadilan.", url : "/regulasi/perma_no_2_tahun_2011_tentang_tata_cara_penyelesaian_sengketa_informasi_publik_di_pengadilan_60096e16ed.pdf"},
        { title : "Peraturan Komisi Informasi Nomor 1 Tahun 2013 tentang Prosedur Penyelesaian Sengketa Informasi Publik.", url : "/regulasi/peraturan_komisi_informasi_nomor_1_tahun_2013_tentang_prosedur_penyelesaian_sengketa_informasi_publik_1581318858_b338a6790f.pdf"},
        { title : "Peraturan Komisi Informasi Pusat Nomor 1 Tahun 2021 tentang Standar Layanan Informasi Publik.", url : "/regulasi/Peraturan_Komisi_Informasi_Nomor_1_Tahun_2021_95e106c329.pdf"},
    ]

    return (
        <div className="flex flex-col w-full min-h-screen relative">
            <div className="w-full flex h-[800px] center-flex py-16">
                <div className="h-full container flex flex-col gap-8">
                    <h3 className="text-blue-secondary text-4xl uppercase font-semibold">Regulasi Keterbukaan Informasi Publik</h3>
                    <p>Berikut adalah regulasi yang berkaitan dengan keterbukaan informasi publik:</p>
                    <div className="flex flex-col gap-1 px-5">
                        {DataRegulasi.map((item, index) => (
                            <div key={index} className="flex gap-1 text-sm">
                                <p>{index + 1}.</p>
                                <p>
                                    {item.title}
                                    <Link href={item.url}>
                                        <span className="mx-2 text-blue-light">
                                        (klik di sini untuk mengunduh)
                                        </span>
                                    </Link>
                                </p>
                            </div>
                        ))}
                       
                    </div>
                    <p>
                        Regulasi yang berkaitan dengan keterbukaan informasi publik di Kementerian Pendidikan, Kebudayaan, Riset, dan 
                        Teknologi diatur dalam 
                        <span className="mx-2 font-semibold">
                            Peraturan Menteri Pendidikan dan Kebudayaan Nomor 41 Tahun 2020 
                        </span>
                        tentang Layanan Informasi Publik di Kementerian Pendidikan dan Kebudayaan.
                        <Link href="/regulasi/SALINAN_Permendikbud_NO_41_TAHUN_2020_TTG_LAYANAN_INFORMASI_PUBLIK_b5fbf795d8.pdf">
                            <span className="mx-2 text-blue-light">
                            (klik di sini untuk mengunduh)
                            </span>
                        </Link>
                        <span className="mr-2 font-semibold"></span>
                    </p>
                    <Link href="/ppid">
                        <button
                            className="px-5 h-14 text-white bg-blue-secondary hover:opacity-60"
                        >   
                            Kembali ke laman PPID
                        </button>
                    </Link>
                </div>
            </div>

            <Footer />
        </div>
    )
}

export default Page