import React from 'react'
import ReactDOM from 'react-dom/client'
import {QueryClient, QueryClientProvider} from "@tanstack/react-query";
import {ReactQueryDevtools} from '@tanstack/react-query-devtools'
import {ChakraProvider} from '@chakra-ui/react'
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import App from './App.tsx'
import PostsPaginated from "./pages/PostsPaginated";
import PostsListInfinite from "./pages/PostsListInfinite";
import Posts from "./pages/Posts";
import Post from "./pages/Post";
import CreatePost from "./pages/CreatePost";
import Todos from "./pages/Todos";
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
    {
        path: "/todos",
        element: <Todos/>,
    },
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <QueryClientProvider client={queryClient}>
            <ChakraProvider>
                <RouterProvider router={router}/>
                <ReactQueryDevtools initialIsOpen={false}/>
            </ChakraProvider>
        </QueryClientProvider>
    </React.StrictMode>,
);