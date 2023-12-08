import {useQuery} from "@tanstack/react-query";
import {Link} from "react-router-dom";
import Nav from "../components/Nav";
import {API_ENDPOINT} from "../constants.ts";

function Posts() {
    const {isLoading, data: posts, error} = useQuery({
        queryKey: ['posts'],
        queryFn: () =>
            fetch(`${API_ENDPOINT}/posts`).then((res) => {
                if (!res.ok) {
                    throw new Error('Failed to fetch')
                }
                return res.json()
            })
    })

    if (isLoading) return 'Loading...'
    if (error) return 'Something went wrong!!!'

    return (
        <div>
            <Nav/>

            {posts.map((post) => (
                <div key={post.id} className="post-wrapper">
                    <h2>
                        <Link to={`/post/${post.id}`}>{post.title}</Link>
                    </h2>
                    <p>{post.excerpt}</p>
                </div>
            ))}
        </div>
    )
}

export default Posts
