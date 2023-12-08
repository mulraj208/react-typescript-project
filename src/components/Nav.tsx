import React from "react";
import {Link} from "react-router-dom";

function Nav() {
    return (
        <div className="nav-links-wrapper">
            <Link to="/">Home</Link>
            <Link to="/posts">All Posts</Link>
            <Link to="/paginated-posts">Paginated Posts</Link>
            <Link to="/posts-list-infinite">Infinite Post List</Link>
            <Link to="/create-new-post">Create New Post</Link>
            <Link to="/todos">Todos</Link>
        </div>
    )
}

export default Nav
