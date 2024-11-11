import { useState, useEffect } from 'react';
import { db } from '@/lib/firebaseConfig';
import { collection, getDocs, deleteDoc, doc } from 'firebase/firestore';

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
                <p>Loading...</p>
            ) : error ? (
                <p className="text-red-500">{error}</p>
            ) : articles.length === 0 ? (
                <p>No articles found.</p>
            ) : (
                <ul className="space-y-4">
                    {articles.map((article) => (
                        <li key={article.id} className="flex justify-between items-center p-4 bg-gray-100 rounded shadow">
                            <span>{article.title}</span>
                            <button
                                onClick={() => handleDelete(article.id)}
                                className="bg-red-500 text-white px-4 py-1 rounded hover:bg-red-600"
                            >
                                Delete
                            </button>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
}