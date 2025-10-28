// PieChart.tsx
import React from "react";
import { Pie } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";

// ลงทะเบียน Chart.js elements
ChartJS.register(ArcElement, Tooltip, Legend);

interface PieChartProps {
  labels: string[];
  data: number[];
  colors?: string[];
}

const PieChart: React.FC<PieChartProps> = ({ labels, data, colors }) => {
  const chartData = {
    labels: labels,
    datasets: [
      {
        data: data,
        backgroundColor: colors || ["#4ade80", "#facc15", "#60a5fa", "#f87171"],
        borderWidth: 1,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
        Tooltip:{
            enabled: false,
        },
      legend: {
        position: "bottom" as const,
        labels: {
          usePointStyle: true,
          boxWidth: 12,
        },
      },
    },
  };

  return <Pie data={chartData} options={options} />;
};

export default PieChart;
