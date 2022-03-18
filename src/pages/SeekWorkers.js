import React from 'react'
import Layout from '../components/layout';
import TopBar from '../components/topbar';
import SeekForms from '../components/seekForms';
import Footer from '../components/footer';

const SeekWorkers = () => (
    <Layout>
        <TopBar type={2} button={'seek'} />
        <SeekForms type={'workers'} />
        <Footer />
    </Layout>
)

export default SeekWorkers;
