"use client";

import InputField from '@/components/element/InputField';
import AdminLayout from '@/components/layout/adminLayout';
import React, { useState } from 'react';
import { useAuth } from '@/providers/userContext';
import { showDialog, showToast } from '@/utils/alertUtils';
import dynamic from 'next/dynamic';

const TextEditor = dynamic(() => import('@/components/element/textEditor'), {
  ssr: false,
});

import {  Testimoni } from '@/services/api';
import Image from 'next/image';
import { GifSpinner } from '@/assets/gif';


const Page = () => {
    const [titleValue, setTitleValue] = useState<string>('');
    const [contentValue, setContentValue] = useState<string>(''); 
    const [jabatanValue, setJabatanValue] = useState<string>(''); 
    const [loading, setLoading] = useState<boolean>(false);
    const { token } = useAuth();

    const handleEditorChange = (value: string) => {
        setContentValue(value);
    };

    const handleSubmit = async () => {
        if (!titleValue || !contentValue || !jabatanValue ) {
            showDialog('error', 'error', 'Semua Kolom harus di isi');
            return; // Hentikan eksekusi jika ada field yang kosong
        }
 
        const formData = new FormData();
        formData.append('name', titleValue);
        formData.append('content', contentValue);
        formData.append('title', jabatanValue);

        setLoading(true);

        try {
            const response = await Testimoni.addTestimoni(token??"", formData);

            if (response.status === 200) {
                showToast('success', 'Berhasil Menambahkan Testimoni');
                handleReset();
            } else {
                alert('Error saving data');
            }

        } catch (error) {
            console.error('Error:', error);
            alert('Failed to submit data');
        }finally {
            setLoading(false);
        }
    };

    const handleReset = () => {
       setTitleValue('');
       setContentValue('');
       setJabatanValue('');
    }

    return (
        <AdminLayout>
            <div className='flex h-max lg:flex-1 w-full flex-col gap-5 pb-20'>
                <div className='h-14 w-full flex items-center justify-end gap-2 border-b'>
                    <button
                        onClick={handleReset}
                        className='h-10 px-9 border rounded  text-sm'
                    >
                        Reset
                    </button>
                    {loading ? (
                        <div className="h-10 px-9 bg-blue-400 hover:bg-blue-500 rounded text-white text-sm center-flex">
                            <Image 
                                src={GifSpinner}
                                alt="Gif Spinneer"
                                className="h-5 w-5"
                            />
                        </div>
                    ) : (
                        <button
                            onClick={handleSubmit}
                            className="h-10 px-9 bg-blue-400 hover:bg-blue-500 rounded text-white text-sm"
                        >
                            Save
                        </button>
                    )}
                </div>
                <div className='w-full h-max  lg:flex-row flex-col-reverse flex gap-5'>
                    <div className='h-[600px] flex flex-1 '>
                        <TextEditor 
                            value={contentValue}
                            onChange={handleEditorChange}
                            placeholder='Isi Testomoni '
                        />
                    </div>
                    <div className='lg:w-[300px] w-full h-max flex flex-col gap-4'>
                        <InputField 
                            title='Nama'
                            value={titleValue}
                            onChange={(e) => setTitleValue(e.target.value)}
                        />
                        <InputField 
                            title='Jabatan / '
                            value={jabatanValue}
                            onChange={(e) => setJabatanValue(e.target.value)}
                        />
                    </div>
                </div>
            </div>
        </AdminLayout>
    );
}

export default Page;
