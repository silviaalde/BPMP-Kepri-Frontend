import Link from "next/link";
import WbsLayout from "@/components/layout/wbsLayout";


const WbsPage = () => {
    return (
        <WbsLayout>
            <div className="h-full container flex flex-col  gap-4 ">
                <p className="leading-relaxed"> 
                    Whistleblowing System Balai Penjaminan Mutu Pendidikan Provinsi Kepulauan Riau 
                    (WBS BPMP KEPRI) adalah salah satu kanal yang dikelola oleh tim Whistle Blowing System BPMP Provinsi Kepulauan Riau. 
                    Kanal ini berfungsi sebagai sarana pengaduan pelanggaran / kritik / saran untuk perbaikan bersama pada BPMP Provinsi Kepulauan Riau
                </p>
                <p className="leading-relaxed"> 
                    Pelanggaran yang dapat adalah perbuatan yang melanggar peraturan perundang undangan, kode etik, dan kebijakan , 
                    serta tindakan lain yang sejenis berupa ancaman langsung atas kepentingan publik, serta KKN.
                </p>
                <p className="leading-relaxed"> 
                    Kanal ini dapat digunakan oleh pegawai/pejabat BPMP Provinsi Kepulauan Riau dan/atau masyarakat. BPMP Provinsi Kepulauan Riau akan merahasiakan 
                    identitas pelapor dan memberi perlindungan kepada pelapor. Identitas dan data pengaduan akan dienkripsi oleh sistem sehingga tidak terbaca oleh
                        orang lain dan hanya dapat diakses oleh tim Whistle Blowing System BPMP Provinsi Kepulauan Riau.
                </p>
                <p className="leading-relaxed"> 
                    Anda dapat menggunakan identitas samaran untuk meningkatkan rasa aman saat menyampaikan laporan. 
                    Mohon sampaikan kontak yang dapat dihubungi jika sewaktu-waktu BPMP Provinsi Kepulauan Riau ingin 
                    melakukan konfirmasi terkait pengaduan.
                </p>
                <p className="leading-relaxed"> 
                    Penanganan pengaduan dilakukan sesuai dengan 
                    <a 
                        href="/wbs/public/Permendikbud_tahun2015_nomor126.pdf" 
                        target="blank"
                        className="text-blue-500 hover:text-blue-700 mx-2 underline"
                    >
                        Peraturan Menteri Pendidikan Nomor 126 Tahun 2014
                    </a>  
                    tentang Penanganan Pengaduan di Lingkungan 
                    Kementrian Pendidikan dan Kebudayaan
                </p>
                <Link href="/wbs/pengaduan" className="mt-9">
                    <button className="h-12 px-4 w-56 bg-yellow-400 rouneded text-white rounded hover:opacity-60 ">
                        Sampaikan Pengaduan
                    </button>
                </Link>
            </div>
        </WbsLayout>
    )
}

export default WbsPage