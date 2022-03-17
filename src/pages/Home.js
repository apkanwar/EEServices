import React from 'react'
import Layout from '../components/layout';
import TopBar from '../components/topbar';
import Banner from '../components/banner';
import List from '../components/list';
import Footer from '../components/footer';

const HomePage = () => (
    <Layout>
        <TopBar type={1} />
        <Banner />
        <List />
        <Footer />
    </Layout>
)

export default HomePage;
