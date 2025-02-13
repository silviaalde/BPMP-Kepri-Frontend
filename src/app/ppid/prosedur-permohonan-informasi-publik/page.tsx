import LayoutPPID from "@/components/layout/ppidLayout"
import Link from "next/link"


const Page = () => {
    return (
        <LayoutPPID>
            <div className="h-max py-16 center-flex">
                <div className="container h-max flex flex-col items-center gap-12">
                    <h4 className="text-blue-light text-3xl font-semibold">Prosedur Permohonan Informasi Publik</h4>
                    <div className="flex flex-col gap-3 w-full">
                        <div className="flex gap-2">
                            <p>1.</p>
                            <p>Layanan informasi di BPMP Provinsi Kepulauan Riau dikelolah oleh Pejabat Pengelola Informasi dan Dokumentasi BPMP Provinsi Kepulauan Riau</p>
                        </div>
                        <div className="flex gap-2">
                            <p>2.</p>
                            <p>Unit layanan informasi publik diselenggarakan di Unit Layanan Terpadu (ULT) di Jl. Tata Bumi Km.20 Ceruk Ijuk, Toapaya, Bintan, Kepulauan Riau</p>
                        </div>
                        <div className="flex gap-2">
                            <p>3.</p>
                            <p>
                                Permohonan informasi ke PPID BPMP Provinsi Kepulauan Riau dapat disampaikan secara langsung datang ke ULT maupun tidak langsung melalui email, Sistem Pelayanan Masyrakat yang dapat di akses melalui tautan 
                                <a href="" className="px-2 text-blue-light font-medium">
                                    https://bpmpkepri.kemdikbud.go.id/sempena. 
                                </a>
                                Adapun dokumen persyaratan permohonan informasi dapat diunduh melalui tautan ini. 
                                <Link href={'/doc/Formulir-Permohonan-Informasi.pdf'}>
                                    <span className="px-2 text-blue-light font-medium">
                                        borang permohonan informasi;
                                    </span>
                                </Link>
                            </p>
                        </div>
                        <div className="flex gap-2">
                            <p>4.</p>
                            <p>
                            Pemohon informasi wajib mengikuti ketentuan yang berlaku, sebagai berikut: 
                            a). Apabila pemohon mengatasnamakan perorangan masyarakat umum, wajib menyertakan fotokopi/scan KTP atau identitas lainnya yang masih berlaku (Paspor, SIM, Kartu Pelajar, dan Kartu Mahasiswa); b). Apabila pemohon atas nama lembaga (organisasi masyarakat/lembaga swadaya masyarakat, organisasi politik, yayasan, dan perusahaan), wajib menyertakan fotokopi/scan akte pendirian organisasi/lembaga, surat kuasa dari organisasi/lembaga yang bermaterai, dan fotokopi/scan KTP atas nama pemohon/penerima kuasa.
                            </p>
                        </div>
                        <div className="flex gap-2">
                            <p>5.</p>
                            <p>Berdasarkan Undang-Undang Nomor 14 Tahun 2008 tentang Keterbukaan Informasi Publik, jangka waktu pemenuhan informasi berlangsung selama 10 hari kerja dan dapat di tambah 7 hari kerja.</p>
                        </div>
                        <div className="flex gap-2">
                            <p>6.</p>
                            <div className="flex flex-col gap-1">
                                <p>Jadwal Pelayanan Informasi:</p>
                                <p>Senin s.d. Jum’at</p>
                                <p>Pukul 08.00 s.d. 16.00 WIB</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </LayoutPPID>
    )
}

export default Page