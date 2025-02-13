'use client';

import { useState } from "react";
import AdminLayout from "@/components/layout/adminLayout";
import Image from "next/image";
import InputField from "@/components/element/InputField";
import TextEditor from "@/components/element/textEditor";
import { showDialog, showToast } from "@/utils/alertUtils";
import { useAuth } from "@/providers/userContext";
import { Kegiatan } from "@/services/api";
import { GifSpinner } from "@/assets/gif";
import { FaPlus, FaTrash } from "react-icons/fa";
import Modal from "@/components/element/user/modals/Modals";

// Mendeklarasikan tipe untuk formData
interface FormData {
  title: string;
  description: string;
  date: string;
  location: string;
  department: string;
  images: { title: string; file: File, preview: string  }[]; // Array of objects with title and file
}

const Page = () => {
    // Mendeklarasikan tipe state formData
    const [formData, setFormData] = useState<FormData>({
        title: '',
        description: '',
        date: '',
        location: '',
        department: '',
        images: [],
    });

    const [imageTitle, setImageTitle] = useState<string>('');
    const [loading, setLoading] = useState<boolean>(false);
    const [imageToAdd, setImageToAdd] = useState<File | null>(null);
    const [modalIsOpen, setModalIsOpen] = useState<boolean>(false);

    const { token } = useAuth();



    // Menangani reset form
    const handleReset = () => {
        setFormData({
            title: '',
            description: '',
            date: '',
            location: '',
            department: '',
            images: [],
        });
    };

    // Menangani perubahan pada input file
    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const selectedFile = e.target.files?.[0]; // Ambil file yang dipilih
        if (selectedFile) {
            setImageToAdd(selectedFile);
        }
    };

    const handleAddFile = () => {
        if (!imageToAdd || !imageTitle.trim()) {
            showDialog('error', 'Gagal', 'Title dan file harus diisi!');
            return;
        }

        const preview = URL.createObjectURL(imageToAdd);

        setFormData((prevState) => ({
            ...prevState,
            images: [
              ...prevState.images,
              { title: imageTitle, file: imageToAdd, preview },
            ],
        }));
    
    
        // Reset modal state
        setImageTitle('');
        setImageToAdd(null);
        setModalIsOpen(false); 
    };

    // Fungsi untuk menghapus gambar berdasarkan index
    const handleRemoveImage = (index: number) => {
        setFormData((prevState) => ({
            ...prevState,
            images: prevState.images.filter((_, i) => i !== index),
        }));
    };

    const handleSubmit = async () => {
        const { title, description, date, location, department, images } = formData;

        if (!title || !description || !date || !location || !department || images.length === 0) {
            showDialog('error', 'Error', 'Semua field harus diisi!');
            return;
        }

        // Buat instance FormData
        const apiFormData = new FormData();

        // Tambahkan data teks ke FormData
        apiFormData.append('title', formData.title);
        apiFormData.append('description', formData.description);
        apiFormData.append('date', formData.date);
        apiFormData.append('location', formData.location);
        apiFormData.append('department', formData.department);

        // Tambahkan data file ke FormData
        formData.images.forEach((image, index) => {
            apiFormData.append(`images[${index}][title]`, image.title); // Tambahkan title gambar
            apiFormData.append(`images[${index}][file]`, image.file);   // Tambahkan file gambar
        });

        setLoading(true);
        

        try {
            const response = await Kegiatan.CreateKegiatan(token, apiFormData);

            if (response.status === 200) {
                handleReset();
                showToast('success', 'Berhasil Menambahkan Content');
            }
        } catch (error) {
            console.log(error);
        } finally {
            setLoading(false); // Set loading to false when the request finishes
             
        }


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
                    <div className="h-max flex flex-1 flex-col gap-5">
                        <div className="h-max w-full border rounded flex flex-col  ">
                            <div className="h-12 w-full border-b flex items-center justify-between px-4">
                                <p className='text-sm '>
                                    Image Galery
                                </p>
                                <div
                                    onClick={() => setModalIsOpen(true)}
                                    className='bg-blue-400 hover:bg-blue-500 h-7 w-7 rounded center-flex text-white cursor-pointer text-sm'
                                >
                                    <FaPlus  />
                                </div>
                               
                            </div>
                            <div className="flex w-full  p-5 flex-col  gap-4 overflow-y-auto h-[200px]">
                                {formData.images.length > 0 ? (
                                    <>
                                        {formData.images.map((preview, index) => (
                                            <div 
                                                key={index} 
                                                 className='h-14 w-full border rounded flex items-center justify-between px-5 flex-shrink-0'
                                            >
                                                <div className='flex items-center gap-4'>
                                                    <Image
                                                        src={preview.preview}
                                                        alt={preview.title}
                                                        className="object-cover h-12 w-12 rounded"
                                                        width={100}
                                                        height={400}
                                                    />
                                                    <p className="text-center text-xs">{preview.title}</p>
                                                </div>
                                                <button
                                                    onClick={() => handleRemoveImage(index)}
                                                    className="bg-red-400 hover:bg-red-500 h-7 w-7 center-flex rounded text-white text-sm"
                                                >
                                                    <FaTrash />
                                                </button>
                                            </div>
                                        ))}
                                    </>
                                   
                                ) : (
                                    <div className="w-full h-[150px] center-flex ">
                                        <p className="">No image selected</p>
                                    </div>
                                )}
                            </div>
                        </div>

                        <div className="h-[600px] w-full ">
                            <TextEditor 
                                placeholder="Description"
                                value={formData.description}
                                onChange={(e) => setFormData({ ...formData, description: e })}
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
                            title="Location"
                            value={formData.location}
                            onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                        />
                        <InputField 
                            title="Department"
                            value={formData.department}
                            onChange={(e) => setFormData({ ...formData, department: e.target.value })}
                        />
                        <InputField 
                            title="Date"
                            type="date"
                            value={formData.date}
                            onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                        />
                    </div>
                </div>

                {/* Modal Add File */}
                <Modal
                    isOpen={modalIsOpen}
                    onClose={() => setModalIsOpen(false)}
                    classname='h-max w-[90%] max-w-[500px] bg-white rounded py-5 px-5'
                >
                    <div className='w-full h-max flex flex-col gap-2'>
                        <h1 className='mb-4'>Tambah Image Galery</h1>
                    
                        <div className='flex flex-col gap-1'>
                            <p className='text-sm '>Image</p>
                            <div className='h-12 center-flex w-full border rounded'>
                                <input
                                    type="file"
                                    className='text-sm'
                                    onChange={handleFileChange}
                                />
                            </div>
                        </div>
                        <InputField
                            title="Image Title"
                            value={imageTitle}
                            onChange={(e) => setImageTitle(e.target.value)}
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
