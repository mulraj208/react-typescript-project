import {useState} from "react";
import {useQuery} from "react-query";
import './App.css'

const API_ENDPOINT = 'http://127.0.0.1:8000'
const categories = ['all', 'books', 'movies']

function App() {
    const [activeCategory, setActiveCategory] = useState('all')

    const {isLoading, data, error} = useQuery({
        queryKey: ['bookmarks', activeCategory],
        queryFn: () =>
            fetch(`${API_ENDPOINT}/category/${activeCategory}`).then((res) => {
                if (!res.ok) {
                    throw new Error('Failed to fetch')
                }
                return res.json()
            })
    })

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
                {isLoading ? 'loading...' : error?.message ? error.message : data}
            </p>
        </div>
    )
}

export default App
