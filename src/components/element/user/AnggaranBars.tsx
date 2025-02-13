"use client";

import { Progress } from "@/services/api";
import { useEffect, useState } from "react";
import ProgressBar from "./ProgressBar";

interface AnggaranProps {
    realisasi_anggaran: number | string | undefined;
    evaluasi_anggaran: number | string | undefined;
    date: string | number;
}

const AnggaranBars = () => {
    const [data, setData] = useState<AnggaranProps | null>(null);

    const fetchData = async () => {
        try {
            // Ambil bulan dan tahun saat ini
            const currentDate = new Date();
            const currentMonth = (currentDate.getMonth() + 1).toString().padStart(2, '0'); // Bulan dalam format "01", "02", ..., "12"
            const currentYear = currentDate.getFullYear().toString(); // Tahun dalam format "2024"

            // Kirim permintaan ke API dengan bulan dan tahun saat ini
            const response = await Progress.GetProgress({ month: currentMonth, year: currentYear });
            setData(response?.data.data[0] || null);
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        fetchData();
    }, []);

    // Fungsi untuk memformat tanggal
    const formatDate = (dateString: string | number | undefined): string => {
        if (!dateString) return '';

        const date = new Date(dateString);
        const monthNames = [
            "Januari", "Februari", "Maret", "April", "Mei", "Juni",
            "Juli", "Agustus", "September", "Oktober", "November", "Desember"
        ];

        const month = monthNames[date.getMonth()]; // Ambil nama bulan
        const year = date.getFullYear();          // Ambil tahun

        return `${month} ${year}`;
    };

    return (
        <div className="h-max flex flex-col gap-3">
            <div className="flex flex-col w-full gap-3">
                <p>Realisasi Anggaran Tahun Berjalan</p>
                <ProgressBar
                    title={formatDate(data?.date)} // Ubah format tanggal di sini
                    percentage={data?.realisasi_anggaran}
                />
            </div>
            <div className="flex flex-col w-full gap-3">
                <p>Evaluasi Kinerja Anggaran Tahun Berjalan</p>
                <ProgressBar
                    title={formatDate(data?.date)} // Ubah format tanggal di sini
                    percentage={data?.evaluasi_anggaran}
                />
            </div>
        </div>
    );
};

export default AnggaranBars;
