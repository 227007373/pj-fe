import Head from 'next/head';
import Layout from '@/components/layout';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Data from '@/components/data';
export default function DataPage() {
    const [data, setData] = useState([]);
    // url: 'http://192.168.1.21:3001/api/groupByIncident',
    //url: 'http://192.168.1.21:3001/api/getAll',

    useEffect(() => {
        axios({
            method: 'get',
            url: `${process.env.NEXT_PUBLIC_BASEURL}/groupByYears`,
        }).then(function (res) {
            setData(res.data);
        });
    }, []);
    return (
        <>
            <Head>
                <title>Create Next App</title>
            </Head>
            <Layout>
                <Data data={data} />
            </Layout>
        </>
    );
}
