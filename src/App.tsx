import {useState} from "react";
import {useQuery} from "@tanstack/react-query";
import './App.css'
import Nav from "./components/Nav";
import {API_ENDPOINT} from "./constants.ts";

const categories = ['all', 'books', 'movies']

function App() {
    const [activeCategory, setActiveCategory] = useState('all')

    const {isLoading, data, error} = useQuery({
        queryKey: ['category', activeCategory],
        queryFn: () =>
            fetch(`${API_ENDPOINT}/category/${activeCategory}`).then(async (res) => {
                if (!res.ok) {
                    const response = await res.json()
                    throw new Error(response.error)
                }
                return res.json()
            })
    })

    return (
        <div>
            <Nav/>

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
