'use client';

import AdminLayout from '@/components/layout/adminLayout'
import { FaPen, FaPlus, FaTrash } from 'react-icons/fa'
import { DataGrid, GridColDef, GridRenderCellParams } from "@mui/x-data-grid";
import { Paper } from "@mui/material";
import React, {  useEffect, useState } from 'react';
import { Progress } from '@/services/api';
import { useAuth } from '@/providers/userContext';
import { showDialog, showToast } from '@/utils/alertUtils';
import Modal from '@/components/element/user/modals/Modals';
import InputField from '@/components/element/InputField';
import Image from 'next/image';
import { GifSpinner } from '@/assets/gif';

interface DataProgress {
    id: number;
    realisasi_anggaran: string;
    evaluasi_anggaran: string;
    date: string;
}

const Page = () => {
    const [data, setData] = useState<DataProgress[] | null>(null);
    const { token } = useAuth();

    // State modals Add
    const [modalsAdd, setModalsAdd] = useState<boolean>(false);
    const [loadingAdd, setLoadingAdd] = useState<boolean>(false);
    const [addData, setAddData] = useState({
        realisasi_anggaran: '',
        evaluasi_anggaran: '',
        date: '',
    });

    // State modals Update
    const [modalUpdate, setModalUpdate] = useState<boolean>(false);
    const [loadingUpdate, setLoadingUpdate] = useState<boolean>(false);
    const [updateData, setUpdateData] = useState({
        id : '',
        realisasi_anggaran: '',
        evaluasi_anggaran: '',
        date: '',
    });
    
    const columns: GridColDef[] = [
        {
            field: 'realisasi_anggaran',
            headerName: 'Realisasi Anggaran',
            flex: 1,
        },
        {
            field: 'evaluasi_anggaran',
            headerName: 'Evaluasi Anggaran',
            flex: 1,
        },
        {
            field: 'date',
            headerName: 'Date',
            flex: 1,
        },
        {
            field: 'actions',
            headerName: 'Actions',
            flex: 1,
            renderCell: (params : GridRenderCellParams) => (
                <div className="flex gap-2 items-center h-full">
                    <button 
                        onClick={() => handleUpdate(params.row.id)}
                        className='h-8 w-8 rounded-lg bg-green-500 hover:bg-green-600 center-flex text-white'
                    >
                        <FaPen />
                    </button>
                    <button
                        onClick={() => handleDelete(params.row.id)}
                        className='h-8 w-8 rounded-lg bg-red-500 hover:bg-red-600 center-flex text-white'
                    >
                        <FaTrash />
                    </button>
                </div>
            ),
        }
    ]

    const fetchData = async () => {
        try {
            const response = await Progress.GetProgress();
            setData(response?.data.data || null);
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        fetchData();
    }, []); 

    const handleDelete = async (id : string) => {
        try {
            const response = await Progress.DeleteProgress(id, token);

            if (response.status === 200) {
                showToast('success', 'Berhasil menghapus data');
                fetchData();
            }
        } catch (error) {
            console.log(error);
        }
    }

    const handleAdd = async () => {
        if (!addData.evaluasi_anggaran.trim() || !addData.evaluasi_anggaran.trim() || !addData.date.trim()) {
            showDialog('error', 'Error', "Harus di isi semua!");
            return;
        }

        const formData = new FormData();

        formData.append('realisasi_anggaran', addData.realisasi_anggaran);
        formData.append('evaluasi_anggaran', addData.evaluasi_anggaran);
        formData.append('date', addData.date);

        setLoadingAdd(true);
        
        try {
            const response = await Progress.CreateProgress(token, formData);

            if (response.status === 200) {
                showToast('success', 'Berhasil menambahkan data');
                fetchData();
                setModalsAdd(false);
                setAddData({
                    realisasi_anggaran: '',
                    evaluasi_anggaran: '',
                    date: '',
                })
            }
        } catch (error) {
            console.log(error);
            showDialog('error', "error", 'Data pada bulan itu sudah ada')
        } finally {
            setLoadingAdd(false);
        }
    }

    const handleUpdate = async (id : string) => {
        setModalUpdate(true);

        try {
            const response = await Progress.GetProgress({ id : id });
            const data = response?.data.data[0];

            setUpdateData({
                id : data.id,
                realisasi_anggaran: data.realisasi_anggaran,
                evaluasi_anggaran: data.evaluasi_anggaran,
                date: data.date
            });

        } catch (error) {
            console.log(error)
        }
    }

    const fetchUpdate = async () => {
        if (!updateData.evaluasi_anggaran.trim() || !updateData.evaluasi_anggaran.trim() || !updateData.date.trim()) {
            showDialog('error', 'Error', "Harus di isi semua!");
            return;
        }

        const formData = new FormData();

        formData.append('realisasi_anggaran', updateData.realisasi_anggaran);
        formData.append('evaluasi_anggaran', updateData.evaluasi_anggaran);
        formData.append('date', updateData.date);

        setLoadingUpdate(true);

        try {
            const response = await Progress.UpdateProgress(updateData.id, token, formData);

            if (response.status ===  200) {
                showToast('success', 'Berhasil Update Data');
                fetchData();
                setUpdateData({
                    id : '',
                    realisasi_anggaran: '',
                    evaluasi_anggaran: '',
                    date: ''
                });
                setModalUpdate(false);
            }
        } catch (error) {
             console.log(error);
        } finally {
            setLoadingUpdate(false);
        }
    }


    return (
        <AdminLayout>
            <div className='w-full flex flex-1 flex-col gap-7'>
                <div className='h-12 w-full flex items-center justify-end'>
                    <button
                        onClick={() => setModalsAdd(true)}
                        className='h-12 text-white rounded shadow-md px-5 bg-blue-500 hover:bg-blue-700 center-flex gap-2'
                    >
                        <FaPlus />
                        Tambah Progress
                    </button>
                </div>
                <div className='flex flex-1 w-full'>
                    <Paper sx={{ height: '700px', width: '100%', overflowY: 'auto' }}>
                        <DataGrid
                            rows={data || undefined}
                            columns={columns}
                        />
                    </Paper>
                </div>

                <Modal
                    isOpen={modalsAdd}
                    onClose={() => setModalsAdd(false)}
                    classname='h-max w-[90%] max-w-[500px] bg-white rounded px-6 py-7'
                >
                    <div className='flex flex-col gap-7'>
                        <h1 className='font-medium'>Tambah Progress</h1>
                        <div className='flex flex-col gap-4'>
                            <InputField 
                                title='Realisasi Anggaran (max:100)'
                                type='number'
                                value={addData.realisasi_anggaran}
                                onChange={(e) => setAddData({...addData, realisasi_anggaran: e.target.value})}
                            />
                            <InputField 
                                title='Evaluasi Anggaran (max:100)'
                                type='number'
                                value={addData.evaluasi_anggaran}
                                onChange={(e) => setAddData({...addData, evaluasi_anggaran: e.target.value})}
                            />
                            <InputField 
                                title='Date'
                                type='date'
                                value={addData.date}
                                onChange={(e) => setAddData({...addData, date: e.target.value})}
                            />
                            <div className='h-max center-flex w-full mt-5'>
                                {loadingAdd ? (
                                    <div className='h-10 w-32 bg-blue-400 hover:bg-blue-500 text-white rounded center-flex'>
                                        <Image 
                                            src={GifSpinner}
                                            alt='Gif Spinnner'
                                            className='h-7 w-7'
                                        />
                                    </div>
                                ) : (
                                    <button
                                        onClick={handleAdd}
                                        className='h-10 w-32 bg-blue-400 hover:bg-blue-500 text-white rounded'
                                    >
                                        Save
                                    </button>
                                )}
                            </div>
                        </div>
                    </div>
                </Modal>

                {/* Modal Update */}
                <Modal
                    isOpen={modalUpdate}
                    onClose={() => setModalUpdate(false)}
                    classname='h-max w-[90%] max-w-[500px] bg-white rounded px-6 py-7'
                >
                    <div className='flex flex-col gap-7'>
                        <h1 className='font-medium'>Update Progress</h1>
                        <div className='flex flex-col gap-4'>
                            <InputField 
                                title='Realisasi Anggaran (max:100)'
                                type='number'
                                value={updateData.realisasi_anggaran}
                                onChange={(e) => setUpdateData({...updateData, realisasi_anggaran: e.target.value})}
                            />
                            <InputField 
                                title='Evaluasi Anggaran (max:100)'
                                type='number'
                                value={updateData.evaluasi_anggaran}
                                onChange={(e) => setUpdateData({...updateData, evaluasi_anggaran: e.target.value})}
                            />
                            <InputField 
                                title='Date'
                                type='date'
                                value={updateData.date}
                                onChange={(e) => setUpdateData({...updateData, date: e.target.value})}
                            />
                            <div className='h-max center-flex w-full mt-5'>
                                {loadingUpdate ? (
                                    <div className='h-10 w-32 bg-blue-400 hover:bg-blue-500 text-white rounded center-flex'>
                                        <Image 
                                            src={GifSpinner}
                                            alt='Gif Spinnner'
                                            className='h-7 w-7'
                                        />
                                    </div>
                                ) : (
                                    <button
                                        onClick={fetchUpdate}
                                        className='h-10 w-32 bg-blue-400 hover:bg-blue-500 text-white rounded'
                                    >
                                        Save
                                    </button>
                                )}
                            </div>
                        </div>
                    </div>
                </Modal>

            </div>
        </AdminLayout>
    )
}

export default Page;
