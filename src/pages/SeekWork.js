import React from 'react'
import Layout from '../components/layout';
import TopBar from '../components/topbar';
import SeekForms from '../components/seekForms';
import Footer from '../components/footer';

const SeekWork = () => (
    <Layout>
        <TopBar type={2} button={'hire'} />
        <SeekForms type={'work'} />
        <Footer />
    </Layout>
)

export default SeekWork;
