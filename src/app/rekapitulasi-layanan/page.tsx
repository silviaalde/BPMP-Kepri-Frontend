import MainLayout from "@/components/layout/mainLayout"
import PieChart from '../../components/element/pieChart';

const Page = () => {

    const DataTidakLanjutLayanan = [
        { title : "Pengajuan Layanan", count : "0.0" },
        { title : "Layanan Dalam Proses", count : "0.0" },
        { title : "Layanan Di Tutup", count : "170" },
        { title : "Total Layanan", count : "170" },
    ]

    return (
        <MainLayout>
            <div className="w-full h-max center-flex py-20">
                <div className="container h-full flex flex-col items-center gap-10">
                    <h4 className="uppercase text-xl md:text-2xl font-semibold text-blue-secondary text-center">
                        Rekapitulasi permohonan layanan bpmp provinsi kepulauan riau tahun 2024
                    </h4>
                    <div className="w-full h-max grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div className="w-full flex items-center justify-center px-7">
                            <p>
                            Grafik Permohonan Layanan BPMP Provinsi Kepulauan Riau tahun 2024 Periode Januari s.d. Oktober 2024
                            </p>
                        </div>
                        <div className="h-max lg:h-[400px] flex items-center lg:flex-row flex-col gap-6 w-full px-7 ">
                            <PieChart 
                                labels={[
                                    "Layanan Data dan Informasi Mutu Pendidikan",
                                    "Layanan Jerha SMA Peningkatan Mutu Pendidikan",
                                    "Layanan Konsultasi Program",
                                    "Layanan Peminjaman Gedung",
                                    "Layanan Pengaduan",
                                    "Permohonan Narasumber",
                                ]}
                                data={[60, 9.4, 7.6, 14.1, 5, 3.9]}
                                backgroundColor={[
                                    "#3366CC",
                                    "#DC3912",
                                    "#FF9900",
                                    "#109618",
                                    "#990099",
                                    "#87CEEB",
                                ]}
                            />
                            <div className="flex flex-col gap-3">
                                {[
                                    "Layanan Data dan Informasi Mutu Pendidikan",
                                    "Layanan Jerha SMA Peningkatan Mutu Pendidikan",
                                    "Layanan Konsultasi Program",
                                    "Layanan Peminjaman Gedung",
                                    "Layanan Pengaduan",
                                    "Permohonan Narasumber",
                                ].map((label, index) => (
                                    <div key={index} className="flex items-center gap-3">
                                        <div
                                            className="w-4 h-4 rounded-full"
                                            style={{
                                                backgroundColor: [
                                                    "#3366CC",
                                                    "#DC3912",
                                                    "#FF9900",
                                                    "#109618",
                                                    "#990099",
                                                    "#87CEEB",
                                                ][index],
                                            }}
                                        />
                                        <p className="text-[10px]">{label}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                    <h4 className="uppercase text-xl md:text-2xl font-semibold text-blue-secondary text-center">
                        Rekapitulasi permohonan layanan bpmp provinsi kepulauan riau tahun 2024
                    </h4>
                    <div className="md:grid-cols-4 grid-cols-1 grid gap-5 w-full h-max">
                        {DataTidakLanjutLayanan.map((item, index) => (
                            <div key={index} className="flex flex-col items-center gap-10 py-7 ">
                                <h5 className="text-blue-secondary font-medium text-md uppercase text-center">
                                    {item.title}
                                </h5>
                                <h1 className="text-5xl font-bold text-gray-400">
                                    {item.count}
                                </h1>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </MainLayout>
    )
}

export default Page