import styles from './barChart.module.scss';
import React from 'react';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';
import { Bar } from 'react-chartjs-2';
import { Chart } from 'react-chartjs-2';
ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);
const CusBarChart = ({ data }) => {
    const generateColors = (n) => {
        const primaryColors = ['blue', 'yellow', 'red'];
        const colors = [];

        for (let i = 0; i < n; i++) {
            const hue = i * (360 / n);
            const baseName = primaryColors[i % primaryColors.length];
            colors.push({ hue });
        }

        return colors;
    };

    const colors = generateColors(data.length);
    const labels = data.map((e, i) => {
        return e._id;
    });
    const chartData = {
        labels: labels,
        datasets: [
            {
                label: 'My First Dataset',
                data: data.map((e, i) => {
                    return e.total;
                }),
                backgroundColor: colors.map((e, i) => {
                    return `hsl(${e.hue}, 60%, 65%)`;
                }),
                borderColor: colors.map((e, i) => {
                    return `hsl(${e.hue}, 60%, 65%)`;
                }),
                borderWidth: 1,
            },
        ],
    };
    const options = {
        responsive: true,
        indexAxis: 'y',
        plugins: {
            legend: {
                display: false,
            },
        },
    };
    return (
        <div className='container'>
            <Bar
                data={chartData}
                options={options}
            />
            <div className={styles.tips}>
                <p>
                    Hill walking, mountain riding, and rock scrambling are all dangerous mountain hobbies. Because of
                    its popularity and possibility for inexperience among participants, hill walking has the greatest
                    accident risk. Mountain biking demands speed and technical difficulties, whereas rock scrambling
                    necessitates negotiating difficult terrain. Individuals must be aware of the hazards involved with
                    these activities and take appropriate measures. Proper training, use of safety equipment, and
                    awareness of personal boundaries are all essential. To guarantee their safety and enjoyment,
                    participants should approach all mountain activities carefully.
                </p>
            </div>
        </div>
    );
};
export default CusBarChart;
