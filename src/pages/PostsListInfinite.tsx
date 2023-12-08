import {useInfiniteQuery} from "@tanstack/react-query";
import {API_ENDPOINT} from "../constants";
import Nav from "../components/Nav";
import PostCard from "../components/PostCard";
import {Button} from "@chakra-ui/react";

function PostsListInfinite() {
    const {
        isLoading, data: posts, error,
        isFetchingNextPage,
        hasNextPage,
        fetchNextPage,
    } = useInfiniteQuery({
        initialPageParam: 1,
        queryKey: ['paginated-posts', "infinite"],
        getNextPageParam: prevData => {
            return prevData.next_page_url ? prevData.current_page + 1 : null
        },
        queryFn: ({pageParam = 1}) => {
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
                <Button my={4} onClick={() => fetchNextPage()}>
                    {isFetchingNextPage ? "Loading..." : "Load More"}
                </Button>
            )}
        </div>
    )
}

export default PostsListInfinite
