import Head from 'next/head';
import Layout from '@/components/layout';
import axios from 'axios';
import Login from '@/components/login';
import React, { useEffect, useState } from 'react';
export default function LoginPage() {
    return (
        <>
            <Head>
                <title>Create Next App</title>
            </Head>
            <Layout>
                <Login />
            </Layout>
        </>
    );
}
