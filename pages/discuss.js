import Head from 'next/head';
import Layout from '@/components/layout';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Discuss from '@/components/discuss';
export default function DiscussPage() {
    const [data, setData] = useState([]);
    // url: 'http://192.168.1.21:3001/api/groupByIncident',
    //url: 'http://192.168.1.21:3001/api/getAll',

    useEffect(() => {
        axios({
            method: 'get',
            url: `${process.env.NEXT_PUBLIC_BASEURL}/comment/getAll`,
        })
            .then(function (res) {
                setData(res.data);
            })
            .catch((err) => {
                console.log(err);
            });
    }, []);
    return (
        <>
            <Head>
                <title>Create Next App</title>
            </Head>
            <Layout>
                <Discuss
                    data={data}
                    setData={setData}
                />
            </Layout>
        </>
    );
}
