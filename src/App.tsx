import {useEffect, useState} from "react";
import './App.css'

const API_ENDPOINT = 'http://127.0.0.1:8000'
const categories = ['all', 'books', 'movies']

function App() {
    const [activeCategory, setActiveCategory] = useState('all')
    const [data, setData] = useState([])
    const [error, setError] = useState<{ message?: string }>()

    useEffect(() => {
        fetch(`${API_ENDPOINT}/category/${activeCategory}`)
            .then(res => res.json())
            .then(data => setData(data))
            .catch(error => setError(error))
    }, [activeCategory])

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
                {error?.message ? error.message : data}
            </p>
        </div>
    )
}

export default App
