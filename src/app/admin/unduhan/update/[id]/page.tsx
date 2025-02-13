"use client";

import InputField from '@/components/element/InputField';
import AdminLayout from '@/components/layout/adminLayout';
import React, { useCallback, useEffect, useState } from 'react';
import { useAuth } from '@/providers/userContext';
import { showDialog, showToast } from '@/utils/alertUtils';
import { useParams } from "next/navigation";
import TextEditor from '@/components/element/textEditor';
import { Unduhan } from '@/services/api';
import { FaEye, FaFilePdf, FaPlus, FaTrash } from 'react-icons/fa';
import Modal from '@/components/element/user/modals/Modals';

interface FileProps {
    id : string;
    file : string;
    size : string;
    title : string;
}

interface FileUnduhan {
    title: string;
    file: File | null; // Representasi file yang bisa berupa `File` atau `null`
    size: string;
}

const Page = () => {
    const params = useParams();
    const { id } = params;

    // state value unduhan
    const [idValue, setIdValue] = useState<string>('')
    const [titleValue, setTitleValue] = useState<string>('');
    const [dateValue, setDateValue] = useState<string>('');
    const [contentValue, setContentValue] = useState<string>('');;
    const [categoryValue, setCategoryValue] = useState<string>(''); 
    const [filesValue, setFilesValue] = useState<FileProps[] | null>(null);

    // state modal
    const [modalUpdate, setModalUpdate] = useState<boolean>(false);

    // State add file unduhan
    const [fileUnduhanValue, setFileUnduhanValue] = useState<FileUnduhan>({
        title : '',
        file : null,
        size : ''
    });    


    // token
    const { token } = useAuth();

    const fetchData = useCallback(async () => {
        try {
            const response = await Unduhan.GetUnduhan({ id : id });
            const data = response.data;

            if (data?.data[0]) {
                setTitleValue(data.data[0].title);
                setDateValue(data.data[0].date);
                setCategoryValue(data.data[0].category);
                setContentValue(data.data[0].content);
                setFilesValue(data.data[0].files);
                setIdValue(data.data[0].id);
            }
        } catch (error) {
            console.log(error);
        }
    }, [id]); // Dependensi hanya id yang berubah

    useEffect(() => {
        fetchData();
    }, [fetchData])

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const selectedFile = e.target.files?.[0]; // Ambil file yang dipilih
        if (selectedFile) {
          // Memperbarui state dengan file dan ukuran file
          const fileSizeInKB = selectedFile.size / 1024; // Menghitung ukuran file dalam KB
          setFileUnduhanValue((prevState) => ({
            ...prevState,
            file: selectedFile,
            size: `${fileSizeInKB.toFixed(2)} KB`, // Menghitung ukuran file dengan dua desimal
          }));
        }
    };
      

    const handleEditorChange = (value: string) => {
        setContentValue(value);
    };

    const handleSubmit = async () => {
         // Membuat objek FormData untuk menambahkan data
        const formData = new FormData();

        // Menambahkan data non-file ke dalam FormData
        formData.append('title', titleValue);
        formData.append('date', dateValue);
        formData.append('content', contentValue);
        formData.append('category', categoryValue);

        try {
           const response = await Unduhan.UpdateUnduhan(id, token, formData);

            if (response.status === 200) {
                fetchData();
                showToast('success', 'Update Data Berhasil');
            }
        } catch (error) {
            console.error('Error:', error);
            alert('Failed to submit data');
        }
    };

    const handleDeletFile = async (id : string) => {
        try {
            const response = await Unduhan.DeleteFileUnduhan(id, token);

            if (response.status === 200) {
                fetchData();
                showToast('success', 'Berhasil Menghapus File');
            }
        } catch (error) {
            showDialog('error', 'error', 'Gagal Menghapus file kesalahan server');
            console.log(error);
        }
    }
    
    const fetchDataFileUnduhan = async () => {
        if (!fileUnduhanValue.title.trim() || fileUnduhanValue.file === null || !fileUnduhanValue.size.trim()) {
            showDialog('error', 'error', 'Harus di isi semua!')
            return;
        }

        const dataFileUnduhan = new FormData();

        dataFileUnduhan.append('file', fileUnduhanValue.file);
        dataFileUnduhan.append('title', fileUnduhanValue.title);
        dataFileUnduhan.append('size', fileUnduhanValue.size);
        dataFileUnduhan.append('unduhan_id', idValue);

        try {
            const response = await Unduhan.CreateFileUnduhan(token, dataFileUnduhan);

            if (response.status === 200) {
                fetchData();
                setModalUpdate(false);
                showToast('success', 'Berhasil Menambahkan File');
                setFileUnduhanValue({
                    title: '',
                    file: null,
                    size: ''
                });
            }
        } catch (error) {
            console.log(error);
        }
    }


    return (
        <AdminLayout>
            <div className='flex h-max lg:flex-1 w-full flex-col gap-5 pb-20'>
                <div className='h-14 w-full flex items-center justify-end gap-2 border-b'>
                    <button
                        onClick={handleSubmit}
                        className='h-10 px-9 bg-blue-400 hover:bg-blue-500 rounded text-white text-sm'
                    >
                        Save
                    </button>
                </div>
                <div className='w-full h-max  lg:flex-row flex-col-reverse flex gap-5'>
                    <div className='h-[800px] lg:h-[700px] flex flex-1 flex-col gap-5 '>
                        <div className='h-max w-full border rounded flex flex-col'>

                            <div className='h-12 w-full border-b flex items-center justify-between px-4'>
                                <p className='text-sm '>
                                    File Unduhan
                                </p>
                                <div
                                    onClick={() => setModalUpdate(true)}
                                    className='bg-blue-400 hover:bg-blue-500 h-7 w-7 rounded center-flex text-white cursor-pointer text-sm'
                                >
                                    <FaPlus  />
                                </div>
                            </div>

                            {/* Maping Files Value */}
                            <div className='flex  w-full p-5 flex-col gap-4 overflow-y-auto h-[200px]'>
                                {filesValue && filesValue.map((item, index) => (
                                    <div
                                        key={index}
                                        className='h-14 w-full border rounded flex items-center justify-between px-5 flex-shrink-0' 
                                    >
                                        <div className='flex items-center gap-4'>
                                            <FaFilePdf className='text-2xl text-blue-light' />
                                            <div className='flex flex-col  text-blue-secondary'>
                                                <p className='font-medium'>{item.title}</p>
                                                <p className='text-xs'>(pdf {item.size})</p>
                                            </div>
                                        </div>
                                        <div className='flex items-center gap-2'>
                                            <a href={item.file} target='blank'
                                                className='bg-blue-400 hover:bg-blue-500 h-7 w-7 center-flex rounded text-white text-sm'
                                            >
                                                <FaEye />
                                            </a>
                                            <button
                                                onClick={() => handleDeletFile(item.id)}
                                                className='bg-red-400 hover:bg-red-500 h-7 w-7 center-flex rounded text-white text-sm'
                                            >
                                                <FaTrash />
                                            </button>
                                        </div>
                                    </div>

                                ))}
                                
                            </div>
                        </div>

                        <TextEditor 
                            value={contentValue}
                            onChange={handleEditorChange}
                            placeholder='Content'
                        />

                    </div>
                    <div className='lg:w-[300px] w-full h-max flex flex-col gap-4'>
                        <InputField 
                            title='Title '
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
                                <option value="Sakip">Sakip</option>
                                <option value="SPI">SPI</option>
                                <option value="POS">POS</option>
                                <option value="RBI">RBI</option>
                                <option value="Layanan Informasi Publik">Layanan Informasi Publik</option>
                            </select>
                        </div>
                    </div>
                </div>


                <Modal
                    isOpen={modalUpdate}
                    onClose={() => setModalUpdate(false)}
                    classname='h-max w-[90%] max-w-[500px] bg-white rounded py-5 px-5'
                >
                    <div className='w-full h-max flex flex-col gap-2'>
                        <h1 className='mb-4'>Tambah File Unduhan</h1>

                        <div className='flex flex-col gap-1'>
                            <p className='text-sm font-medium'>File</p>
                            <div className='h-12 center-flex w-full border rounded'>
                                <input 
                                    type="file" 
                                    className='text-sm'
                                    onChange={handleFileChange}
                                />
                            </div>
                        </div>
                        <InputField 
                            title='Title'
                            value={fileUnduhanValue.title}
                            onChange={(e) => setFileUnduhanValue({ ...fileUnduhanValue, title: e.target.value })}
                        />
                        <div className='center-flex my-5'>
                            <button 
                                onClick={fetchDataFileUnduhan}
                                className='h-10 px-5 bg-blue-400 hover:bg-blue-500 rounded text-white text-sm'
                            >
                                Save
                            </button>
                        </div>
                    </div>

                </Modal>


            </div>
        </AdminLayout>
    );
}

export default Page;
