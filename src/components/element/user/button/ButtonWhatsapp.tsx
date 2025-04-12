"use client";

import Link from 'next/link';
import Image from 'next/image';
import { ImageLogoSempenaWhite } from '@/assets/images';

const ZoomButton = ()=>{
    return (
        <div className='w-[100vw] flex overflow-auto'>
            <a href={"#kemdikbud"} className='fixed left-4 md:left-8 md:mx-10 rounded-sm bottom-16 md:bottom-1 my-4 z-20 bg-[#7CD4FD] py-2 px-4 text-white'>
                    {/* <Image alt="kemdikbud" width={5} height={5} src={"https://id.wikipedia.org/wiki/Kementerian_Pendidikan_Dasar_dan_Menengah_Republik_Indonesia"}> */}
                        
                    {/* </Image> */}
                    Program Kemendikdasmen
            </a>
      

            <div className="flex flex-col gap-2 fixed bottom-4 right-5 z-20">
                {/* <Link href={"https://docs.google.com/forms/d/e/1FAIpQLSdz-1PUUZIE_MvqtEr5C0ijWT0b_mr1fzk3GWCofarx1xjDlQ/viewform"} className='flex gap-4 bg-blue-500 py-2 px-4 text-white'>
                    <Image src={ImageZoom} width={80} height={20} alt='wha'>
                    </Image>
                    Ult Virtual
                </Link> */}
                <Link href={"https://bpmpkepri.kemdikbud.go.id/sempena/media.php?p=home"} className='mr-[4.5rem] md:mr-16 lg:mr-20  flex rounded-full md:rounded-none gap-4  bg-[#7CD4FD] py-2 px-2 md:px-4 text-white'>
                    <Image src={ImageLogoSempenaWhite} width={20} height={20} alt='wha' className="w-20 md:w-6">
                    </Image>
                    <span className='hidden md:inline-block relative'>
                    Sempena
                    </span>
                </Link>
            </div>

        </div>
    );
};

export default ZoomButton;