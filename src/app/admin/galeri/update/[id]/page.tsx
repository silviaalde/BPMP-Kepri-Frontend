"use client";

import { GifSpinner } from "@/assets/gif";
import InputField from "@/components/element/InputField";
import TextEditor from "@/components/element/textEditor";
import Modal from "@/components/element/user/modals/Modals";
import AdminLayout from "@/components/layout/adminLayout"
import { useAuth } from "@/providers/userContext";
import { ImageKegiatan, Kegiatan } from "@/services/api";
import { showDialog, showToast } from "@/utils/alertUtils";
import Image from "next/image";
import { useParams } from "next/navigation"
import { useCallback, useEffect, useState } from "react";
import { FaPlus, FaTrash } from "react-icons/fa";

interface ImageKegiatanProps {
    id : string;
    name : string;
    image : string | null;
}

const Page = () => {
    const params = useParams();
    const { id } = params;

    // State Kegiatan
    const [idValue, setIdValue] = useState<string>('');
    const [titleValue, setTitleValue] = useState<string>('');
    const [descValue, setDescValue] = useState<string>('');
    const [locationValue, setLocationValue] = useState<string>('');
    const [departmentValue, setDepartmentValue] = useState<string>('');
    const [dateValue, setDateValue] = useState<string>('');
    const [imageValue, setImageValue] = useState<ImageKegiatanProps[] | null>(null);

    const [loading, setLoading] = useState<boolean>(false);

    const [modalIsOpen, setModalIsOpen] = useState<boolean>(false);

    const [imageAddValue, setImageAddValue] = useState<File | null>(null);
    const [titleAddValue, setTitleAddValue] = useState<string>('');

    const { token } = useAuth();

    const fetchData = useCallback(async () => {
        try {
            const response = await Kegiatan.GetKegiatan({ id : id });
            const data = response.data;

            if (data?.data[0]) {
                setIdValue(data?.data[0].id);
                setTitleValue(data.data[0].title);
                setDescValue(data.data[0].description);
                setLocationValue(data.data[0].location);
                setDepartmentValue(data.data[0].department);
                setDateValue(data.data[0].date);
                setImageValue(data.data[0].image_kegiatan);
            }

        } catch (error) {
            console.log(error);
        }
    }, [id]); // Dependensi hanya id yang berubah
    
    useEffect(() => {
        fetchData();
    }, [fetchData]);

    // fetchUpdateData
    const handleSubmit = async () => {
        const formData = new FormData();

        formData.append('title', titleValue);
        formData.append('description', descValue);
        formData.append('location', locationValue);
        formData.append('department', departmentValue);
        formData.append('date', dateValue);

        setLoading(true);

        try {
            const response = await Kegiatan.UpdateKegiatan(id, token, formData);

            if (response.status === 200) {
                showToast('success', "Berhasil Edit Data");
                fetchData();
            }
        } catch (error) {
            showDialog('error', 'error', "Internal Server Error");
            console.log(error);
        } finally {
            setLoading(false);
        }
    }

    const handleDeleteImage = async (id : string) => {
        try {
            const response = await ImageKegiatan.DeleteImageKegiatan(id, token);

            if (response.status === 200) {
                fetchData();
                showToast("success", "Berhasil menghapus image");
            }
        } catch (error) {
            console.log(error);
            showDialog('error', 'error', 'Internal Server Error');
        }
    }

    const handleSubmitAddImage = async () => {
        if (!titleAddValue || !imageAddValue) {
            showDialog('error', 'error', 'Semua Kolom harus di isi');
            return;
        }

        const data = new FormData();

        data.append('name', titleAddValue);
        data.append('kegiatan_id', idValue);
        
        if (imageAddValue) {
            data.append('image', imageAddValue); // Pastikan hanya menambahkan jika tidak null
        }

        try {
            const response = await ImageKegiatan.CreateImageKegiatan(token, data);

            if (response.status === 200) {
                fetchData();
                showToast('success', 'Berhasil Menambahkan Image');
                setModalIsOpen(false);
                setTitleAddValue('');
                setImageAddValue(null);
            }
        } catch (error) {
            console.log(error);
            showDialog('error', 'error', 'Internal Server Error');
        }
    }
    

    return (
        <AdminLayout>
            <div className="flex h-max lg:flex-1 w-full flex-col gap-5 pb-20">
                <div className="h-14 w-full flex items-center justify-end gap-2 border-b">
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
                        <div className="h-max w-full border rounded flex flex-col ">
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
                                {imageValue ? (
                                    imageValue.map((items, index) => (
                                        <div 
                                            key={index} 
                                                className='h-14 w-full border rounded flex items-center justify-between px-5 flex-shrink-0'
                                        >
                                            <div className='flex items-center gap-4'>
                                                <Image
                                                    src={items.image || ''}
                                                    alt={items.name}
                                                    className="object-cover h-12 w-12 rounded"
                                                    width={100}
                                                    height={400}
                                                />
                                                <p className="text-center text-xs">{items.name}</p>
                                            </div>
                                            <button
                                                onClick={() => handleDeleteImage(items.id)}
                                                className="bg-red-400 hover:bg-red-500 h-7 w-7 center-flex rounded text-white text-sm"
                                            >
                                                <FaTrash />
                                            </button>
                                        </div>
                                    ))
                                ) : (
                                    <div className="w-full h-[150px] center-flex ">
                                        <p className="">No image selected</p>
                                    </div>
                                )}
                            </div>
                        </div>
                        <div className="h-[600px] w-full">
                            <TextEditor 
                                placeholder="Description"
                                value={descValue}
                                onChange={(e) => setDescValue(e)}
                            />
                        </div>
                    </div>

                    <div className="lg:w-[300px] w-full h-max flex flex-col gap-4">
                        <InputField 
                            title="Title"
                            value={titleValue}
                            onChange={(e) => setTitleValue(e.target.value)}
                        />
                        <InputField 
                            title="Location"
                            value={locationValue}
                            onChange={(e) => setLocationValue(e.target.value)}
                        />
                        <InputField 
                            title="Departmen"
                            value={departmentValue}
                            onChange={(e) => setDepartmentValue(e.target.value)}
                        />
                        <InputField 
                            title="Date"
                            value={dateValue}
                            type="date"
                            onChange={(e) => setDateValue(e.target.value)}
                        />
                    </div>
                </div>


                {/* Modals add image */}
                <Modal 
                    isOpen={modalIsOpen}
                    onClose={() => setModalIsOpen(false)}
                    classname="h-max w-[90%] max-w-[500px] bg-white rounded py-5 px-5"
                >
                    <div className='w-full h-max flex flex-col gap-2'>
                        <h1 className='mb-4'>Tambah File Unduhan</h1>

                        <div className='flex flex-col gap-1'>
                            <p className='text-sm font-medium'>File</p>
                            <div className='h-12 center-flex w-full border rounded'>
                                <input 
                                    type="file" 
                                    className='text-sm'
                                    onChange={(e) => setImageAddValue(e.target.files?.[0] || null)}
                                />
                            </div>
                        </div>

                        <InputField 
                            title='Title'
                            value={titleAddValue}
                            onChange={(e) => setTitleAddValue(e.target.value)}
                        />

                        <div className='center-flex my-5'>
                            <button 
                                onClick={handleSubmitAddImage}
                                className='h-10 px-5 bg-blue-400 hover:bg-blue-500 rounded text-white text-sm'
                            >
                                Save
                            </button>
                        </div>
                    </div>
                </Modal>


            </div>
        </AdminLayout>
    )
}

export default Page