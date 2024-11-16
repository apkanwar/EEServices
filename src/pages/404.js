import Head from "next/head";
import Footer from "@/components/footer";
import HeadingBanner from "@/components/headingBanner";
import Image from "next/image";

export default function PageNotFound() {
    return (
        <>
            <Head>
                <title>Ensured Employment Services</title>
                <meta name="description" content="Find the best staffing solutions for your business with Ensured Employment Services. We connect qualified candidates to meet your company's unique needs." />
                <meta property="og:title" content="Ensured Employment Services" />
                <meta property="og:description" content="Find the best staffing solutions for your business with Ensured Employment Services." />
                <meta property="og:image" content="/logo.png" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
            </Head>

            <div className="h-screen w-full">
                <HeadingBanner title="" />
                <div className="flex flex-col items-center gap-8">
                    <Image src={'/lostIcon.webp'} width={300} height={300} alt="Cross eyed emoji used for going to unknown page" />
                    <div className="lg:text-4xl text-3xl font-bold font-dText uppercase">Are You Lost?</div>
                    <div className="lg:text-3xl text-2xl font-bold font-dText uppercase">Check out our links above</div>
                </div>
            </div>

        </>
    )
}