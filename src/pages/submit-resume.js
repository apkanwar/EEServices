import Head from "next/head";
import HeadingBanner from "@/components/headingBanner";
import Footer from "@/components/footer";
import EmployeeForm from "@/components/employeeForm";

export default function SubmitResume() {
  return (
    <>
      <Head>
        <title>Ensured Employment</title>
      </Head>

      <HeadingBanner title="Submit Resume" />
      <EmployeeForm />
      <Footer />
    </>
  )
}