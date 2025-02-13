import LayoutPPID from "@/components/layout/ppidLayout"

const Page = () => {
    return (
        <LayoutPPID>
            <div className="h-max py-16 center-flex">
                <div className="container h-max flex flex-col items-center gap-12">
                    <h4 className="text-blue-secondary uppercase text-3xl font-semibold">PROSEDUR PENYELESAIAN SENGKETA</h4>
                    <div className="flex flex-col gap-3 w-full">
                        <div className="flex gap-2">
                            <p>1.</p>
                            <p>Layanan informasi di BPMP Provinsi Kepulauan Riau dikelolah oleh Pejabat Pengelola Informasi dan Dokumentasi BPMP Provinsi Kepulauan Riau</p>
                        </div>
                        <div className="flex gap-2">
                            <p>2.</p>
                            <p>
                                Pemohon informasi yang telah menerima tanggapan tertulis dari PPID BPMP Provinsi Kepulauan Riau dan dinilai tidak memenuhi permintaan informasi dan atau alasan lainnya sesuai dengan Undang-undang Keterbukaan Informasi Publik Nomor 14 Tahun 2008 dapat mengajukan sengketa informasi ke Komisi Informasi Pusat dengan alamat Wisma BSG Gedung Annex Lantai 1, Jl Abdul Muis No. 40, Jakarta Pusat 10110 atau melalui laman berikut :
                                <a href="https://simsi.komisiinformasi.go.id/register" target="blank" className="text-blue-light font-medium underline mx-2">
                                    simsi.komisiinformasi.go.id/register
                                </a>
                            </p>
                        </div>
                        <div className="flex gap-2">
                            <p>3.</p>
                            <p>
                            Sesuai ketentuan Undang-undang tersebut, jangka waktu pengajuan sengketa informasi selambat-lambatnya 14 (empat belas) hari kerja sejak diterimanya tanggapan tertulis dari Atasan PPID BPMP Provinsi Kepulauan Riau, dalam hal ini Kepala BPMP Provinsi Kepulauan Riau;
                            </p>
                        </div>
                        <div className="flex gap-2">
                            <p>4.</p>
                            <p>
                            Dalam waktu 14 hari kerja sejak diterimanya permohonan penyelesaian sengketa dari pemohon informasi, Komisi Informasi mulai melakukan proses penyelesaian sengketa;
                            </p>
                        </div>
                        <div className="flex gap-2">
                            <p>5.</p>
                            <p>
                                Proses penyelesaian sengketa informasi dapat dilakukan melalui jalur mediasi dan atau sidang adjudikasi nonlitigasi paling lambat 100 hari kerja.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </LayoutPPID>
    )
}

export default Page