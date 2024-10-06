import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { collection, getDocs, query, where } from 'firebase/firestore';
import { db } from '@/lib/firebaseConfig';

const Articles = () => {
    const [articles, setArticles] = useState([]);
    const [filterType, setFilterType] = useState('all');
    const [articleTypes, setArticleTypes] = useState([]);

    const fetchArticleTypes = async () => {
        try {
            const querySnapshot = await getDocs(collection(db, 'articles'));
            const types = new Set();
            querySnapshot.forEach((doc) => {
                types.add(doc.data().type);
            });
            setArticleTypes([...types]);
        } catch (error) {
            console.error('Error fetching article types:', error);
        }
    };

    const fetchArticles = async () => {
        try {
            let articlesQuery;

            if (filterType === 'all') {
                // Fetch all articles if no filter is applied
                articlesQuery = query(collection(db, 'articles'));
            } else {
                // Fetch articles filtered by the selected 'type'
                articlesQuery = query(collection(db, 'articles'), where('type', '==', filterType));
            }

            const querySnapshot = await getDocs(articlesQuery);
            const fetchedArticles = [];
            querySnapshot.forEach((doc) => {
                fetchedArticles.push({ id: doc.id, ...doc.data() });
            });
            setArticles(fetchedArticles);
        } catch (error) {
            console.error('Error fetching articles:', error);
        }
    };

    useEffect(() => {
        fetchArticleTypes();
        fetchArticles();
    }, [filterType]);

    return (
        <div className="my-24 max-w-5xl mx-4 xl:mx-auto">
            <div className="mb-6">
                <label htmlFor="filterType" className="mr-2 font-bold">Show: </label>
                <select
                    id="filterType"
                    value={filterType}
                    onChange={(e) => setFilterType(e.target.value)}
                    className="p-2 border rounded"
                >
                    <option value="all">All</option>
                    {articleTypes.map((type, index) => (
                        <option key={index} value={type}>
                            {type}
                        </option>
                    ))}
                </select>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {articles.map((article, index) => (
                    <div key={index} className="bg-white shadow-lg rounded-lg overflow-hidden">
                        <div className="relative h-48 w-full">
                            <Image
                                src={article.image}
                                alt={article.title}
                                layout="fill"
                                objectFit="cover"
                                className="rounded-t-lg"
                            />
                        </div>

                        <Link href={`/articles/${article.id}`} className="flex flex-col p-6 gap-8 group cursor-pointer">
                            <h2 className="font-bold font-headings text-xl min-h-[84px]">{article.title}</h2>
                            <div className="px-3 py-1.5 font-headings font-bold w-fit rounded group-hover:bg-custom-black group-hover:text-white transition ease-in duration-200">
                                Read More
                            </div>
                        </Link>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Articles;
