import { ImageKepalaBPMPKep, ImageKetuaPPID } from "@/assets/images"
import SectionTitle from "@/components/element/user/SectionTitle"
import LayoutPPID from "@/components/layout/ppidLayout"
import Image from "next/image"

const Page = () => {

    const DataProfileSingkat = [
        { 
            nama : "Warsita, S.S., M.Pd.",
            image : ImageKepalaBPMPKep,
            jabatan : "Kepala BPMP Provinsi Kepulauan Riau",
            title : "KEPALA BPMP PROVINSI KEPRI",
            content : [
                { title : "Warsita, S.S., M.Pd., lahir di Klaten, 4 Desember 1975, merupakan seorang pemimpin yang berpengalaman dan berdedikasi tinggi di bidang pendidikan. Mengawali kariernya sebagai Pegawai Negeri Sipil pada tahun 2002, Warsita telah menunjukkan komitmen yang kuat terhadap peningkatan mutu pendidikan di Indonesia. Selama bertahun-tahun, beliau terus mengasah kemampuannya dan mendalami dunia manajemen pendidikan, hingga akhirnya dipercaya memegang berbagai jabatan strategis." },
                { title : "Perjalanan karier Warsita mencapai titik penting ketika beliau diangkat menjadi Kepala Subbagian Umum di Lembaga Penjaminan Mutu Pendidikan (LPMP) Provinsi Lampung, sebuah jabatan yang beliau emban dari tahun 2016 hingga 2022. Dalam peran ini, Warsita tidak hanya berhasil meningkatkan efisiensi dan efektivitas pengelolaan lembaga, tetapi juga turut berperan aktif dalam mendorong implementasi kebijakan pendidikan di daerah. Keberhasilannya dalam memimpin LPMP Lampung menjadi salah satu bukti nyata dari kepemimpinan beliau yang visioner dan inovatif" },
                { title : "Selain pengalaman praktis, Warsita juga memiliki latar belakang pendidikan yang solid. Beliau menyelesaikan pendidikan Magister Pendidikan di Universitas Negeri Yogyakarta, sebuah institusi yang dikenal sebagai pusat keunggulan dalam bidang pendidikan di Indonesia. Keilmuan dan wawasan yang beliau peroleh dari pendidikan formal ini menjadi landasan kuat bagi setiap kebijakan dan inovasi yang beliau terapkan di lapangan. " },
                { title : "Pada tahun 2022, Warsita diamanahkan sebagai Kepala Balai Penjaminan Mutu Pendidikan (BPMP) Provinsi Kepulauan Riau. Dalam jabatan ini, beliau terus menginisiasi berbagai program strategis untuk mendukung kebijakan Merdeka Belajar yang dicanangkan oleh pemerintah pusat, serta memastikan bahwa mutu pendidikan di wilayah Kepulauan Riau terus mengalami peningkatan. Warsita juga aktif dalam memperkuat kolaborasi dengan berbagai pemangku kepentingan, mulai dari pemerintah daerah, sekolah, hingga komunitas pendidikan, guna menciptakan sinergi yang efektif dalam mewujudkan pendidikan berkualitas di provinsi yang memiliki tantangan geografis yang unik ini. " },
                { title : "Dengan pengalaman lebih dari dua dekade, kepemimpinan yang kokoh, serta visi yang tajam, Warsita, S.S., M.Pd., terus memberikan kontribusi nyata bagi kemajuan dunia pendidikan, khususnya di Kepulauan Riau." },
            ]
        },
        { 
            nama : "Dr. Roni Indra, S.Sos., M.Pd.",
            image : ImageKetuaPPID,
            jabatan : "KASUBBAG UMUM BPMP PROVINSI KEPRI",
            title : "KASUBBAG UMUM BPMP PROVINSI KEPRI",
            content : [
                { title : "Lahir di Payakumbuh pada 7 November 1979, sosok ini memulai karir sebagai Pegawai Negeri Sipil (PNS) pada tahun 2005 di Lembaga Penjaminan Mutu Pendidikan (LPMP) Sumatera Utara. Dalam perjalanan karirnya, beliau menunjukkan dedikasi dan profesionalisme tinggi, yang membawanya untuk terus berkembang di dunia pendidikan. Setelah hampir satu dekade berkiprah di LPMP Sumatera Utara, pada tahun 2014, beliau melanjutkan pengabdiannya di LPMP Provinsi Kepulauan Riau. " },
                { title : "Komitmen kuat dalam dunia pendidikan mendorongnya untuk terus mengembangkan diri, hingga akhirnya beliau menyelesaikan pendidikan sebagai Doktor di bidang Administrasi Pendidikan dari Universitas Pendidikan Indonesia (UPI) di Bandung. Gelar Doktor yang diraihnya memperkuat keahlian dan pemahaman beliau dalam mengelola organisasi pendidikan, khususnya dalam peran manajerial. " },
                { title : "Setahun setelah menyelesaikan studinya, beliau diamanahkan posisi penting sebagai Kepala Subbagian Umum di Balai Penjaminan Mutu Pendidikan (BPMP) Provinsi Kepulauan Riau. Dalam peran tersebut, beliau bertanggung jawab atas pengelolaan administratif dan operasional lembaga yang memiliki peran vital dalam peningkatan mutu pendidikan di Kepulauan Riau. Dengan latar belakang akademis yang kuat dan pengalaman yang luas di bidang manajemen pendidikan, beliau terus berkontribusi dalam membangun sistem pendidikan yang lebih baik, memastikan bahwa kebijakan-kebijakan pendidikan berjalan dengan optimal di wilayah Kepulauan Riau.  " },
                { title : "Kepemimpinan beliau yang berintegritas dan inovatif menjadi kunci dalam menggerakkan berbagai program strategis yang bertujuan meningkatkan kualitas pendidikan di Kepulauan Riau. Dalam peran ini, beliau terus berupaya menjalin sinergi antara lembaga pendidikan, pemerintah daerah, dan masyarakat, demi terciptanya pendidikan yang berkualitas dan inklusif di seluruh Daerah di Kepulauan Riau. " },
            ]
        },
    ]


    return (
        <LayoutPPID>
            <div className="h-max py-16 center-flex">
                <div className="container h-max flex flex-col gap-16 ">
                    {DataProfileSingkat.map((item, index) => (
                        <div key={index} className="flex flex-col w-full gap-20 py-10">
                            <SectionTitle 
                                title="PROFIL SINGKAT"
                                heading={item.title}
                            />
                            <div className="flex lg:flex-row flex-col gap-7 w-full">
                                <div className="flex flex-col gap-5 h-max w-full lg:w-[200px]  xl:w-[300px] ">
                                    <Image src={item.image} alt="Image Kepala" />
                                    <div className="h-[1px] w-full bg-gray-300"></div>
                                    <div className="flex flex-col gap-1">
                                        <p className="font-semibold">{item.nama}</p>
                                        <p className="text-sm">{item.jabatan}</p>
                                    </div>
                                </div>
                                <div className="flex flex-1 flex-col gap-5 h-max w-full lg:w-max">
                                    {item.content.map((item, index) => (
                                        <p key={index} className="text-md text-justify ">
                                            {item.title}
                                        </p>
                                    ))}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </LayoutPPID>
    )
}

export default Page