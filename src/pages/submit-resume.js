import Head from "next/head";
import HeadingBanner from "@/components/headingBanner";
import Footer from "@/components/footer";
import EmployeeForm from "@/components/employeeForm";

export default function SubmitResume() {
  return (
    <>
      <Head>
        <title>Submit Resume - Ensured Employment</title>
        <meta name="description" content="Get in Touch with us and we'll be sure to reach out to help you get started." />
        <meta property="og:title" content="Ensured Employment Services" />
        <meta property="og:description" content="Find the best staffing solutions for your business with Ensured Employment." />
        <meta property="og:image" content="/logo.png" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <HeadingBanner title="Submit Resume" />
      <EmployeeForm />
      <Footer />
    </>
  )
}