"use client";

import InputField from '@/components/element/InputField';
import AdminLayout from '@/components/layout/adminLayout';
import React, { useCallback, useEffect, useState } from 'react';
import { useAuth } from '@/providers/userContext';
import { showDialog, showToast } from '@/utils/alertUtils';
import { useParams } from "next/navigation";
import { storageUrl, Webinar } from '@/services/api';
import Image from 'next/image';
import { GifSpinner } from '@/assets/gif';
import FileUploader from '@/components/element/fileUploader';
import { WebinarType } from '@/data/data-webinar';


const Page = () => {
    const params = useParams();
    const { id  } = params;
    const [titleValue, setTitleValue] = useState<string>('');
    const [description, setDescription] = useState<string>('');
    const [url, setUrl] = useState<string>('');
    const [location, setLocation] = useState<string>(''); 
    const [date, setDate] = useState<string>(''); 
    const [timeStart, setTimeStart] = useState<string>("");
    const [timeEnd, setTimeEnd] = useState<string>("");
    const [imageFile, setImageFile] = useState< null |string | File>(null);
    const [loading, setLoading] = useState<boolean>(false);
    const { token } = useAuth();

    const fetchData = useCallback(async () => {
        try {
            const response = await Webinar.getWebinar({ id : typeof id === "string" ?id : id?.[0]??"" });
            const data = response.data;

            if (data?.data[0]) {
                const res = data?.data[0];
                setTitleValue(res.title);
                setLocation(res.location);
                setDate(res.date);
                setDescription(res.description);
                setUrl(res.url);
                setTimeStart(res.time_start.substring(0,5));
                setTimeEnd(res.time_end.substring(0,5));
                setImageFile(storageUrl + "/storage/content/webinar/" + res.image);
            }
        } catch (error) {
            console.log(error);
        }
    }, [id]); // Dependensi hanya id yang berubah

    useEffect(() => {
        fetchData();
    }, [fetchData])



    const handleSubmit = async () => {
         // Membuat objek FormData untuk menambahkan data
        const formData:WebinarType = {};

        // Menambahkan data non-file ke dalam FormData
        if(typeof id === "string") formData['id'] =  id;
        formData['title'] = titleValue;
        formData['location']  = location;
        formData['url']  = url;
        formData['description']  = description;
        formData['date'] = date ;
        formData['time_start'] = timeStart;
        formData['time_end'] = timeEnd;
        if(typeof imageFile !== "string"){
            const parser = new FileReader();
            if(imageFile)parser.readAsDataURL(imageFile);
            parser.onload =  async()=>{
                formData['image'] = parser.result as string ;
                setLoading(true);

                try {
                    const response = await Webinar.updateWebinar(token??"", formData);

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
            
            return;
        }
        
        
        setLoading(true);

        try {
            const response = await Webinar.updateWebinar(token??"", formData);

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
