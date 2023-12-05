import React from 'react'
import ReactDOM from 'react-dom/client'
import {QueryClient, QueryClientProvider} from "react-query";
import {ChakraProvider} from '@chakra-ui/react'
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import App from './App.tsx'
import PostsPaginated from "./pages/PostsPaginated";
import PostsListInfinite from "./pages/PostsListInfinite";
import Posts from "./pages/Posts";
import Post from "./pages/Post";
import CreatePost from "./pages/CreatePost";
import './index.css'

const queryClient = new QueryClient({
    defaultOptions: {
        queries: {
            refetchOnWindowFocus: false,
            staleTime: 1000 * 60 * 5 // 5 minutes
        },
    }
})

const router = createBrowserRouter([
    {
        path: "/",
        element: <App/>,
    },
    {
        path: "/posts",
        element: <Posts/>,
    },
    {
        path: "/paginated-posts",
        element: <PostsPaginated/>,
    },
    {
        path: "/posts-list-infinite",
        element: <PostsListInfinite/>,
    },
    {
        path: "/post/:postId",
        element: <Post/>,
    },
    {
        path: "/create-new-post",
        element: <CreatePost/>,
    },
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <QueryClientProvider client={queryClient}>
            <ChakraProvider>
                <RouterProvider router={router}/>
            </ChakraProvider>
        </QueryClientProvider>
    </React.StrictMode>,
);