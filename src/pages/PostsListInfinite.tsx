import {useInfiniteQuery} from "react-query";
import {API_ENDPOINT} from "../constants";
import Nav from "../components/Nav";
import PostCard from "./PostCard";

function PostsListInfinite() {
    const {
        isLoading, data: posts, error,
        isFetchingNextPage,
        hasNextPage,
        fetchNextPage,
    } = useInfiniteQuery({
        queryKey: ['paginated-posts', "infinite"],
        getNextPageParam: prevData => {
            return prevData.next_page_url ? prevData.current_page + 1 : null
        },
        queryFn: ({pageParam = 1}) => {
            console.log(pageParam)

            return fetch(`${API_ENDPOINT}/paginated-posts?page=${pageParam}`).then((res) => {
                if (!res.ok) {
                    throw new Error('Failed to fetch')
                }
                return res.json()
            })
        }
    })

    if (isLoading) return 'Loading...'
    if (error) return 'Something went wrong!!!'

    return (
        <div>
            <Nav/>

            {posts?.pages.map((posts, index) => {
                return (
                    <div key={`posts-page-${index}`}>
                        {posts.data.map((post) => (
                            <PostCard
                                key={post.id}
                                post={post}
                            />
                        ))}
                    </div>
                )
            })}

            {hasNextPage && (
                <button onClick={() => fetchNextPage()}>
                    {isFetchingNextPage ? "Loading..." : "Load More"}
                </button>
            )}
        </div>
    )
}

export default PostsListInfinite
