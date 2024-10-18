import Head from "next/head";
import HeadingBanner from "@/components/headingBanner";
import Footer from "@/components/footer";
import StaffingForm from "@/components/staffingForm";

export default function SubmitStaffingRequest() {
  return (
    <>
      <Head>
        <title>Submit Staffing Request - Ensured Employment</title>
        <meta name="description" content="Let us know what your business is looking for. We'll make sure you get the employees that you need and are right for you." />
        <meta property="og:title" content="Ensured Employment Services" />
        <meta property="og:description" content="Find the best staffing solutions for your business with Ensured Employment." />
        <meta property="og:image" content="/logo.png" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <HeadingBanner title="Submit Staffing Request" />
      <StaffingForm />
      <Footer />
    </>
  )
}