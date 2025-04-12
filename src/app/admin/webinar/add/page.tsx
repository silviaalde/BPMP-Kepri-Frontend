"use client";

import InputField from '@/components/element/InputField';
import AdminLayout from '@/components/layout/adminLayout';
import React, { useState } from 'react';
import { useAuth } from '@/providers/userContext';
import { showDialog, showToast } from '@/utils/alertUtils';
import {  Webinar } from '@/services/api';
import Image from 'next/image';
import { GifSpinner } from '@/assets/gif';
import FileUploader from '@/components/element/fileUploader';


const Page = () => {
    const [titleValue, setTitleValue] = useState<string>('');
    const [description, setDescription] = useState<string>('');
    const [url, setUrl] = useState<string>('');
    const [location, setLocation] = useState<string>(''); 
    const [date, setDate] = useState<string>(''); 
    const [timeStart, setTimeStart] = useState<string>("");
    const [timeEnd, setTimeEnd] = useState<string>("");
    const { token } = useAuth();
    const [imageFile, setImageFile] = useState<null | File>(null);
    const [loading, setLoading] = useState<boolean>(false);


    const handleSubmit = async () => {
        if (!titleValue || !location || !date ) {
            showDialog('error', 'error', 'Semua Kolom harus di isi');
            return; // Hentikan eksekusi jika ada field yang kosong
        }

        const parser = new FileReader();
        if(imageFile){
            parser.readAsDataURL(imageFile);

            parser.onload = async ()=>{
                const formData = new FormData();
                formData.append('title', titleValue);
                formData.append('url', url);
                formData.append('description', description);
                formData.append('location', location);
                formData.append('date', date);
                formData.append('time_start', timeStart);
                formData.append('time_end', timeEnd);
                if(parser.result)formData.append('image', parser.result as string ?? "");
                formData.append('date', date);
    
                setLoading(true);
    
                try {
                    const response = await Webinar.addWebinar(token??"", formData);
    
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
            }

        }
 
        
    };

    const handleReset = () => {
       setTitleValue('');
       setLocation('');
       setDate('');
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
                    <div className='h-[600px] flex flex-1 flex-col gap-4'>
                        <InputField 
                            title='Deskripsi'
                            value={description}
                            onChange={(e) => setDescription(e.target.value)}
                        />

                        <InputField 
                            title='Link webinar'
                            value={url}
                            onChange={(e) => setUrl(e.target.value)}
                        />
                        
                        <label htmlFor="">Input Gambar</label>

                        <FileUploader 
                            imageFile={imageFile}
                            setImageFile={setImageFile}
                        />
                    </div>
                    <div className='lg:w-[300px] w-full h-max flex flex-col gap-4'>
                        <InputField 
                            title='Nama'
                            value={titleValue}
                            onChange={(e) => setTitleValue(e.target.value)}
                        />
                        <InputField 
                            title='Lokasi'
                            value={location}
                            onChange={(e) => setLocation(e.target.value)}
                        />
                        <InputField 
                            title='Tanggal'
                            type='date'
                            value={date}
                            onChange={(e) => setDate(e.target.value)}
                        />
                        <InputField 
                            type='time'
                            title='Waktu mulai'
                            value={timeStart}
                            onChange={(e) => setTimeStart(e.target.value)}
                        />
                        <InputField 
                            type='time'
                            title='Waktu selesai'
                            value={timeEnd}
                            onChange={(e) => setTimeEnd(e.target.value)}
                        />

                        
                    </div>
                </div>
            </div>
        </AdminLayout>
    );
}

export default Page;
