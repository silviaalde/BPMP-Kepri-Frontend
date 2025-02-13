'use client';

import AdminLayout from '@/components/layout/adminLayout'
import { FaEye, FaPen, FaPlus, FaTrash } from 'react-icons/fa'
import { DataGrid, GridColDef, GridRenderCellParams } from "@mui/x-data-grid";
import { Paper } from "@mui/material";
import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { useAuth } from '@/providers/userContext';
import { showToast } from '@/utils/alertUtils';
import { Blog } from '@/services/api';
import { BlogDataProps } from '@/utils/interface/blog';


interface PageProps {
    type: 'Berita' | 'Artikel' | 'Opini'; // Accepts a type for the API endpoint
}

const PageBlog = ({ type }: PageProps) => {
    const [data, setData] = useState<BlogDataProps[]>([]);
    const { token } = useAuth();

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
                    <Link href={`/admin/berita/${params.row.id}`}>
                        <button className='h-8 w-8 rounded-lg bg-blue-500 hover:bg-blue-600 center-flex text-white'>
                            <FaEye />
                        </button>
                    </Link>
                    <Link href={`/admin/update-blog/${params.row.id}`}>
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
    const fetchData = async (endpoint: string) => {
        try {
            const response = await Blog.GetBlog({ category : endpoint });
            setData(response?.data.data);
        } catch (error) {
            console.log(error);
        }
    };

    // Handle the deletion of a blog post
    const handleDelete = async (id: string) => {
        try {
            const response = await Blog.DeleteBlog(id, token);


            if (response.status === 200) {
                setData([]);
                fetchData(type);
                showToast('success', 'Berhasil Menghapus berita');
            } else {
                console.error("Failed to delete blog");
            }
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        fetchData(type); // Fetch data based on the `type` prop
    }, [type]);

    return (
        <AdminLayout>
            <div className='w-full flex flex-1 flex-col gap-7'>
                <div className='h-12 w-full flex items-center justify-end'>
                    <Link href={`/admin/add-blog`}>
                        <button
                            className='h-12 text-white rounded shadow-md px-5 bg-blue-500 hover:bg-blue-700 center-flex gap-2'>
                            <FaPlus />
                            Tambah {type}
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
