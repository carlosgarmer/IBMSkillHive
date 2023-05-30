import React, { useEffect, useRef } from 'react';
import Chart from 'chart.js/auto';

const MainDash = ({ progressPercentage, progressColor }) => {
  const chartRef = useRef(null);

  useEffect(() => {
    const remainingPercentage = 100 - progressPercentage;

    const chartData = {
      datasets: [
        {
          data: [progressPercentage, remainingPercentage],
          label: ['Progress'],
          backgroundColor: [progressColor, '#E9E9E9'],
        },
      ],

    };

    const chartOptions = {
      responsive: true,
      maintainAspectRatio: true,
      cutout: '70%',
    };

    const ctx = chartRef.current.getContext('2d');
    new Chart(ctx, {
      type: 'doughnut',
      data: chartData,
      options: chartOptions,
    });
  }, [progressPercentage, progressColor]);

  return (
    <div style={{ width: '100%', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <canvas ref={chartRef} style={{ maxWidth: '100%', maxHeight: '100%' }} />
    </div>
  );
};

export default MainDash;
