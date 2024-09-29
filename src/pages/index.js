import Head from "next/head";
import Banner from "@/components/banner";
import ApplicationProcess from "@/components/applicationProcess";
import Contact from "@/components/contact";
import Footer from "@/components/footer";
import IndustrySelector from "@/components/industrySelector";

export default function Home() {
  return (
    <>
      <Head>
        <title>Ensured Employment</title>
      </Head>

      <Banner />
      <IndustrySelector />
      <ApplicationProcess />
      <Contact />
      <Footer />
    </>
  )
}