import { ImageStructurePPID } from "@/assets/images"
import LayoutPPID from "@/components/layout/ppidLayout"
import Image from "next/image"
import Link from "next/link"

const Page = () => {
    return (
        <LayoutPPID>
            <div className="h-max py-16 center-flex">
                <div className="container h-max flex flex-col gap-10">
                    <div className="flex flex-col items-center gap-2 text-xl text-center md:text-4xl text-blue-secondary font-semibold">
                        <h1>STRUKTUR PPID</h1>
                        <h1>BPMP PROVINSI KEPULAUAN RIAU</h1>
                    </div>
                    <div className="h-max w-full center-flex">
                        <Image 
                            src={ImageStructurePPID} 
                            alt="Structure PPID"
                            className="object-contain"
                        />
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
                            href="/ppid/tugas-ppid"
                        >   
                            <button className='h-14 w-40 bg-blue-light text-white font-medium hover:opacity-50'>
                                Tugas PPID
                            </button>
                        </Link>
                    </div>
                </div>
            </div>
        </LayoutPPID>
    )
}

export default Page