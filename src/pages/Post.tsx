import {useQuery} from "react-query";
import {Link, useParams} from "react-router-dom";
import Nav from "../components/Nav";

const API_ENDPOINT = 'http://127.0.0.1:8000'

function Post() {
    const params = useParams()
    const {isLoading, data: post, error} = useQuery({
        queryKey: ['posts', params.postId],
        queryFn: () =>
            fetch(`${API_ENDPOINT}/posts/${params.postId}`).then((res) => {
                if (!res.ok) {
                    throw new Error('Failed to fetch')
                }
                return res.json()
            })
    })

    if (isLoading) return 'Loading...'
    if (error) return 'Something went wrong!!!'

    return (
        <div className="post-wrapper">
            <Nav/>

            <h2>
                <Link to={`/post/${post.id}`}>{post.title}</Link>
            </h2>

            <div dangerouslySetInnerHTML={{__html: post.body}}/>
        </div>
    )
}

export default Post
