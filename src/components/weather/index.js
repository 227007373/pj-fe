import React, { useEffect, useState } from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import styles from './weather.module.scss';

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
import { Line } from 'react-chartjs-2';
ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);
const Weather = ({ year, setYear, filter, setFilter, data }) => {
    const chartData = {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
        datasets: [
            {
                label: 'Amount',
                data: data.map((d) => d.Amount),
                borderColor: 'rgba(255, 99, 132, 1)',
                backgroundColor: 'rgba(255, 99, 132, 0.2)',
                yAxisID: 'y-axis-1',
            },
            {
                label:
                    filter == 'HighestTemperature_Celsius'
                        ? 'Highest Temperature( celsius )'
                        : filter == 'LowestTemperature_Celsius'
                        ? 'Lowest Temperature( celsius )'
                        : filter == 'WettestDay_Mm'
                        ? 'Wettest Day( Mm )'
                        : filter == 'StrongestWind_mph'
                        ? 'Strongest Wind Day( Mph )'
                        : '',

                data: data.map((d) => d[filter]),
                borderColor: 'rgba(54, 162, 235, 1)',
                backgroundColor: 'rgba(54, 162, 235, 0.2)',
                yAxisID: 'y-axis-2',
            },
        ],
    };

    const chartOptions = {
        responsive: true,
        plugins: {
            title: {
                display: true,
                text: '',
            },
        },
        scales: {
            yAxes: [
                {
                    id: 'y-axis-1',
                    type: 'linear',
                    position: 'left',
                    ticks: {
                        beginAtZero: true,
                        color: 'red',
                    },
                    scaleLabel: {
                        display: true,
                        labelString: 'Amount',
                    },
                },
                {
                    id: 'y-axis-2',
                    type: 'linear',
                    position: 'right',
                    ticks: {
                        beginAtZero: true,
                        color: 'red',
                    },
                    scaleLabel: {
                        display: true,
                        labelString: 'Highest Temperature (Celsius)',
                    },
                },
            ],
        },
    };
    useEffect(() => {
        console.log(filter);
    }, [filter]);
    return (
        <div>
            <div className='container'>
                <div className={styles.nav}>
                    <Box sx={{ minWidth: 120 }}>
                        <FormControl fullWidth>
                            <InputLabel id='demo-simple-select-label'>Year</InputLabel>
                            <Select
                                labelId='demo-simple-select-label'
                                id='demo-simple-select'
                                value={year}
                                label='Year'
                                onChange={(event) => {
                                    setYear(event.target.value);
                                }}
                            >
                                <MenuItem value={2016}>2016</MenuItem>
                                <MenuItem value={2017}>2017</MenuItem>
                            </Select>
                        </FormControl>
                    </Box>
                    <Box sx={{ minWidth: 120 }}>
                        <FormControl fullWidth>
                            <InputLabel id='demo-simple-select-label'>Filter</InputLabel>
                            <Select
                                labelId='demo-simple-select-label'
                                id='demo-simple-select'
                                value={filter}
                                label='Filter'
                                onChange={(event) => {
                                    console.log('event.target.value', event.target.value);
                                    setFilter(event.target.value);
                                }}
                            >
                                <MenuItem value={'HighestTemperature_Celsius'}>Highest Temperature</MenuItem>
                                <MenuItem value={'LowestTemperature_Celsius'}>Lowest Temperature</MenuItem>
                                <MenuItem value={'WettestDay_Mm'}>Wettest Day</MenuItem>
                                <MenuItem value={'StrongestWind_mph'}>Strongest Wind Day</MenuItem>
                            </Select>
                        </FormControl>
                    </Box>
                </div>
                <Line
                    data={chartData}
                    options={chartOptions}
                />
                <div>
                    {year?.toString().replaceAll(' ', '') != '' ? (
                        filter == 'HighestTemperature_Celsius' ? (
                            <div className={styles.tips}>
                                <p>
                                    Higher temperatures, as seen in the graph, are connected with an increased
                                    likelihood of mountain accidents.
                                </p>
                                <p>In numerous ways, high temperatures might lead to mountain accidents:</p>
                                <p>
                                    High temperatures can cause heat exhaustion and heatstroke, resulting in weariness
                                    and impaired judgment.
                                </p>
                                <p>
                                    Physical stress: Excessive heat can cause weariness, muscular cramps, and decreased
                                    physical performance, increasing the likelihood of an accident.
                                </p>
                                <p>
                                    Extreme heat can impair mental health and decision-making abilities, potentially
                                    leading to poor judgment and accidents.
                                </p>
                                <p>
                                    To avoid mishaps, keep an eye on the weather, remain hydrated, dress correctly, and
                                    be aware of the hazards connected with high temperatures. In hilly areas, proper
                                    training, equipment, and readiness are important.
                                </p>
                            </div>
                        ) : filter == 'LowestTemperature_Celsius' ? (
                            <div className={styles.tips}>
                                <p>
                                    Low temperatures in hilly areas enhance the probability of an accident because of:
                                </p>
                                <p>
                                    Frostbite and hypothermia: Excessive cold exposure can cause tissue freezing
                                    (frostbite) and dangerously low body temperature (hypothermia), both of which impair
                                    physical and mental capacities.
                                </p>
                                <p>
                                    Reduced mobility and dexterity: Cold temperatures can restrict movement and impair
                                    muscle function, making it difficult to manage equipment and negotiate difficult
                                    terrain.
                                </p>
                                <p>
                                    Extreme cold can cause worry, anxiety, and decreased attention, impairing
                                    decision-making abilities and increasing the likelihood of accidents.
                                </p>
                                <p>
                                    It is critical to utilize correct cold-weather apparel, maintain dependable
                                    equipment, and acquire enough training to successfully reduce these dangers in low
                                    temperatures.
                                </p>
                            </div>
                        ) : filter == 'WettestDay_Mm' ? (
                            <div className={styles.tips}>
                                <p>
                                    According to the charts, there are slightly relationship between the humidity and
                                    the mountain accident.
                                </p>
                                <p>
                                    Days with high humidity in hilly places enhance the probability of accidents because
                                    of:
                                </p>
                                <p>
                                    High humidity exacerbates heat stress, leading to heat exhaustion and heatstroke,
                                    which can impair physical capacities and decision-making.
                                </p>
                                <p>
                                    Dehydration and reduced evaporative cooling: Humidity inhibits sweat evaporation,
                                    making it more difficult for the body to cool down and raising the risk of
                                    dehydration.
                                </p>
                                <p>
                                    High humidity is typically accompanied by fog, mist, or haze, limiting vision and
                                    making it harder to move safely or recognize risks.
                                </p>
                                <p>
                                    Slippery terrain and poor traction: High humidity generates damp or wet surfaces,
                                    increasing the likelihood of slips, falls, and accidents owing to a lack of grip.
                                </p>
                                <p>
                                    High humidity can induce pain, irritation, and decreased focus, impairing mental
                                    well-being and raising stress.
                                </p>
                            </div>
                        ) : filter == 'StrongestWind_mph' ? (
                            <div className={styles.tips}>
                                <p>
                                    Although the charts seems showing us that the wind is not really relevant with the
                                    accidents, we still need to be aware of any kind of weather.
                                </p>
                                <p>
                                    The link between high wind days and mountain accidents might have serious
                                    consequences. Strong winds can produce dangerous circumstances in hilly areas,
                                    increasing the likelihood and severity of accidents. The following is a description
                                    of the relationship:
                                </p>
                                <p>
                                    Reduced stability: High winds can have an impact on stability, particularly on
                                    exposed peaks, cliffs, or narrow pathways. Wind can make it difficult to keep
                                    balance and increase the danger of slips, falls, or being blown off course.
                                </p>
                                <p>
                                    Strong winds can move rocks, tree branches, and other debris, increasing the risk of
                                    falling items. These things can inflict injuries or obstruct routes, increasing the
                                    likelihood of an accident.
                                </p>
                                <p>
                                    Wind chill: Wind may dramatically reduce the effective temperature, resulting in
                                    potentially deadly wind chill. Wind chill can cause hypothermia or frostbite,
                                    impairing physical and cognitive capacities and raising the chance of an accident.
                                </p>
                                <p>
                                    High winds can create worry, tension, and a loss of focus, impacting climbers'
                                    mental health and decision-making ability.
                                </p>
                                <p>
                                    Climbers should take the following steps to reduce the dangers associated with high
                                    windy conditions:
                                </p>
                                <p>
                                    Check the weather forecast and avoid climbing on windy days. Dress warmly, with
                                    windproof layers and secure headgear. Use the right equipment and make sure
                                    everything is firmly attached. Keep an eye out for falling items and use caution in
                                    exposed locations.If you get trapped in heavy winds, seek cover and wait for
                                    circumstances to improve before proceeding.
                                </p>
                            </div>
                        ) : (
                            ''
                        )
                    ) : (
                        ''
                    )}
                </div>
            </div>
        </div>
    );
};
export default Weather;
