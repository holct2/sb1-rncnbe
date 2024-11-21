import { Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler
} from 'chart.js';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler
);

const mockData = {
  labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
  datasets: [
    {
      label: 'Income',
      data: [3000, 3500, 3200, 3800, 3600, 4000],
      borderColor: '#4CAF50',
      backgroundColor: 'rgba(76, 175, 80, 0.1)',
      fill: true,
      tension: 0.4,
      borderWidth: 3,
    },
    {
      label: 'Expenses',
      data: [2500, 2800, 2600, 2900, 2700, 3000],
      borderColor: '#F44336',
      backgroundColor: 'rgba(244, 67, 54, 0.1)',
      fill: true,
      tension: 0.4,
      borderWidth: 3,
    },
  ],
};

const options = {
  responsive: true,
  maintainAspectRatio: false,
  plugins: {
    legend: {
      position: 'top' as const,
      labels: {
        padding: 25,
        font: {
          size: 16,
          weight: '500',
        },
        usePointStyle: true,
        pointStyle: 'circle',
      },
    },
    title: {
      display: true,
      text: 'Income vs Expenses',
      padding: 30,
      font: {
        size: 24,
        weight: 'bold',
      },
    },
  },
  scales: {
    y: {
      beginAtZero: true,
      grid: {
        drawBorder: false,
      },
      ticks: {
        padding: 15,
        font: {
          size: 14,
        },
      },
    },
    x: {
      grid: {
        drawBorder: false,
      },
      ticks: {
        padding: 15,
        font: {
          size: 14,
        },
      },
    },
  },
  elements: {
    point: {
      radius: 6,
      hoverRadius: 8,
    },
    line: {
      borderWidth: 3,
    },
  },
};

interface FinanceChartProps {
  isDark: boolean;
}

export function FinanceChart({ isDark }: FinanceChartProps) {
  return (
    <div className={`p-10 rounded-2xl ${isDark ? 'bg-gray-800' : 'bg-white'} shadow-xl`}>
      <div className="h-[800px]">
        <Line options={options} data={mockData} />
      </div>
    </div>
  );
}