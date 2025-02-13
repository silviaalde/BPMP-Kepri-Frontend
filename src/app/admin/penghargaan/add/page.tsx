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

const FileUploader = dynamic(() => import('@/components/element/fileUploader'), {
  ssr: false,
});
import {  Penghargaan } from '@/services/api';


const Page = () => {
    const [titleValue, setTitleValue] = useState<string>('');
    const [dateValue, setDateValue] = useState<string>('');
    const [contentValue, setContentValue] = useState<string>(''); 
    const [imageFile, setImageFile] = useState<File | null>(null); // To store selected image
    const [categoryValue, setCategoryValue] = useState<string>(''); 
    const [locationValue, setLocationValue] = useState<string>('');
    const { token } = useAuth();

    const handleEditorChange = (value: string) => {
        setContentValue(value);
    };

    const handleSubmit = async () => {
        if (!titleValue || !contentValue || !imageFile || !categoryValue || !locationValue || !dateValue) {
            showDialog('error', 'error', 'Semua Kolom harus di isi');
            return; // Hentikan eksekusi jika ada field yang kosong
        }
 
        const formData = new FormData();
        formData.append('title', titleValue);
        formData.append('date', dateValue);
        formData.append('content', contentValue);
        formData.append('location', locationValue);
        formData.append('category', categoryValue);

        if (imageFile) {
            formData.append('image', imageFile);
        }

        try {
            const response = await Penghargaan.CreatePenghargaan(token, formData);

            if (response.status === 200) {
                showToast('success', 'Berhasil Menambahkan Content');
                window.location.reload();
            } else {
                alert('Error saving data');
            }

        } catch (error) {
            console.error('Error:', error);
            alert('Failed to submit data');
        }
    };

    const handleReset = () => {
       setTitleValue('');
       setContentValue('');
       setDateValue('');
       setImageFile(null);
       setCategoryValue('');
       setLocationValue('');
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
                    <button
                        onClick={handleSubmit}
                        className='h-10 px-9 bg-blue-400 hover:bg-blue-500 rounded text-white text-sm'
                    >
                        Save
                    </button>
                </div>
                <div className='w-full h-max  lg:flex-row flex-col-reverse flex gap-5'>
                    <div className='h-[600px] flex flex-1 '>
                        <TextEditor 
                            value={contentValue}
                            onChange={handleEditorChange}
                            placeholder='Article '
                        />
                    </div>
                    <div className='lg:w-[300px] w-full h-max flex flex-col gap-4'>
                        <InputField 
                            title='Title'
                            value={titleValue}
                            onChange={(e) => setTitleValue(e.target.value)}
                        />
                        <InputField 
                            title='Tanggal'
                            type='date'
                            value={dateValue}
                            onChange={(e) => setDateValue(e.target.value)}
                        />
                        <InputField 
                            title='Location'
                            value={locationValue}
                            onChange={(e) => setLocationValue(e.target.value)}
                        />
                        <div className='flex flex-col gap-1 w-full'>
                            <p className='text-sm '>Category</p>
                            <select 
                                name="" 
                                id=""
                                value={categoryValue}
                                onChange={(e) => setCategoryValue(e.target.value)}
                                className='h-12 w-full border focus:outline-none px-2 text-sm rounded'
                            >
                                <option value="">Pilih Category</option>
                                <option value="BPMP Prov.kepri">BPMP Prov.kepri</option>
                                <option value="Pemerintahan Daerah">Pemerintahan Daerah</option>
                                <option value="Satuan Pendidikan">Satuan Pendidikan</option>
                            </select>
                        </div>
                        <div className='flex flex-col gap-1 w-full'>
                            <p className='text-sm '>Image</p>
                            <FileUploader 
                                imageFile={imageFile}
                                setImageFile={setImageFile}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </AdminLayout>
    );
}

export default Page;
