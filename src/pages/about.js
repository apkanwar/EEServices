import Head from "next/head";
import HeadingBanner from "@/components/headingBanner";
import StatsRow from "@/components/statsRow";
import AboutDetails from "@/components/aboutDetails";
import Contact from "@/components/contact";
import Footer from "@/components/footer";

export default function Home() {
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

      <HeadingBanner title="About Us" />
      <StatsRow />
      <AboutDetails />
      <Contact />
      <Footer />
    </>
  )
}
