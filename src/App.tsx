import {useEffect, useState} from "react";
import './App.css'

const API_ENDPOINT = 'http://127.0.0.1:8000'
const categories = ['all', 'books', 'movies']

type Error = { message?: string } | null

function App() {
    const [activeCategory, setActiveCategory] = useState('all')
    const [data, setData] = useState([])
    const [error, setError] = useState<Error>()
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const abortController = new AbortController();
        const signal = abortController.signal;

        const fetchData = async () => {
            try {
                setLoading(true);

                const response = await fetch(`${API_ENDPOINT}/category/${activeCategory}`, {signal});

                if (!response.ok) {
                    throw new Error('Failed to fetch')
                }

                const result = await response.json();
                setData(result);
            } catch (error) {
                setError(error as unknown as Error);
            } finally {
                setLoading(false);
            }
        };

        fetchData();

        return () => {
            // This will abort the fetch when the component unmounts or when activeCategory changes.
            abortController.abort();
        };
    }, [activeCategory]);

    console.log(data, error)

    return (
        <div>
            {categories.map(category =>
                <button
                    key={category}
                    className={`category-button ${category === activeCategory ? 'active' : ''}`}
                    onClick={() => setActiveCategory(category)}
                >{category}
                </button>)
            }

            <p>
                {loading ? 'loading...' : error?.message ? error.message : data}
            </p>
        </div>
    )
}

export default App
