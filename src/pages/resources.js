import Head from "next/head";
import Footer from "@/components/footer";
import HeadingBanner from "@/components/headingBanner";
import Articles from "@/components/articles";

export default function Resources() {
    return (
        <>
            <Head>
                <title>Ensured Employment</title>
                <meta name="description" content="Find the best staffing solutions for your business with Ensured Employment. We connect qualified candidates to meet your company's unique needs." />
                <meta property="og:title" content="Ensured Employment Services" />
                <meta property="og:description" content="Find the best staffing solutions for your business with Ensured Employment." />
                <meta property="og:image" content="/logo.png" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
            </Head>

            <HeadingBanner title="Resources" />
            <Articles />
            <Footer />
        </>
    )
}