"use client";

import { BgBerlangganan } from '@/assets/background'
import MainLayout from '@/components/layout/mainLayout'
import Image from 'next/image'
import Link from 'next/link';

const Page = () => {
    return (
      <MainLayout>
        <div className='w-full h-[700px] relative flex  items-center flex-col ' >
          <Image 
            src={BgBerlangganan}
            alt='Background b'
            className='bottom-0 right-0 w-full opacity-5 absolute pointer-events-none'
          />

          <p className='text-[200px] font-bold text-blue-light font-mono '>
            404
          </p>
          <h3 className='text-2xl md:text-4xl font-semibold  uppercase text-blue-secondary text-center tracking-wide'>
            Sorry We Can&apos;t Find That Page!
          </h3>
          <p className='my-10 text-xl'>
            The page you are looking for was never existed.
          </p>
          <Link
            href="/"
          >
            <button
              className='h-14 px-8 bg-blue-light hover:opacity-70 z-0 text-white '
            >
              Back To Home
            </button>
          </Link>
        </div>
      </MainLayout>
    )
}

export default Page