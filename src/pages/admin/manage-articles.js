import Head from "next/head";
import HeadingBanner from "@/components/headingBanner";
import withAuth from '@/hooks/withAuth';
import ArticleList from "@/components/articleList";

function ManageArticles() {
    const buttonInfo = {
        text: "Add Article",
        link: "/admin/add-article"
    };

    return (
        <>
            <Head>
                <title>Manage Article - Ensured Employment</title>
                <meta name="description" content="Learn More About Us and What We Do" />
                <meta property="og:title" content="Ensured Employment Services" />
                <meta property="og:description" content="Find the best staffing solutions for your business with Ensured Employment." />
                <meta property="og:image" content="/logo.png" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
            </Head>

            <HeadingBanner title="Manage Articles" buttonInfo={buttonInfo} />
            <ArticleList />
        </>
    )
}

export default withAuth(ManageArticles);
