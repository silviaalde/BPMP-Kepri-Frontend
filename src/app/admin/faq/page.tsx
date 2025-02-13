'use client';

import AdminLayout from '@/components/layout/adminLayout'
import { FaPen, FaPlus, FaTrash } from 'react-icons/fa'
import { DataGrid, GridColDef, GridRenderCellParams } from "@mui/x-data-grid";
import { Paper } from "@mui/material";
import React, {  useEffect, useState } from 'react';
import Link from 'next/link';
import { Faq } from '@/services/api';
import { useAuth } from '@/providers/userContext';
import { showToast } from '@/utils/alertUtils';

const Page = () => {
    const [data, setData] = useState([]);
    const { token } = useAuth();
    
    const columns: GridColDef[] = [
        {
            field: 'title',
            headerName: 'Title',
            flex: 1,
        },
        {
            field: 'category',
            headerName: 'Category',
            flex: 1,
        },
        {
            field: 'actions',
            headerName: 'Actions',
            flex: 1,
            renderCell: (params : GridRenderCellParams) => (
                <div className="flex gap-2 items-center h-full">
                    <Link href={`/admin/faq/update/${params.row.id}`}>
                        <button 
                            className='h-8 w-8 rounded-lg bg-green-500 hover:bg-green-600 center-flex text-white'
                        >
                            <FaPen />
                        </button>
                    </Link>
                    <button
                         onClick={() => handleDelete(params.row.id)}
                        className='h-8 w-8 rounded-lg bg-red-500 hover:bg-red-600 center-flex text-white'>
                        <FaTrash />
                    </button>
                </div>
            ),
        }
    ]

    const fetchData = async () => {
        try {
            const response = await Faq.GetFaq();
            setData(response?.data.data);
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        fetchData();
    }, []); 

    const handleDelete = async (id : string) => {
        try {
            const response = await Faq.DeleteFaq(id, token);

            if (response.status === 200) {
                showToast('success', 'Berhasil menghapus data');
                fetchData();
            }
        } catch (error) {
            console.log(error);
        }
    }



    return (
        <AdminLayout>
            <div className='w-full flex flex-1 flex-col gap-7'>
                <div className='h-12 w-full flex items-center justify-end'>
                    <Link href="/admin/faq/add">
                        <button
                            className='h-12 text-white rounded shadow-md px-5 bg-blue-500 hover:bg-blue-700 center-flex gap-2'>
                            <FaPlus />
                            Tambah Faq
                        </button>
                    </Link>
                </div>
                <div className='flex flex-1 w-full'>
                    <Paper sx={{ height: '700px', width: '100%', overflowY: 'auto' }}>
                        <DataGrid
                            rows={data}
                            columns={columns}
                        />
                    </Paper>
                </div>
            </div>


        </AdminLayout>
    )
}

export default Page;
