"use client";

import InputField from '@/components/element/InputField';
import AdminLayout from '@/components/layout/adminLayout';
import React, { useCallback, useEffect, useState } from 'react';
import { useAuth } from '@/providers/userContext';
import { showDialog, showToast } from '@/utils/alertUtils';
import { useParams } from "next/navigation";
import TextEditor from '@/components/element/textEditor';
import { Testimoni } from '@/services/api';
import Image from 'next/image';
import { GifSpinner } from '@/assets/gif';


const Page = () => {
    const params = useParams();
    const { id  } = params;
    const [titleValue, setTitleValue] = useState<string>('');
    const [contentValue, setContentValue] = useState<string>('');
    const [categoryValue, setCategoryValue] = useState<string>(''); 
    const [loading, setLoading] = useState<boolean>(false);
    const { token } = useAuth();

    const fetchData = useCallback(async () => {
        try {
            const response = await Testimoni.getTestimoni({ id : typeof id === "string" ?id : id?.[0]??"" });
            const data = response.data;

            if (data?.data[0]) {
                setTitleValue(data.data[0].name);
                setCategoryValue(data.data[0].title);
                setContentValue(data.data[0].content);
            }
        } catch (error) {
            console.log(error);
        }
    }, [id]); // Dependensi hanya id yang berubah

    useEffect(() => {
        fetchData();
    }, [fetchData])

    const handleEditorChange = (value: string) => {
        setContentValue(value);
    };

    const handleSubmit = async () => {
         // Membuat objek FormData untuk menambahkan data
        const formData = new FormData();

        // Menambahkan data non-file ke dalam FormData
        formData.append('name', titleValue);
        formData.append('content', contentValue);
        formData.append('title', categoryValue);
        if(typeof id === "string")formData.append('id', id);

        setLoading(true);

        try {
            const response = await Testimoni.updateTestimoni(token??"", formData);

            if (response.status === 200) {
                showToast('success', 'Berhasil Mengupdate data');
                fetchData();
            } else {
                alert('Error saving data');
            }

        } catch (error) {
            console.error('Error:', error);
            showDialog('error', 'Error', "Interal Server Error")
        } finally {
            setLoading(false);
        }
    };


    return (
        <AdminLayout>
            <div className='flex h-max lg:flex-1 w-full flex-col gap-5 pb-20'>
                <div className='h-14 w-full flex items-center justify-end gap-2 border-b'>
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
                    <div className='h-[800px] lg:h-[700px] flex flex-1 '>
                        <TextEditor 
                            value={contentValue}
                            onChange={handleEditorChange}
                            placeholder='Update'
                        />
                    </div>
                    <div className='lg:w-[300px] w-full h-max flex flex-col gap-4'>
                        <InputField 
                            title='Nama'
                            value={titleValue}
                            onChange={(e) => setTitleValue(e.target.value)}
                        />
                         <InputField 
                            title='Jabatan'
                            value={categoryValue}
                            onChange={(e) => setCategoryValue(e.target.value)}
                        />
                    </div>

                </div>
            </div>
        </AdminLayout>
    );
}

export default Page;
