import Contact from "@/components/contact"
import FAQContent from "@/components/faqContent"
import Footer from "@/components/footer"
import HeadingBanner from "@/components/headingBanner"
import Head from "next/head"

export default function FAQ() {
    return (
        <>
            <Head>
                <title>Ensured Employment</title>
            </Head>

            <HeadingBanner title="Frequently Asked Questions" />
            <FAQContent />
            <Contact />
            <Footer />
        </>
    )
}
