"use client";

import React, { useEffect, useRef } from "react";
import Chart from "chart.js/auto";

// Define types for props
interface PieChartProps {
    labels: string[];  // Labels for the pie chart
    data: number[];    // Data values for each section of the pie chart
    backgroundColor: string[];  // Background colors for each section
}

const PieChart: React.FC<PieChartProps> = ({ labels, data, backgroundColor }) => {
    const chartRef = useRef<HTMLCanvasElement | null>(null);
    const chartInstance = useRef<Chart | null>(null);  // Menyimpan instance chart

    useEffect(() => {
        if (chartRef.current) {
            // Jika chartInstance sudah ada, hancurkan chart sebelumnya
            if (chartInstance.current) {
                chartInstance.current.destroy();
            }

            // Membuat chart baru
            chartInstance.current = new Chart(chartRef.current, {
                type: "pie",
                data: {
                    labels: labels,  // Menggunakan props labels
                    datasets: [
                        {
                            data: data,  // Menggunakan props data
                            backgroundColor: backgroundColor,  // Menggunakan props backgroundColor
                        },
                    ],
                },
                options: {
                    responsive: true,
                    plugins: {
                        tooltip: {
                            callbacks: {
                                label: (tooltipItem) => `${tooltipItem.raw}%`,
                            },
                        },
                        legend: {
                            display: false,
                        },
                    },
                },
            });
        }

        // Cleanup: hancurkan chart ketika komponen unmount
        return () => {
            if (chartInstance.current) {
                chartInstance.current.destroy();
            }
        };
    }, [labels, data, backgroundColor]); // Dependency array, akan re-render jika props berubah

    return (
        <div className="flex items-center gap-8">
            <canvas ref={chartRef} className="w-[300px] h-[300px]" />
        </div>
    );
};

export default PieChart;
