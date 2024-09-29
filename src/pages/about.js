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
      </Head>

      <HeadingBanner title="About Us" />
      <StatsRow />
      <AboutDetails />
      <Contact />
      <Footer />
    </>
  )
}
