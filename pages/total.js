import Head from 'next/head';
import Layout from '@/components/layout';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import CusBarChart from '@/components/barChart';
export default function TotalPage() {
    const [data, setData] = useState([]);
    useEffect(() => {
        axios({
            method: 'get',
            url: `${process.env.NEXT_PUBLIC_BASEURL}/groupByIncident`,
        }).then(function (res) {
            setData(res.data);
            console.log(res);
        });
    }, []);
    return (
        <>
            <Head>
                <title>Create Next App</title>
            </Head>
            <Layout>
                <CusBarChart data={data} />
            </Layout>
        </>
    );
}
