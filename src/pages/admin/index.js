import DashboardItem from '@/components/admin/dashboardItem';
import withAuth from '@/hooks/withAuth';
import Head from 'next/head';
import Link from 'next/link';

function AdminDashboard() {
    return (
        <>
            <Head>
                <title>Admin Dashboard - Ensured Employment</title>
                <meta name="description" content="Learn More About Us and What We Do" />
                <meta property="og:title" content="Ensured Employment Services" />
                <meta property="og:description" content="Find the best staffing solutions for your business with Ensured Employment." />
                <meta property="og:image" content="/logo.png" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
            </Head>

            <div>
                <h1 className='text-center font-headings font-bold text-4xl m-16'>
                    Admin Dashboard
                </h1>

                <div className='max-w-3xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 justify-items-center'>
                    <DashboardItem action='Manage Articles' link='admin/manage-articles' description='Add and remove articles from the Recources page of the main website.' />
                    <div></div>
                    <DashboardItem action='Manage Resumes' link='#' description='Add and remove articles from the Recources page of the main website.' />
                    <DashboardItem action='Manage Staffing Requests' link='#' description='Add and remove articles from the Recources page of the main website.' />
                </div>
            </div>
        </>
    );
}

export default AdminDashboard;
