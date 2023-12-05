import {Link} from "react-router-dom";
import {useQueryClient} from "react-query";

const API_ENDPOINT = 'http://127.0.0.1:8000'

function PostCard(props) {
    const {post} = props
    const queryClient = useQueryClient()

    const prefetchPostData = async () => {
        // The results of this query will be cached like a normal query
        await queryClient.prefetchQuery({
            queryKey: ['posts', post.id],
            queryFn: () =>
                fetch(`${API_ENDPOINT}/posts/${post.id}`).then((res) => {
                    if (!res.ok) {
                        throw new Error('Failed to fetch')
                    }
                    return res.json()
                })
        })
    }

    const onPostCardHover = () => {
        prefetchPostData()
    }

    return (
        <div className="post-wrapper" onMouseEnter={onPostCardHover}>
            <h2>
                <Link to={`/post/${post.id}`}>{post.title}</Link>
            </h2>

            <p>{post.excerpt}</p>
        </div>
    )
}

export default PostCard
