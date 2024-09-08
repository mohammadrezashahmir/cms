import React from 'react'
import PostsContextProvider from '../context/PostsContext'
import {Outlet} from 'react-router-dom'
import {ToastContainer} from "react-toastify";

function PostLayout() {
    return (
        <PostsContextProvider>
            <Outlet/>
            <ToastContainer/>

        </PostsContextProvider>
    )
}

export default PostLayout
