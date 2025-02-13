import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from "chart.js";
import { Bar } from "react-chartjs-2";
import { ChartOptions, TooltipItem } from "chart.js";

// Register the necessary components from Chart.js
ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

// Tipe untuk setiap item data yang akan diterima
interface BarChartData {
  title: string;
  color: string;
  value: number;
}

interface BarsChartProps {
  data: BarChartData[]; // Data chart berupa array objek
}

const BarsChart: React.FC<BarsChartProps> = ({ data }) => {
  // Menyiapkan data chart berdasarkan props
  const chartData = {
    labels: data.map(item => item.title), // Mengambil judul untuk label
    datasets: [
      {
        data: data.map(item => item.value), // Mengambil value untuk data bar
        backgroundColor: data.map(item => item.color), // Menggunakan warna sesuai dengan masing-masing item
        borderWidth: 1,
        barThickness: 20,
      },
    ],
  };

  // Opsi chart
  const options: ChartOptions<'bar'> = {
    indexAxis: "y", // Memastikan bahwa sumbu X adalah horizontal
    responsive: true,
    plugins: {
      tooltip: {
        callbacks: {
          label: (tooltipItem: TooltipItem<'bar'>) => {
            const value = tooltipItem.raw as number;
            return `Persentase: ${value}%`;
          },
        },
      },
    },
    scales: {
      x: {
        min: 0,
        max: 100,
        ticks: {
          stepSize: 20,
        },
      },
      y: {
        beginAtZero: true,
        grid: {
          display: false, // Menonaktifkan grid di sumbu y
        },
        ticks: {
          display: true, // Menampilkan angka/label di sumbu y
        },
      },
    },
  };

  return <Bar data={chartData} options={options} />;
};

export default BarsChart;
