import React from 'react'
import PostsContextProvider from '../context/PostsContext'
import {Outlet} from 'react-router-dom'

function PostLayout() {
    return (
        <PostsContextProvider>
            <Outlet/>
        </PostsContextProvider>
    )
}

export default PostLayout
