import React, {useContext} from 'react'
import {Link} from 'react-router-dom'
// components:
import PostItem from '../../components/post_module/postItem'
import ConfirmationModal from "../../components/modal/confirmationModal";
// hook:

import Pagination from "../../components/helper/pagination";
import {usePosts} from "../../context/PostsContext";


function Posts() {
    const {posts, deletePost,pageObj,fetchPosts} = usePosts();

    const postList = []
    posts.forEach(item => {
        postList.push(<PostItem key={item.id} post={item} />)
    })
    return (
        <>
            <div className="intro-y flex flex-col sm:flex-row items-center mt-8">
                <h2 className="text-lg font-medium ml-auto">
                    چینش بلاگ
                </h2>
                <div className="w-full sm:w-auto flex mt-4 sm:mt-0">
                    <Link to='/admin/posts/add-post/' className="btn btn-primary shadow-md ml-2"> افزودن پست </Link>
                </div>
            </div>
            <div className="intro-y grid grid-cols-12 gap-6 mt-5">
                {postList.map(item => item)}
                <Pagination pageObj={pageObj} handleDisplay={fetchPosts} rootUrl='/api/posts/manage' />
            </div>
        </>
    )
}

export default Posts
