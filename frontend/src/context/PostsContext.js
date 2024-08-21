import React, {createContext, useState, useEffect} from 'react';

import {getDataFromServer} from "../services/api";

export const postsContext = createContext()
const PostsContextProvider = ({children}) => {
    const [posts, setPosts] = useState()
    useEffect(() => {
        const fetchAPI = async () => {
            setPosts(await getDataFromServer('/api/posts/manage/'))
        }
        fetchAPI()
    }, [])

    console.log(posts);
    
    return (
        <postsContext.Provider value={posts}>
            {posts ? children : 'Loading'}
        </postsContext.Provider>
    );
};

export default PostsContextProvider;