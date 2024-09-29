import Head from "next/head";
import HeadingBanner from "@/components/headingBanner";
import Footer from "@/components/footer";
import InfoSection from "@/components/infoSection";
import Contact from "@/components/contact";

const InfoOne = [
    {
        title: "Land Your Next Job",
        subtitle: "We're here to help",
        description: ["Looking for a new job – from submitting applications to following up – can be a challenge for anyone. At Ensured, we can alleviate this stress by matching your skills and experience with leading local employers. We regularly place general labourers, forklift operators, drivers, and various warehouse personnel."]
    },
    {
        title: "Join Our Team",
        subtitle: "Career opportunities",
        description: ["We are always looking for talented individuals to join our team. Whether you're a student or a professional seeking new challenges, we provide a dynamic environment for growth."]
    }
];

const InfoTwo = [
    {
        title: "Why Us",
        subtitle: "Trusted By Others",
        description: ["Applicants choose Ensured because of the outstanding reputation of our recruiters. With minimal turnover, many candidates have worked with the same recruiter for years–this continuity is vital to ensure we truly understand your evolving skills and interests."]
    }
];

const buttonInfo = {
    text: "Submit Resume",
    link: "/submit-resume"
};



export default function ForJobSeekers() {
    return (
        <>
            <Head>
                <title>Ensured Employment</title>
            </Head>

            <HeadingBanner title="Job Seekers" buttonInfo={buttonInfo} />
            <InfoSection
                info={InfoOne}
                imgSrc={["/stock/working.jpg"]}
                infoSide="left"
            />

            <InfoSection
                info={InfoTwo}
                imgSrc={["/stock/meeting.jpg"]}
                infoSide="right"
            />
            <Footer />
        </>
    )
}