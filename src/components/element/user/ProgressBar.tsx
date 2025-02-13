"use client"

import React, { useEffect, useState } from 'react';

interface ProgressBarProps {
  percentage: number | string | undefined; // Terima angka atau string
  title: string | number | undefined;      // Judul atau nama periode
}

const ProgressBar: React.FC<ProgressBarProps> = ({ percentage = 0, title = '' }) => {
  const [progress, setProgress] = useState(0);

  // To animate the progress change
  useEffect(() => {
    const timeout = setTimeout(() => {
      setProgress(Number(percentage) || 0); // Konversi ke number, fallback ke 0
    }, 100);

    return () => clearTimeout(timeout);
  }, [percentage]);

  return (
    <div className="h-8 w-full bg-yellow-400 rounded flex items-center">
      <div
        style={{
          width: `${progress}%`, // Dynamically set width with progress state
          transition: 'width 1s ease-out', // Animation for smooth transition
        }}
        className="bg-blue-secondary h-full rounded flex items-center justify-between px-5 text-white text-[10px] font-medium"
      >
        <p>{title}</p>
        <p>{typeof progress === 'number' ? progress.toFixed(2) : '0.00'}%</p>
      </div>
    </div>
  );
}

export default ProgressBar;
