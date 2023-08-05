import Head from 'next/head';
import Layout from '@/components/layout';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Weather from '@/components/weather';
export default function WeatherPage() {
    const [data, setData] = useState([]);
    const [year, setYear] = useState('');
    const [filter, setFilter] = useState('');
    useEffect(() => {
        axios({
            method: 'post',
            url: `${process.env.NEXT_PUBLIC_BASEURL}/indident-weather`,
            data: {
                year: year,
                filter: filter,
            },
        }).then(function (res) {
            setData(res.data);
        });
    }, [year, filter]);
    return (
        <>
            <Head>
                <title>Create Next App</title>
            </Head>
            <Layout>
                <Weather
                    year={year}
                    setYear={setYear}
                    filter={filter}
                    setFilter={setFilter}
                    data={data}
                />
            </Layout>
        </>
    );
}
