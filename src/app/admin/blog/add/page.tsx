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
import { Blog } from '@/services/api';
import Image from 'next/image';
import { GifSpinner } from '@/assets/gif';

const Page = () => {
    const [nameValue, setNameValue] = useState<string>('');
    const [titleValue, setTitleValue] = useState<string>('');
    const [editorContent, setEditorContent] = useState<string>(''); 
    const [dateValue, setDateValue] = useState<string>('');
    const [imageFile, setImageFile] = useState<File | null>(null); // To store selected image
    const [categoryValue, setCategoryValue] = useState<string>(''); 
    const [statusValue, setStatusValue] = useState<string>('');
    const [loading, setLoading] = useState<boolean>(false);
    const { token } = useAuth();

    const handleEditorChange = (value: string) => {
        setEditorContent(value);
    };

    const handleSubmit = async () => {
        if (!nameValue || !titleValue || !dateValue || !categoryValue || !editorContent || !imageFile) {
            showDialog('error', 'error', 'Semua Kolom harus di isi')
            return; // Hentikan eksekusi jika ada field yang kosong
        };

        const formData = new FormData();
        formData.append('name', nameValue);
        formData.append('title', titleValue);
        formData.append('date', dateValue);
        formData.append('category', categoryValue);
        formData.append('article', editorContent);
        formData.append('status', statusValue);

        if (imageFile) {
            formData.append('image', imageFile);
        }

        setLoading(true);

        try {
            const response = await Blog.CreateBlog(token, formData)

            if (response.status === 200) {
                showToast('success', 'Berhasil Menambahkan Content');
                handleReset();
            } 
        } catch (error) {
            console.error('Error:', error);
            showDialog('error', "Internal Server Error");
        } finally {
            setLoading(false); // Set loading to false when the request finishes
        }
    };

    const handleReset = () => {
        setNameValue('');
        setTitleValue('');
        setDateValue('');
        setCategoryValue('');
        setEditorContent('');
        setImageFile(null);
        setStatusValue('');
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
                            value={editorContent}
                            onChange={handleEditorChange}
                            placeholder='Article '
                        />
                    </div>
                    <div className='lg:w-[300px] w-full h-max flex flex-col gap-4'>
                        <InputField 
                            title='Nama Pengirim'
                            value={nameValue}
                            onChange={(e) => setNameValue(e.target.value)}
                        />
                        <InputField 
                            title='Title Blog'
                            value={titleValue}
                            onChange={(e) => setTitleValue(e.target.value)}
                        />
                        <InputField 
                            title='Tanggal'
                            type='date'
                            value={dateValue}
                            onChange={(e) => setDateValue(e.target.value)}
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
                                <option value="Berita">Berita</option>
                                <option value="Opini">Opini</option>
                                <option value="Artikel">Artikel</option>
                            </select>
                        </div>
                        <div className='flex flex-col gap-1 w-full'>
                            <p className='text-sm '>Status</p>
                            <select 
                                name="" 
                                id=""
                                value={statusValue}
                                onChange={(e) => setStatusValue(e.target.value)}
                                className='h-12 w-full border focus:outline-none px-2 text-sm rounded'
                            >
                                <option value="">Pilih Status</option>
                                <option value="published">Published</option>
                                <option value="archived">Archived</option>
                                <option value="draft">Draft</option>
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
