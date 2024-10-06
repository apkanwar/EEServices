import { useRouter } from 'next/router';
import { doc, getDoc } from 'firebase/firestore';
import { db } from '@/lib/firebaseConfig';
import Image from 'next/image';
import TopBar from '@/components/navbars/topbar';
import Navbar from '@/components/navbars/navbar';
import Head from 'next/head';

export default function ArticlePage({ article }) {
    const router = useRouter();

    // Fallback handling if the article is not found
    if (router.isFallback) {
        return <div>Loading...</div>;
    }

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

            <TopBar />
            <Navbar color={'plum'} />
            <div className="max-w-5xl mx-auto py-12">
                <div className="bg-white shadow-lg rounded-lg overflow-hidden mx-4">
                    {/* Article Image */}
                    <div className="relative h-64 w-full">
                        <Image
                            src={article.image}
                            alt={article.title}
                            layout="fill"
                            objectFit="cover"
                            className="rounded-t-lg"
                        />
                    </div>

                    {/* Article Content */}
                    <div className="p-6">
                        <h1 className="font-bold text-3xl mb-4 font-headings">{article.title}</h1>

                        {/* Article Full Content */}
                        <div className="text-gray-600 font-dText text-lg">
                            <div className='flex flex-col gap-6'
                                dangerouslySetInnerHTML={{ __html: article.content }}
                            ></div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

// Fetch article data at request time (SSR)
export async function getServerSideProps({ params }) {
    const docRef = doc(db, 'articles', params.id);
    const docSnap = await getDoc(docRef);

    if (!docSnap.exists()) {
        return {
            notFound: true,
        };
    }

    const article = { id: docSnap.id, ...docSnap.data() };

    return {
        props: { article },
    };
}
