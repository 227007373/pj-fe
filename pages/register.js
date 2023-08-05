import Head from 'next/head';
import Layout from '@/components/layout';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Register from '@/components/register';
export default function RegisterPage() {
    return (
        <>
            <Head>
                <title>Create Next App</title>
            </Head>
            <Layout>
                <Register />
            </Layout>
        </>
    );
}
