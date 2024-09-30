import Head from "next/head";
import Contact from "@/components/contact";
import Footer from "@/components/footer";
import HeadingBanner from "@/components/headingBanner";

export default function Home() {
    return (
        <>
            <Head>
                <title>Ensured Employment</title>
            </Head>

            <HeadingBanner title="Resources" />
            <Contact />
            <Footer />

        </>
    )
}