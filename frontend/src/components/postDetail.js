import React, {useContext, useEffect, useState} from 'react';
import {useParams} from "react-router-dom";
import {postsContext} from "@/context/PostsContext";
import {FaRegComment} from "react-icons/fa";
import useComment from "@/hooks/comment";
import {userContext} from "@/context/UserContext";
import CommentContainer from "@/components/comments/commentContainer";

const PostDetail = () => {
    const {id} = useParams()
    const {posts} = useContext(postsContext);
    const [post, setPost] = useState(null)
    useEffect(() => {
        const postDetail = posts.find((item) => item.id == id)
        if (postDetail) {
            setPost(postDetail)
        }
    }, [id])
    return (
        <>
            {
                post ? <div className="intro-y news xl:w-3/5 p-5 box mt-8">
                    <h2 className="intro-y font-medium text-xl sm:text-2xl">
                        {post.title}
                    </h2>
                    <div className="intro-y text-gray-700 dark:text-gray-600 mt-3 text-xs sm:text-sm">{post.date} <span
                        className="mx-1">•</span>
                        {post.category.map(cat => <div
                            className="inline text-theme-17 dark:text-gray-500">{cat.title}  </div>)}

                    </div>
                    <div className="intro-y mt-6">
                        <div className="news__preview image-fit">
                            <img alt="عکس پست" className="rounded-md"
                                 src={post.main_image}/>
                        </div>
                    </div>
                    <div className="intro-y flex relative pt-16 sm:pt-6 items-center pb-6">
                        <a href=""
                           className="intro-x w-8 h-8 sm:w-10 sm:h-10 flex flex-none items-center justify-center rounded-full border border-gray-400 dark:border-dark-5 dark:bg-dark-5 dark:text-gray-300 text-gray-600 ml-3 tooltip">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                 fill="none"
                                 stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"
                                 className="feather feather-bookmark w-3 h-3">
                                <path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"></path>
                            </svg>
                        </a>
                        <div className="intro-x flex ml-3">
                            <div className="intro-x w-8 h-8 sm:w-10 sm:h-10 image-fit">
                                <img alt="Icewall Tailwind HTML Admin Template"
                                     className="rounded-full border border-white zoom-in tooltip"
                                     src="dist\images\profile-5.jpg"/>
                            </div>
                            <div className="intro-x w-8 h-8 sm:w-10 sm:h-10 image-fit -ml-4">
                                <img alt="Icewall Tailwind HTML Admin Template"
                                     className="rounded-full border border-white zoom-in tooltip"
                                     src="dist\images\profile-3.jpg"/>
                            </div>
                            <div className="intro-x w-8 h-8 sm:w-10 sm:h-10 image-fit -ml-4">
                                <img alt="Icewall Tailwind HTML Admin Template"
                                     className="rounded-full border border-white zoom-in tooltip"
                                     src="dist\images\profile-7.jpg"/>
                            </div>
                        </div>
                        <div
                            className="absolute sm:relative -mt-12 sm:mt-0 w-full flex text-gray-700 dark:text-gray-600 text-xs sm:text-sm">
                            <div className="intro-x mr-1 sm:mr-3"> نظرات: <span className="font-medium">86</span></div>
                            <div className="intro-x mr-1 sm:mr-3"> مشاهده: <span className="font-medium">60k</span>
                            </div>
                            <div className="intro-x sm:ml-3 mr-auto"> لایک: <span className="font-medium">40k</span>
                            </div>
                        </div>
                        <a href=""
                           className="intro-x w-8 h-8 sm:w-10 sm:h-10 flex flex-none items-center justify-center rounded-full bg-theme-14 dark:bg-dark-5 dark:text-gray-300 text-theme-10 mr-auto sm:ml-0 tooltip">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                 fill="none"
                                 stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"
                                 className="feather feather-share-2 w-3 h-3">
                                <circle cx="18" cy="5" r="3"></circle>
                                <circle cx="6" cy="12" r="3"></circle>
                                <circle cx="18" cy="19" r="3"></circle>
                                <line x1="8.59" y1="13.51" x2="15.42" y2="17.49"></line>
                                <line x1="15.41" y1="6.51" x2="8.59" y2="10.49"></line>
                            </svg>
                        </a>
                        <a href=""
                           className="intro-x w-8 h-8 sm:w-10 sm:h-10 flex flex-none items-center justify-center rounded-full bg-theme-1 text-white mr-3 tooltip">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                 fill="none"
                                 stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"
                                 className="feather feather-share w-3 h-3">
                                <path d="M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8"></path>
                                <polyline points="16 6 12 2 8 6"></polyline>
                                <line x1="12" y1="2" x2="12" y2="15"></line>
                            </svg>
                        </a>
                    </div>
                    <div className="intro-y text-justify leading-relaxed">
                        {post.content}
                    </div>
                    <div
                        className="intro-y flex text-xs sm:text-sm flex-col sm:flex-row items-center mt-5 pt-5 border-t border-gray-200 dark:border-dark-5">
                        <div className="flex items-center">
                            <div className="w-12 h-12 flex-none image-fit">
                                <img alt="Icewall Tailwind HTML Admin Template" className="rounded-full"
                                     src={post.author.image}/>
                            </div>
                            <div className="mr-3 ml-auto">
                                <div className="font-medium">{post.author.username}</div>
                                , نویسنده
                            </div>
                        </div>
                        <div className="flex items-center text-gray-700 dark:text-gray-600 sm:mr-auto mt-5 sm:mt-0">
                            اشتراک این پست:
                            <a href=""
                               className="w-8 h-8 sm:w-10 sm:h-10 rounded-full flex items-center justify-center border dark:border-dark-5 mr-2 text-gray-500 zoom-in tooltip">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                     fill="none"
                                     stroke="currentColor" stroke-width="1.5" stroke-linecap="round"
                                     stroke-linejoin="round"
                                     className="feather feather-facebook w-3 h-3 fill-current">
                                    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                                </svg>
                            </a>
                            <a href=""
                               className="w-8 h-8 sm:w-10 sm:h-10 rounded-full flex items-center justify-center border dark:border-dark-5 mr-2 text-gray-500 zoom-in tooltip">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                     fill="none"
                                     stroke="currentColor" stroke-width="1.5" stroke-linecap="round"
                                     stroke-linejoin="round"
                                     className="feather feather-twitter w-3 h-3 fill-current">
                                    <path
                                        d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path>
                                </svg>
                            </a>
                            <a href=""
                               className="w-8 h-8 sm:w-10 sm:h-10 rounded-full flex items-center justify-center border dark:border-dark-5 mr-2 text-gray-500 zoom-in tooltip">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                     fill="none"
                                     stroke="currentColor" stroke-width="1.5" stroke-linecap="round"
                                     stroke-linejoin="round"
                                     className="feather feather-linkedin w-3 h-3 fill-current">
                                    <path
                                        d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                                    <rect x="2" y="9" width="4" height="12"></rect>
                                    <circle cx="4" cy="4" r="2"></circle>
                                </svg>
                            </a>
                        </div>
                    </div>
                    {
                        post.comment && <CommentContainer
                            itemComment={post.comment} itemId={post.id} url={'/api/posts/comments/'}
                            totalComment={post.total_comments}
                        />
                    }
                </div> : 'Loading...'
            }
        </>
    )
        ;
};

export default PostDetail;