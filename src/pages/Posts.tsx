import {useQuery} from "@tanstack/react-query";
import Nav from "../components/Nav";
import PostCard from "../components/PostCard";
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
                <PostCard
                    key={post.id}
                    post={post}
                />
            ))}
        </div>
    )
}

export default Posts
