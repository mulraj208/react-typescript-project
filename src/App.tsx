import {useEffect, useState} from "react";
import './App.css'

const API_ENDPOINT = 'http://127.0.0.1:8000'
const categories = ['all', 'books', 'movies']

function App() {
    const [activeCategory, setActiveCategory] = useState('all')
    const [data, setData] = useState([])
    const [error, setError] = useState()

    useEffect(() => {
        fetch(`${API_ENDPOINT}/category/${activeCategory}`)
            .then(res => res.json())
            .then(d => setData(d))
            .catch(e => setError(e))
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

            <p>{data.message}</p>
        </div>
    )
}

export default App
