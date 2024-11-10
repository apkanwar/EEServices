import Head from "next/head";
import HeadingBanner from "@/components/headingBanner";
import ArticleEditor from "@/components/articleEditor";


export default function Home() {
    return (
        <>
            <Head>
                <title>Add Article - Ensured Employment</title>
                <meta name="description" content="Learn More About Us and What We Do" />
                <meta property="og:title" content="Ensured Employment Services" />
                <meta property="og:description" content="Find the best staffing solutions for your business with Ensured Employment." />
                <meta property="og:image" content="/logo.png" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
            </Head>

            <HeadingBanner title="Add Article" />
            <ArticleEditor />
        </>
    )
}
