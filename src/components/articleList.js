import { useState, useEffect } from 'react';
import { db } from '@/lib/firebaseConfig';
import { collection, getDocs, deleteDoc, doc } from 'firebase/firestore';
import { SvgIcon } from '@mui/material';
import { TrashIcon } from '@heroicons/react/20/solid';

export default function ArticlesList() {
    const [articles, setArticles] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');

    useEffect(() => {
        const fetchArticles = async () => {
            try {
                const querySnapshot = await getDocs(collection(db, 'articles'));
                const articlesData = querySnapshot.docs.map(doc => ({
                    id: doc.id,
                    ...doc.data()
                }));
                setArticles(articlesData);
                setLoading(false);
            } catch (err) {
                setError('Failed to fetch articles');
                setLoading(false);
            }
        };

        fetchArticles();
    }, []);

    // Delete an article by ID
    const handleDelete = async (id) => {
        try {
            await deleteDoc(doc(db, 'articles', id));
            setArticles(prevArticles => prevArticles.filter(article => article.id !== id));
        } catch (err) {
            setError('Failed to delete article');
        }
    };

    return (
        <div className="p-6 max-w-4xl mx-auto">
            {loading ? (
                <div className={`flex gap-4 p-4 items-center border rounded-lg bg-gray-800 text-white border-white`}>
                    <div className="inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-current border-e-transparent align-[-0.125em] text-surface motion-reduce:animate-[spin_1.5s_linear_infinite] dark:text-white">
                        <span className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]">
                            Loading...
                        </span>
                    </div>
                    Processing
                </div>
            ) : error ? (
                <div className={`p-4 mt-8 border rounded-lg bg-red-100 text-red-700 border-red-700`}>
                    {error}
                </div>
            ) : articles.length === 0 ? (
                <p>No Articles Found</p>
            ) : (
                <ul className="space-y-4">
                    {articles.map((article) => (
                        <li key={article.id} className="flex justify-between items-center p-4 bg-gray-100 rounded shadow">
                            <span>{article.title}</span>
                            <button onClick={() => handleDelete(article.id)}>
                                <SvgIcon className="text-red-500" aria-label="trash icon">
                                    <TrashIcon />
                                </SvgIcon>
                            </button>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
}