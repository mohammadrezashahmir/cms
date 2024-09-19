import React, {createContext, useState, useEffect, useContext} from 'react';

import {getDataFromServer, deleteDataFromServer, sendDataToServer} from "../services/api";
import {AuthContext} from "./AuthContext";
import {toast} from "react-toastify";

export const postsContext = createContext()
const PostsContextProvider = ({children}) => {
    const [posts, setPosts] = useState()
    const [category, setCategory] = useState([])
    const [tag, setTag] = useState([])
    const [pageObj, setPageObj] = useState()
    const deletePost = async (id) => {
        try {
            await deleteDataFromServer(`api/posts/manage/${id}/`);
            const updatedPosts = posts.filter((item) => item.id !== id);
            setPosts(updatedPosts);
        } catch (error) {
            console.error("Failed to delete post:", error);
        }
    };
    const addTag = (values,resetForm) => {
        try {
            sendDataToServer('/api/posts/tag/', values)
                .then((res) => {
                    toast.success(<div className="text-lg font-medium">تگ با موفقیت اضافه شد.</div>);
                    setTag(prevState => {
                        return [...prevState,res]
                    })
                    resetForm()
                })
                .catch((error) => {
                    toast.error(<div className="text-lg font-medium">خطایی رخ داده است</div>);
                });
        } catch (error) {
            console.error("Failed to add tag:", error);
        }
    }
     const addCategory = (values,resetForm) => {
        try {
            sendDataToServer('/api/posts/category/', values)
                .then((res) => {
                    toast.success(<div className="text-lg font-medium">دسته بندی با موفقیت اضافه شد.</div>);
                    setCategory(prevState => {
                        return [...prevState,res]
                    })
                    resetForm()
                })
                .catch((error) => {
                    toast.error(<div className="text-lg font-medium">خطایی رخ داده است</div>);
                });
        } catch (error) {
            console.error("Failed to add category", error);
        }
    }
    const fetchPosts = async (url) => {
        const data = await getDataFromServer(url)
        setPageObj(data.page_obj)
        setPosts(data.results)
    }
    useEffect(() => {
        fetchPosts('/api/posts/manage/')
        const fetchPostsSet = async () => {
            setCategory(await getDataFromServer('/api/posts/category/'))
            setTag(await getDataFromServer('/api/posts/tag/'))
        }
        fetchPostsSet()
    }, [])


    return (
        <postsContext.Provider value={{posts, deletePost, pageObj, fetchPosts, category,addCategory, tag,addTag}}>
            {posts ? children : 'Loading'}
        </postsContext.Provider>
    );
};
export const usePosts = () => {
    return useContext(postsContext);
};

export default PostsContextProvider;