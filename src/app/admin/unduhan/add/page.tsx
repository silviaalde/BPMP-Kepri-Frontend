"use client";

import { GifSpinner } from "@/assets/gif";
import InputField from "@/components/element/InputField";
import TextEditor from "@/components/element/textEditor";
import Modal from "@/components/element/user/modals/Modals";
import AdminLayout from "@/components/layout/adminLayout";
import { useAuth } from "@/providers/userContext";
import { Unduhan } from "@/services/api";
import { showDialog, showToast } from "@/utils/alertUtils";
import Image from "next/image";
import { useState } from "react";
import { FaFilePdf, FaPlus, FaTrash } from "react-icons/fa";

interface DataUnduhanProps {
    title: string;
    content: string;
    category: string;
    date: string;
    file: { title: string; file: File; size: string }[]; // Array of objects with title and file
}

const Page = () => {
    const { token } = useAuth();
    const [modalAdd, setModalAdd] = useState<boolean>(false);
    const [formData, setFormData] = useState<DataUnduhanProps>({
        title: '',
        content: '',
        category: '',
        date: '',
        file: [],
    });
    const [fileTitle, setFileTitle] = useState<string>('');
    const [loading, setLoading] = useState<boolean>(false);
    const [fileToAdd, setFileToAdd] = useState<File | null>(null);

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const selectedFile = e.target.files?.[0]; // Ambil file yang dipilih
        if (selectedFile) {
            setFileToAdd(selectedFile);
        }
    };

    const handleSubmit = async () => {
        if (
            !formData.title.trim() ||
            !formData.content.trim() ||
            !formData.category.trim() ||
            !formData.date.trim() || 
            formData.file.length === 0
        ) {
            showDialog('error', 'error', 'Harus di isi semua!')
            return;
        }

        const uploadData = new FormData(); // Ganti nama agar lebih jelas
    
        uploadData.append('title', formData.title); // Ambil dari state `formData`
        uploadData.append('content', formData.content);
        uploadData.append('category', formData.category);
        uploadData.append('date', formData.date);

        formData.file.forEach((file, index) => {
            // Properti file
            uploadData.append(`fileunduhan[${index}][file]`, file.file);
            uploadData.append(`fileunduhan[${index}][title]`, file.title);
            uploadData.append(`fileunduhan[${index}][size]`, file.size); // Ukuran dalam byte
        });

        setLoading(true);

        try {
            const response = await Unduhan.CreateUnduhan(token, uploadData);
            
            if (response.status === 200) {
                handleReset();
                showToast('success', 'Berhasil Menambahkan Data');
            }
        } catch (error) {
            showDialog('error', 'error', "Internal Server Error");
            console.log(error);
        } finally {
            setLoading(false); // Set loading to false when the request finishes
        }
    };

    const handleAddFile = () => {
        if (fileTitle.trim() === '') {
            alert('File title cannot be empty');
            return;
        }

        if (fileToAdd) {
            // Menghitung ukuran file dalam KB
            const fileSizeInKB = fileToAdd.size / 1024;
    
            // Perbarui state formData dengan menambahkan file baru
            setFormData((prevState) => ({
                ...prevState,
                file: [
                    ...prevState.file, // Menambahkan file yang sudah ada
                    {
                        title: fileTitle, // Nama file
                        file: fileToAdd, // File itu sendiri
                        size: `${fileSizeInKB.toFixed(2)} KB`, // Ukuran file dengan dua desimal
                    },
                ],
            }));
        }
    
    
        setFileTitle(''); // Reset file title input
        setModalAdd(false); // Close modal
    };
    
    const handleDeleteFile = (index: number) => {
        setFormData((prevState) => ({
            ...prevState,
            file: prevState.file.filter((_, i) => i !== index), // Remove file by index
        }));
    };

    const handleReset = () => {
        setFormData({
            title: '',
            content: '',
            category: '',
            date: '',
            file: [],
        });
    }

    return (
        <AdminLayout>
            <div className="flex h-max lg:flex-1 w-full flex-col gap-5 pb-20">
                <div className="h-14 w-full flex items-center justify-end gap-2 border-b">
                    <button
                        onClick={handleReset}
                        className="h-10 px-9 border rounded text-sm"
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
                <div className="w-full h-max lg:flex-row flex-col-reverse flex gap-5">
                    <div className="h-max flex flex-1 flex-col  gap-5">
                        <div className='h-max w-full border rounded flex flex-col'>
                            <div className='h-12 w-full border-b flex items-center justify-between px-4'>
                                <p className='text-sm '>
                                    File Unduhan
                                </p>
                                <div
                                    onClick={() => setModalAdd(true)}
                                    className='bg-blue-400 hover:bg-blue-500 h-7 w-7 rounded center-flex text-white cursor-pointer text-sm'
                                >
                                    <FaPlus  />
                                </div>
                            </div>
                            <div className='flex w-full  p-5 flex-col  gap-4 overflow-y-auto h-[200px]'>
                                {formData.file.length > 0 ? (
                                    formData.file.map((item, index) => (
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
                                                <button
                                                    onClick={() => handleDeleteFile(index)}
                                                    className='bg-red-400 hover:bg-red-500 h-7 w-7 center-flex rounded text-white text-sm'
                                                >
                                                    <FaTrash />
                                                </button>
                                            </div>
                                        </div>
                                    ))
                                ) : (
                                    <p className='text-sm'>No files added.</p>
                                )}
                            </div>
                        </div>
                        <div className="h-[600px] w-full">
                            <TextEditor
                                placeholder="Content"
                                value={formData.content}
                                onChange={(value) => setFormData({ ...formData, content: value })}
                            />
                        </div>
                    </div>
                    <div className="lg:w-[300px] w-full h-max flex flex-col gap-4">
                        <InputField
                            title="Title"
                            value={formData.title}
                            onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                        />
                        <InputField
                            title="Date"
                            type="date"
                            value={formData.date}
                            onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                        />
                        <div className='flex flex-col gap-1 w-full'>
                            <p className='text-sm '>Category</p>
                            <select
                                name=""
                                id=""
                                value={formData.category}
                                onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                                className='h-12 w-full border focus:outline-none px-2 text-sm rounded'
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
                    isOpen={modalAdd}
                    onClose={() => setModalAdd(false)}
                    classname='h-max w-[90%] max-w-[500px] bg-white rounded py-5 px-5'
                >
                    <div className='w-full h-max flex flex-col gap-2'>
                        <h1 className='mb-4'>Tambah File Unduhan</h1>

                        <div className='flex flex-col gap-1'>
                            <p className='text-sm '>File</p>
                            <div className='h-12 center-flex w-full border rounded'>
                                <input
                                    type="file"
                                    className='text-sm'
                                    onChange={handleFileChange}
                                />
                            </div>
                        </div>
                        <InputField
                            title="File Title"
                            value={fileTitle}
                            onChange={(e) => setFileTitle(e.target.value)}
                        />
                        <div className='center-flex my-5'>
                            <button
                                onClick={handleAddFile}
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
};

export default Page;
