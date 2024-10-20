import Head from "next/head";
import Banner from "@/components/banner";
import ApplicationProcess from "@/components/applicationProcess";
import Contact from "@/components/contact";
import Footer from "@/components/footer";
import Industries from "@/components/Industries";

export default function Home() {
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

      <Banner />
      <Industries />
      <ApplicationProcess />
      <Contact />
      <Footer />
    </>
  )
}