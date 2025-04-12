import AnggaranBars from "@/components/element/user/AnggaranBars"
import MainLayout from "@/components/layout/mainLayout"
import Link from "next/link"

const Page = () => {
    return (
        <MainLayout>
            <div className="h-max w-full center-flex ">
                <div className="container h-full py-20 flex items-center flex-col gap-16">
                    <div className="flex flex-col items-center gap-3">
                        <h1 className="text-7xl font-semibold text-blue-secondary tracking-wider">SAKIP</h1>
                        <p className="text-md">
                            Sistem Akuntabilitas Kinerja Instansi Pemerintah
                        </p>
                    </div>
                    {/* Replace <p> inside <p> */}
                    <div>
                        <p>
                            SAKIP adalah sebuah sistem yang dirancang untuk mengukur dan mengevaluasi kinerja Balai Penjaminan Mutu Pendidikan (BPMP) 
                            Provinsi Kepulauan Riau secara transparan dan akuntabel. Sistem ini mengintegrasikan perencanaan, pengukuran, pelaporan, dan 
                            evaluasi kinerja untuk memastikan bahwa setiap program dan kegiatan yang dilaksanakan selaras dengan tujuan strategis dan 
                            memberikan nilai tambah bagi peningkatan mutu pendidikan di Provinsi Kepulauan Riau. Dengan SAKIP, BPMP dapat mengoptimalkan penggunaan sumber daya, 
                            meningkatkan efisiensi, dan akuntabilitas dalam pencapaian hasil yang terukur serta memberikan pelayanan yang lebih baik kepada masyarakat.
                        </p>
                    </div>

                    <div className="w-full ">
                        <AnggaranBars />
                    </div>

                    <div className="flex items-center gap-5">
                        {/* <Link href="/sakip/realisasi-anggaran-program-kualitas">
                            <button className="px-5 h-14 bg-blue-secondary text-white hover:opacity-45 font-medium">
                                Lihat Realisasi Anggaran Program Kualitas
                            </button>
                        </Link> */}
                        <Link href="/sakip/doc">
                            <button className="px-5 h-14 bg-blue-secondary text-white hover:opacity-45 font-medium">
                                Unduh Document Sakip
                            </button>
                        </Link>
                    </div>
                </div>
            </div>
        </MainLayout>
    )
}

export default Page