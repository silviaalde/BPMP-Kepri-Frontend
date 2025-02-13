"use client";

import React, { useState, useEffect } from 'react';
import { FaArrowUp } from 'react-icons/fa';

const ButtonToTop = () => {
  // State untuk mendeteksi scroll
    const [isVisible, setIsVisible] = useState(false);

  // Fungsi untuk menangani scroll
    const handleScroll = () => {
        // Mengecek apakah scroll sudah lebih dari 300px
        if (window.scrollY > 300) {
        setIsVisible(true); // Menampilkan tombol
        } else {
        setIsVisible(false); // Menyembunyikan tombol
        }
    };

  // Menambahkan event listener untuk scroll
    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        
        // Membersihkan event listener ketika komponen di-unmount
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Fungsi untuk scroll ke atas
    const scrollToTop = () => {
        window.scrollTo({
        top: 0,
        behavior: 'smooth', // Menambahkan efek scroll halus
        });
    };

    return (
        <div
            className={`h-12 w-12 bg-blue-light hover:opacity-25 rounded center-flex fixed bottom-5 left-5 cursor-pointer z-20 text-white transition-opacity duration-300 ${isVisible ? 'opacity-100' : 'opacity-0'}`}
            onClick={scrollToTop} // Scroll ke atas ketika diklik
        >
            <FaArrowUp />
        </div>
    );
};

export default ButtonToTop
