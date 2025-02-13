import LayoutPPID from "@/components/layout/ppidLayout"
import Link from "next/link"


const Page = () => {
    return (
        <LayoutPPID>
            <div className="h-max py-16 center-flex">
                <div className="container h-max flex flex-col items-center gap-12">
                    <h4 className="text-blue-secondary uppercase text-3xl font-semibold">Prosedur Pengajuan Keberatan Atas Permohonan Informasi Publik</h4>
                    <div className="flex flex-col gap-3 w-full">
                        <div className="flex gap-2">
                            <p>1.</p>
                            <p>Layanan informasi di BPMP Provinsi Kepulauan Riau dikelolah oleh Pejabat Pengelola Informasi dan Dokumentasi BPMP Provinsi Kepulauan Riau</p>
                        </div>
                        <div className="flex gap-2">
                            <p>2.</p>
                            <p>
                            Pemohon informasi yang telah menerima tanggapan tertulis dari PPID BPMP Provinsi Kepulauan Riau dan dinilai tidak memenuhi permintaan informasi dan atau alasan lainnya sesuai dengan Undang-undang Keterbukaan Informasi Publik Nomor 14 Tahun 2008 dapat mengajukan keberatan informasi kepada Atasan PPID BPMP Provinsi Kepulauan Riau. Alasan tersebut meliputi: a) informasi yang diminta termasuk dalam informasi yang dikecualikan; b) tidak disediakannya informasi publik secara berkala; c) tidak ditanggapinya permohonan informasi publik; d) permohonan informasi publik tidak sebagaimana yang diminta; e) tidak dipenuhinya permohonan informasi publik; f) pengenaan biaya yang tidak wajar; dan g) penyampaian informasi publik melebihi jangka waktu yang diatur dalam Undang-Undang tersebut.
                            </p>
                        </div>
                        <div className="flex gap-2">
                            <p>3.</p>
                            <p>
                            Sesuai ketentuan Undang-undang tersebut, jangka waktu pengajuan keberatan informasi selambat-lambatnya 30 (tiga puluh) hari kerja sejak diterimanya tanggapan tertulis dari PPID BPMP Provinsi Kepulauan Riau. Formulir pengajuan keberatan dapat diunduh di sini:
                                <Link href={'/doc/Formulir-Keberatan.pdf'}>
                                    <span className="px-2 text-blue-light font-medium underline">
                                        Formulir Keberatan
                                    </span>
                                </Link>
                            </p>
                        </div>
                        <div className="flex gap-2">
                            <p>4.</p>
                            <p>
                            Dalam waktu maksimal 30 hari kerja sejak diterimanya pengajuan keberatan informasi dari pemohon informasi yang telah teregister, Atasan PPID BPMP Provinsi Kepulauan Riau  akan memberikan tanggapan tertulis atas pengajuan keberatan informasi tersebut;
                            </p>
                        </div>
                        <div className="flex gap-2">
                            <p>5.</p>
                            <p>
                            Atasan PPID BPMP Provinsi Kepulauan Riau dalam hal ini Kepala BPMP Provinsi Kepulauan Riau.
                            </p>
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