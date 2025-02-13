import { ImageKetuaPPID } from '@/assets/images'
import LayoutPPID from '@/components/layout/ppidLayout'
import Image from 'next/image'

const Page = () => {
    return (
        <LayoutPPID>
            <div className='h-max py-20 center-flex'>
                <div className='container h-max flex lg:flex-row flex-col gap-7'>
                    <div className='flex flex-col items-center gap-5 h-max w-full lg:w-[200px]  xl:w-[300px]'>
                        <Image src={ImageKetuaPPID} alt='Ketua Ppid' />
                        <p className="font-semibold">Dr. Roni Indra, S.Sos., M.Pd.</p>
                        <div className="h-[1px] w-full bg-gray-300"></div>
                    </div>
                    <div className='flex flex-1 flex-col gap-5 h-max w-full lg:w-max'>
                        <div className='flex flex-col gap-1 text-2xl text-blue-secondary uppercase font-semibold '>
                            <h1>Profil PPID</h1>
                            <h1>BPMP Provinsi Kepulauan Riau</h1>
                        </div>
                        <p className='text-justify'>
                            Informasi merupakan kebutuhan mendasar setiap individu untuk mengembangkan diri serta berinteraksi dalam lingkungan sosialnya. Selain itu, informasi juga memainkan peran penting dalam ketahanan nasional. Hak atas informasi merupakan hak asasi manusia, dan keterbukaan informasi publik menjadi salah satu ciri penting dari negara demokratis yang menjunjung tinggi kedaulatan rakyat. Melalui keterbukaan ini, diharapkan terwujud tata kelola pemerintahan yang baik dan akuntabel.
                        </p>
                        <p className='text-justify'>
                            Setiap informasi publik di BPMP Provinsi Kepulauan Riau terbuka dan dapat diakses oleh masyarakat, kecuali informasi yang dikecualikan secara ketat dan terbatas sesuai dengan ketentuan peraturan perundang-undangan. Keterbukaan informasi publik bertujuan untuk mengoptimalkan pengawasan masyarakat terhadap pelaksanaan tugas dan fungsi negara, termasuk lembaga-lembaga publik yang memiliki dampak langsung terhadap kepentingan umum.
                        </p>
                        <p className='text-justify'>
                            Dengan diberlakukannya Undang-Undang Nomor 14 Tahun 2008 tentang Keterbukaan Informasi Publik (KIP), publik kini memiliki landasan hukum yang jelas untuk memperoleh akses informasi dari badan publik. Undang-Undang ini juga mengamanatkan setiap badan publik, termasuk BPMP Provinsi Kepulauan Riau, untuk menyediakan layanan informasi yang cepat, tepat waktu, dan mudah diakses.
                        </p>
                        <p className='text-justify'>
                            Selaras dengan kebijakan Merdeka Belajar yang diusung oleh Mendikbudristek Nadiem Anwar Makarim, layanan informasi publik di BPMP Provinsi Kepulauan Riau didorong untuk mendukung kebebasan masyarakat dalam mengakses informasi terkait kebijakan pendidikan di daerah. Keterbukaan informasi ini dijalankan sesuai dengan Permendikbud Nomor 41 Tahun 2020 tentang Layanan Informasi Publik, yang mengatur tata kelola informasi publik di setiap satuan kerja, termasuk Unit Pelaksana Teknis di tingkat pusat dan daerah.
                        </p>
                        <p className='text-justify'>
                         Sebagai Unit Pelaksana Teknis (UPT) Kemendikbudristek, BPMP Provinsi Kepulauan Riau melalui PPID-nya bertanggung jawab dalam melaksanakan layanan informasi publik dengan prinsip-prinsip keterbukaan. Diharapkan, implementasi Undang-Undang Keterbukaan Informasi Publik di BPMP Provinsi Kepulauan Riau dapat berjalan efektif dan efisien, sehingga hak masyarakat untuk mendapatkan informasi yang berkualitas dapat terpenuhi dengan baik.
                        </p>
                    </div>
                </div>

            </div>
        </LayoutPPID>
    )
}

export default Page