import { ImageLogoAkreditasi, ImageLogoBMB, ImageLogoBPMP, ImageLogoESKP, ImageLogoPerpustkaan, ImageLogoSelayar, ImageLogoSempena, ImageLogoSerasan, ImageLogoSinde, ImageLogoSIPPN, ImageLogoSP4N, ImageLogoWBS } from "@/assets/images"
import Footer from "@/components/element/user/Footer"
import Image from "next/image"
import Link from "next/link"

const Page = () => {

    const DataLayananEksternal = [
        { 
            name : "Sampena", 
            image : ImageLogoSempena, 
            Link : "/",
            ref : "internal" 
        },
        { 
            name : "SP4N Lapor", 
            image : ImageLogoSP4N, 
            Link : "https://kemedikbud.lapor.go.id/",
            ref : "external"
        },
        { 
            name : "SIPPN", 
            image : ImageLogoSIPPN, 
            Link : "https://sippn.menpan.go.id/instansi/173859/ditjen-pendidikan-anak-usia-dini-pendidikan-dasar-dan-%20pendidikan-menengah/balai-penjaminan-mutu-pendidikan-provinsi-kepulauan-riau",
            ref : "external"
        },
        { 
            name : "Perpustakaan", 
            image : ImageLogoPerpustkaan, 
            Link : "https://perpus-bpmpkepri.kemdikbud.go.id/",
            ref : "external"
        },
        { 
            name : "WBS", 
            image : ImageLogoWBS, 
            Link : "/wbs",
            ref : "internal"
        },
        { 
            name : "Akreditasi", 
            image : ImageLogoAkreditasi, 
            Link : "https://archive.ban-pdm.id/data/akreditasi?pv=310000&nmpv=Prov.%20Kepulauan%20Riau",
            ref : "external"
        },
    ]

    const DataLayananInternal = [
        {
            name : "Selayar", 
            image : ImageLogoSelayar, 
            Link : 'portal_layanan',
        },
        {
            name : "Serasan", 
            image : ImageLogoSerasan, 
            Link : 'portal_layanan',
        },
        {
            name : "E-SKP", 
            image : ImageLogoESKP, 
            Link : 'portal_layanan',
        },
        {
            name : "Sinde", 
            image : ImageLogoSinde, 
            Link : 'portal_layanan',
        }
    ]

    return (
        <div className="w-full min-h-screen h-max flex flex-col">
            <div className="flex flex-1 py-10 center-flex h-max w-full mb-20">
                <div className="container w-full h-max min-h-[600px] flex flex-col items-center gap-16 ">
                    <div className="h-max md:h-24 w-full border-b flex items-center md:flex-row flex-col gap-5 justify-center md:justify-between py-5">
                        <div className="w-full flex items-center justify-start">
                            <Image src={ImageLogoBPMP} alt="Logo BPMP" className="h-14 w-44" />
                        </div>
                        <div className="center-flex w-full">
                            <Link href="/">
                                <button 
                                    className="h-14 w-60 bg-blue-light rounded text-white"
                                >
                                    Masuk Ke Laman Utama
                                </button>
                            </Link>
                        </div>
                        <div className="w-full flex items-center justify-end">
                            <Image src={ImageLogoBMB} alt="Logo BPMP" className="h-16 w-44" />
                        </div>
                    </div>

                    <h4 className="uppercase text-xl md:text-2xl font-semibold text-blue-secondary text-center">
                        Selamat datang di portal layanan bpmp provinsi kepulauan riau
                    </h4>

                    <div className="w-full flex items-center gap-4">
                        <input 
                            type="text" 
                            className="flex flex-1 h-12 md:h-16 border indent-3 focus:outline-none"
                            placeholder="Masukan Kata Pencarian"
                        />
                        <button
                            className="h-12 md:h-16 w-20 bg-blue-secondary text-white hover:opacity-80 hover:shadow-xl"
                        >
                            Cari
                        </button>
                    </div>

                    {/* Layanan Eksternal */}
                    <div className="flex flex-col items-center gap-8 w-full">
                        <h4 className="uppercase text-2xl font-semibold text-blue-secondary">
                            Layanan Eksternal
                        </h4>
                        <div className="grid sm:grid-cols-1 md:grid-cols-3 xl:grid-cols-6 h-max w-full gap-4 border-b px-5 py-2 ">
                            {DataLayananEksternal.map((item, index) => (
                                <div key={index} className="p-4 w-full md:w-[200px]  flex flex-col items-center text-center justify-between cursor-pointer">
                                    {item.ref === 'internal' ? (
                                        <Link href={item.Link} className="h-[200px] flex flex-col items-center text-center justify-between">
                                            <Image src={item.image} alt={item.name} className="h-36 w-36" />
                                            <p className="py-1 border-t border-blue-secondary text-blue-secondary font-medium">
                                                {item.name}
                                            </p>
                                        </Link>
                                    ) : (
                                        <a href={item.Link} target="_blank" rel="noopener noreferrer" className="h-[200px] flex flex-col items-center text-center justify-between">
                                            <Image src={item.image} alt={item.name} className="h-36 w-36" />
                                            <p className="py-1 border-t border-blue-secondary text-blue-secondary font-medium">
                                                {item.name}
                                            </p>
                                        </a>
                                    )}
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Layanan Internal */}
                    <div className="flex flex-col items-center gap-8 w-full">
                        <h4 className="uppercase text-2xl font-semibold text-blue-secondary">
                            Layanan Eksternal
                        </h4>
                        <div className="w-[70%] h-max p-4 grid grid-cols-1 md:grid-cols-4 gap-1">
                            {DataLayananInternal.map((item, index) => (
                                <Link
                                    href={item.Link}
                                    key={index} 
                                    className="h-[200px] flex flex-col items-center text-center justify-between"
                                >
                                    <Image src={item.image} alt={item.name} className="h-36 w-36" />
                                    <p className="py-1 border-t border-blue-secondary text-blue-secondary font-medium">
                                        {item.name}
                                    </p>
                                </Link>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Page