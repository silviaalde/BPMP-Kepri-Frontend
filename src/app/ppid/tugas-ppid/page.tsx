import LayoutPPID from '@/components/layout/ppidLayout'
import Link from 'next/link';
import React from 'react'
import { FaCheck } from 'react-icons/fa';

const Page = () => {

    const DataTugas = [
        { title: "Penyediaan, penyimpanan, pendokumentasian, dan pengamanan Informasi;" },
        { title: "Pelayanan Informasi sesuai dengan aturan yang berlaku;" },
        { title: "Pelayanan Informasi Publik yang cepat, tepat, dan sederhana;" },
        { title: "Pengujian Konsekuensi;" },
        { title: "Pengklasifikasian Informasi dan/atau pengubahannya;" },
        { title: "Penetapan Informasi Publik yang Dikecualikan yang telah habis jangka waktu pengecualiannya sebagai Informasi Publik yang dapat diakses;" },
        { title: "Penetapan pertimbangan tertulis atas setiap kebijakan yang diambil untuk memenuhi hak setiap orang atas Informasi Publik;" },
        { title: "Menyelesaikan sengketa Informasi Publik unit organisasi atau unit kerja yang bersangkutan;" },
        { title: "Melakukan evaluasi terhadap PPID di unit organisasi atau unit kerja yang bersangkutan;" }
    ];
    

    return (
        <LayoutPPID>
            <div className='h-max py-20 center-flex'>
                <div className="container h-max flex flex-col gap-10">
                    <h1 className='text-3xl text-center font-semibold text-blue-secondary'>
                        TUGAS PPID BPMP PROVINSI KEPULAUAN RIAU
                    </h1>
                    <p>
                        Berdasarkan Permendikbud Nomor 41 tahun 2020 tentang Layanan Informasi Publik di Kementerian Pendidikan dan Kebudayaan pasal 13, Tugas PPID Unit Pelaksana Teknis (UPT) adalah:
                    </p>
                    <div className='flex flex-col gap-2'>
                        {DataTugas.map((item, index) => (
                            <div key={index} className='flex items-center gap-2 md:text-md text-sm'>
                                <FaCheck className='flex-shrink-0' />
                                <p>{item.title}</p>
                            </div>
                        ))}
                    </div>
                    <div className='w-full h-max center-flex gap-5 my-10'>
                        <Link 
                            href="/ppid/profile-ppid"
                        >   
                            <button className='h-14 w-40 bg-blue-light text-white font-medium hover:opacity-50'>
                                Profil PPID
                            </button>
                        </Link>
                        <Link 
                            href="/ppid/struktur-ppid"
                        >   
                            <button className='h-14 w-40 bg-blue-light text-white font-medium hover:opacity-50'>
                                Struktur PPID
                            </button>
                        </Link>
                    </div>
                </div>
            </div>
        </LayoutPPID>
    )
}

export default Page