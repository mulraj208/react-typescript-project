import {useQuery} from "react-query";
import {Link} from "react-router-dom";
import {API_ENDPOINT} from "../constants";
import {useState} from "react";
import Nav from "../components/Nav";

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
                <div key={post.id} className="post-wrapper">
                    <h2>
                        <Link to={`/post/${post.id}`}>{post.title}</Link>
                    </h2>
                    <p>{post.body}</p>
                </div>
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
