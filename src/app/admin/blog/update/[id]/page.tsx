"use client";

import InputField from '@/components/element/InputField';
import AdminLayout from '@/components/layout/adminLayout';
import React, { useCallback, useEffect, useState } from 'react';
import { useAuth } from '@/providers/userContext';
import { showToast } from '@/utils/alertUtils';
import { useParams } from "next/navigation";
import TextEditor from '@/components/element/textEditor';
import FileUploader from '@/components/element/fileUploader';
import { Blog } from '@/services/api';
import Image from 'next/image';
import { GifSpinner } from '@/assets/gif';


const Page = () => {
    const params = useParams();
    const { id } = params;
    const [editorContent, setEditorContent] = useState<string>(''); 
    const [nameValue, setNameValue] = useState<string>('');
    const [titleValue, setTitleValue] = useState<string>('');
    const [dateValue, setDateValue] = useState<string>('');
    const [imageFile, setImageFile] = useState<File | string | null>(null);
    const [imageFileUpdate, setImageFileUpdate] = useState<File | string | null>(null);
    const [categoryValue, setCategoryValue] = useState<string>(''); 
    const [statusValue, setStatusValue] = useState<string>('');
    const [loading, setLoading] = useState<boolean>(false);
    const { token } = useAuth();

    const fetchData = useCallback(async () => {
        try {
            const response = await Blog.GetBlog({ id: id });
            const data = response.data;

            if (data?.data[0]) {
                setNameValue(data.data[0].name);
                setTitleValue(data.data[0].title);
                setDateValue(data.data[0].date);
                setCategoryValue(data.data[0].category);
                setEditorContent(data.data[0].article);
                setStatusValue(data.data[0].status);
                setImageFile(data.data[0].image);
            }
        } catch (error) {
            console.log(error);
        }
    }, [id]); // Dependensi hanya id yang berubah

    useEffect(() => {
        fetchData();
    }, [fetchData])

    const handleEditorChange = (value: string) => {
        setEditorContent(value);
    };

    const handleSubmit = async () => {
         // Membuat objek FormData untuk menambahkan data
        const formData = new FormData();

        // Menambahkan data non-file ke dalam FormData
        formData.append('name', nameValue);
        formData.append('title', titleValue);
        formData.append('date', dateValue);
        formData.append('category', categoryValue);
        formData.append('article', editorContent);
        formData.append('status', statusValue);

        if (imageFileUpdate) {
            formData.append('image', imageFileUpdate);
        }

        setLoading(true);

        try {
            const response = await Blog.UpdateBlog(id, token, formData);

            if (response.status === 200) {
                showToast('success', 'Berhasil Mengupdate data');
                fetchData();
            } else {
                alert('Error saving data');
            }

        } catch (error) {
            console.error('Error:', error);
            alert('Failed to submit data');
        } finally {
            setLoading(false); // Set loading to false when the request finishes
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
                            value={editorContent}
                            onChange={handleEditorChange}
                            placeholder='Update'
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
                                disabled
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
                            {imageFileUpdate ? (
                                <FileUploader 
                                    imageFile={imageFileUpdate}
                                    setImageFile={setImageFileUpdate}
                                /> 
                            ) : (
                                <FileUploader 
                                    imageFile={imageFile}
                                    setImageFile={setImageFileUpdate}
                                />
                            )}
                        </div>
                        
                    </div>

                </div>
            </div>
        </AdminLayout>
    );
}

export default Page;
