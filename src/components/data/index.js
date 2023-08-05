import styles from './data.module.scss';
import { Line } from 'react-chartjs-2';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';
import { Chart } from 'react-chartjs-2';

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);
const Data = ({ data }) => {
    const [label, setLabel] = useState([]);
    const [labelObj, setLabelObj] = useState([]);
    useEffect(() => {
        axios({
            method: 'get',
            url: `${process.env.NEXT_PUBLIC_BASEURL}/allInvolvedYear`,
        }).then(function (res) {
            setLabel(res.data.years);
            setLabelObj(
                res.data.years.reduce((obj, year) => {
                    obj[year] = 0;
                    return obj;
                }, {})
            );
        });
    }, []);
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
    const options = {
        responsive: true,
        plugins: {
            legend: {
                position: 'top',
            },
            title: {
                display: true,
                text: 'Chart.js Line Chart',
            },
        },
    };
    console.log();
    const outputData = {
        label,
        // datasets: data.map((e,i)=>{
        //     return {
        //         label: e.incident,
        //         data: e.data
        //     }
        // })

        datasets: data.map((e, i) => {
            return {
                label: e.incident,
                data: { ...labelObj, ...e.data },
                borderColor: `hsl(${colors[i].hue}, 60%, 65%)`,
                backgroundColor: `hsl(${colors[i].hue}, 60%, 65%)`,
            };
        }),
    };
    return (
        <div className={styles.dataWrapper}>
            <div className='container'>
                <Line
                    options={options}
                    data={outputData}
                />
                <div className={styles.tips}>
                    <p>
                        The rise in hill walking accidents from 2015 to 2017, while other activities remained largely
                        consistent, indicating that additional factors may be contributing to this trend. Possible
                        explanations include the increasing popularity of hill walking, which has resulted in an
                        increase in novice participants, a lack of knowledge or preparedness, special environmental
                        problems during that time period, or enhanced reporting and data gathering techniques.
                        Understanding the fundamental reasons necessitates more investigation. It emphasizes the need of
                        authorities and participants addressing these variables, improving safety education, and
                        encouraging responsible participation in order to reduce the hazards connected with hill walking
                        and ensure the well-being of individuals engaging in mountain sports.
                    </p>
                </div>
            </div>
        </div>
    );
};
export default Data;
