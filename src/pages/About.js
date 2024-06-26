import React from 'react'
import Layout from '../components/layout';
import TopBar from '../components/topbar';
import AboutContent from '../components/aboutContent';
import Footer from '../components/footer';

const AboutPage = () => (
    <Layout>
        <TopBar type={2} button={'seek'} />
        <AboutContent />
        <Footer />
    </Layout>
)

export default AboutPage;
