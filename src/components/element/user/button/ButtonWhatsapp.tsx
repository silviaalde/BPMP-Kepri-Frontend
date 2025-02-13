"use client";

import Link from 'next/link';
import Image from 'next/image';
import { ImageWhatsapp, ImageZoom } from '@/assets/images';

const ZoomButton = ()=>{
    return (
        <div>
            <a href={"#kemdikbud"} className='fixed left-8 mx-10 rounded-sm bottom-1 my-5 z-20 bg-blue-500 py-2 px-4 text-white'>
                    {/* <Image alt="kemdikbud" width={5} height={5} src={"https://id.wikipedia.org/wiki/Kementerian_Pendidikan_Dasar_dan_Menengah_Republik_Indonesia"}> */}
                        
                    {/* </Image> */}
                    <img src="https://id.wikipedia.org/wiki/Kementerian_Pendidikan_Dasar_dan_Menengah_Republik_Indonesia" alt="" />
                    Program Kemendikbud
            </a>
      

            <div className="flex flex-col gap-2 fixed bottom-5 right-5 z-20">
                <Link href={"https://docs.google.com/forms/d/e/1FAIpQLSdz-1PUUZIE_MvqtEr5C0ijWT0b_mr1fzk3GWCofarx1xjDlQ/viewform"} className='flex gap-4 bg-blue-500 py-2 px-4 text-white'>
                    <Image src={ImageZoom} width={80} height={20} alt='wha'>
                    </Image>
                    Ult Virtual
                </Link>
                <Link href={"https://wa.me/0811779916"} className='flex  gap-4 bg-green-500 py-2 px-4 text-white'>
                    <Image src={ImageWhatsapp} width={20} height={20} alt='wha'>
                    </Image>
                    Unit Layanan Terpadu
                </Link>
            </div>

        </div>
    );
};

export default ZoomButton;