import Head from "next/head";
import HeadingBanner from "@/components/headingBanner";
import withAuth from '@/hooks/withAuth';
import StaffingList from "@/components/staffingList";

function ManageStaffingRequests() {
    return (
        <>
            <Head>
                <title>Manage Staffing - Ensured Employment</title>
                <meta name="description" content="Learn More About Us and What We Do" />
                <meta property="og:title" content="Ensured Employment Services" />
                <meta property="og:description" content="Find the best staffing solutions for your business with Ensured Employment." />
                <meta property="og:image" content="/logo.png" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
            </Head>

            <HeadingBanner title="Staffing Submissions" />
            <StaffingList  />
        </>
    )
}

export default withAuth(ManageStaffingRequests);
