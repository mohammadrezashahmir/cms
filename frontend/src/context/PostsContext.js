import React, { createContext, useState, useEffect } from 'react';

import { getDataFromServer, deleteDataFromServer } from "../services/api";
export const postsContext = createContext()
const PostsContextProvider = ({ children }) => {
    const [posts, setPosts] = useState()
    const deletePost = async (id) => {
        try {
            await deleteDataFromServer(`/api/posts/manage/${id}/`);
            const updatedPosts = posts.filter((item) => item.id !== id);
            setPosts(updatedPosts);
        } catch (error){
            console.error("Failed to delete post:", error);
        }
    };
    useEffect(() => {
        const fetchAPI = async () => {
            setPosts(await getDataFromServer('/api/posts/list/'))
        }
        fetchAPI()
    }, [])



    return (
        <postsContext.Provider value={{posts,deletePost}}>
            {posts ? children : 'Loading'}
        </postsContext.Provider>
    );
};

export default PostsContextProvider;