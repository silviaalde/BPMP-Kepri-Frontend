'use client';

import AdminLayout from '@/components/layout/adminLayout'
import { FaEye, FaPen, FaPlus, FaTrash } from 'react-icons/fa'
import { DataGrid, GridColDef, GridRenderCellParams } from "@mui/x-data-grid";
import { Paper } from "@mui/material";
import React, { useCallback, useEffect, useState } from 'react';
import Link from 'next/link';
import { useAuth } from '@/providers/userContext';
import { showToast } from '@/utils/alertUtils';
import { Blog } from '@/services/api';
import { BlogDataProps } from '@/utils/interface/blog';
import { useParams } from 'next/navigation';

const PageBlog = () => {
    const [data, setData] = useState<BlogDataProps[]>([]);
    const { token } = useAuth();
    const params = useParams();
    const { category } = params;

    const columns: GridColDef[] = [
        {
            field: 'name',
            headerName: 'Name',
            flex: 1,
        },
        {
            field: 'title',
            headerName: 'Title',
            flex: 1,
        },
        {
            field: 'date',
            headerName: 'Date',
            flex: 1,
        },
        {
            field: 'status',
            headerName: 'Status',
            flex: 1,
        },
        {
            field: 'actions',
            headerName: 'Actions',
            width: 200,
            renderCell: (params: GridRenderCellParams) => (
                <div className="flex gap-2 items-center h-full">
                    <Link href={`/admin/blog/by/${params.row.id}`}>
                        <button className='h-8 w-8 rounded-lg bg-blue-500 hover:bg-blue-600 center-flex text-white'>
                            <FaEye />
                        </button>
                    </Link>
                    <Link href={`/admin/blog/update/${params.row.id}`}>
                        <button className='h-8 w-8 rounded-lg bg-green-500 hover:bg-green-600 center-flex text-white'>
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
    ];

    // Fetch the data from the API with dynamic endpoint
    const fetchData = useCallback(async () => {
        try {
            const response = await Blog.GetBlog({ category : category });
            setData(response?.data.data);
        } catch (error) {
            console.log(error);
        }
    }, [category]); // Depend on `category` so that the function updates when `category` changes.

    useEffect(() => {
        fetchData(); // Fetch data based on the `category` prop
    }, [category, fetchData]); 

    // Handle the deletion of a blog post
    const handleDelete = async (id: string) => {
        try {
            const response = await Blog.DeleteBlog(id, token);


            if (response.status === 200) {
                setData([]);
                fetchData();
                showToast('success', 'Berhasil Menghapus berita');
            } else {
                console.error("Failed to delete blog");
            }
        } catch (error) {
            console.log(error);
        }
    };


    return (
        <AdminLayout>
            <div className='w-full flex flex-1 flex-col gap-7'>
                <div className='h-12 w-full flex items-center justify-end'>
                    <Link href={`/admin/blog/add`}>
                        <button
                            className='h-12 text-white rounded shadow-md px-5 bg-blue-500 hover:bg-blue-700 center-flex gap-2'>
                            <FaPlus />
                            Tambah {category}
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

export default PageBlog;
