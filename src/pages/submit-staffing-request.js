import Head from "next/head";
import HeadingBanner from "@/components/headingBanner";
import Footer from "@/components/footer";
import StaffingForm from "@/components/staffingForm";

export default function SubmitStaffingRequest() {
  return (
    <>
      <Head>
        <title>Ensured Employment</title>
      </Head>

      <HeadingBanner title="Submit Staffing Request" />
      <StaffingForm />
      <Footer />
    </>
  )
}