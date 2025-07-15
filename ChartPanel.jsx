import { Bar } from 'react-chartjs-2';
import { Chart, BarElement, CategoryScale, LinearScale } from 'chart.js';

Chart.register(BarElement, CategoryScale, LinearScale);

export default function ChartPanel({ repos }) {
  const data = {
    labels: repos.map(r => r.name),
    datasets: [
      {
        label: 'Stars',
        data: repos.map(r => r.stargazers_count),
        backgroundColor: 'rgba(59, 130, 246, 0.5)',
      },
    ],
  };

  return (
    <div className="my-4">
      <h2 className="text-xl font-semibold mb-2">Stars Overview</h2>
      <Bar data={data} />
    </div>
  );
}
