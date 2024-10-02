import Head from "next/head";
import Footer from "@/components/footer";
import HeadingBanner from "@/components/headingBanner";
import Articles from "@/components/articles";

export default function Resources() {
    return (
        <>
            <Head>
                <title>Ensured Employment</title>
            </Head>

            <HeadingBanner title="Resources" />
            <Articles />
            <Footer />
        </>
    )
}