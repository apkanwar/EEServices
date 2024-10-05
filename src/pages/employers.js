import Head from "next/head";
import HeadingBanner from "@/components/headingBanner";
import Footer from "@/components/footer";
import InfoSection from "@/components/infoSection";

const InfoOne = [
    {
        title: "Building Your Staffing Plan",
        subtitle: "Getting to Know Your Needs",
        description: ["To ensure your staffing plan is serviced responsibly, our specialists will build a personnel profile to understand:"],
        listItems: [
            'The type of work required',
            'Volume of work required',
            'Regularity of the assignment (part-time or full-time)',
            'Length of the assignment (temporary or long-term)',
            'Consideration of special skill sets or certifications'
        ]
    }
];

const InfoTwo = [
    {
        title: "Ensuring your Needs",
        subtitle: "Experience the Difference",
        description: ["Our clients benefit from our ability to connect to a diverse group of experienced, qualified and dedicated applicants. Drawing from this exceptional network enables us to select the highest caliber candidates to fit your business and culture."]
    }
];

const InfoThree = [
    {
        title: "Long Term Support",
        subtitle: "Taking Care of the Employees",
        description: [
            "With the hiring process complete, the real work can begin. From the outset, we are regularly in touch with our employers and employees to solicit their feedback, fine tune our processes, and plan for any contingencies.",
            "In some cases, we can provide a senior member of our team to serve as an on-site supervisor at employer sites to ensure smooth coordination of workflow schedules, address ongoing training, and offer constructive feedback to our employees.",
            "We consider it the highest compliment when our employees are hired on permanently or when our partners engage us for new staffing projects."
        ]
    }
];

const buttonInfo = {
    text: "Submit Staffing Request",
    link: "/submit-staffing-request"
};


export default function ForEmployers() {
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

            <HeadingBanner title="Employers" buttonInfo={buttonInfo} />

            <InfoSection
                info={InfoOne}
                imgSrc={["/stock/meeting_Two.jpg"]}
                infoSide="left"
            />
            <InfoSection
                info={InfoTwo}
                imgSrc={["/handshake.png"]}
                infoSide="right"
            />
            <InfoSection
                info={InfoThree}
                imgSrc={[
                    "/stock/training.jpg",
                    "/stock/training_Two.jpg",
                ]}
                infoSide="left"
            />
            <Footer />
        </>
    )
}