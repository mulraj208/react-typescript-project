import {useQuery} from "react-query";
import {API_ENDPOINT} from "../constants";
import {useState} from "react";
import Nav from "../components/Nav";
import PostCard from "./PostCard";

function PostsPaginated() {
    const [page, setPage] = useState(1)
    const {isLoading, data: posts, error} = useQuery({
        queryKey: ['paginated-posts', page],
        keepPreviousData: true,
        queryFn: () =>
            fetch(`${API_ENDPOINT}/paginated-posts?page=${page}`).then((res) => {
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

            {posts.data.map((post) => (
                <PostCard
                    key={post.id}
                    post={post}
                />
            ))}

            {posts.prev_page_url && (
                <button onClick={() => setPage(page => page - 1)}>Previous</button>
            )}

            {posts.next_page_url && (
                <button onClick={() => setPage(page => page + 1)}>Next</button>
            )}
        </div>
    )
}

export default PostsPaginated
