import React, {useContext, useEffect, useRef, useState} from 'react'
import {AuthContext} from '../../context/AuthContext'
import {getRelativeTime} from "../../services/helper";
import {Dropdown, DropdownToggle} from 'react-bootstrap';
import {IoEllipsisVerticalSharp} from "react-icons/io5";
import {CiTrash} from "react-icons/ci";
import {IoPencil} from "react-icons/io5";
import {Link, Navigate} from 'react-router-dom';
import useComment from '../../hooks/comment'
import {LiaTelegram} from "react-icons/lia";

function PostItem({post, handleShow}) {
    const {currentUser,adminUsers} = useContext(AuthContext)
    const postUser = adminUsers.find(user=>user.id==post.author)
    const {
        contentElement,
        addComment,
        setData
    } = useComment()
    useEffect(() => {
        setData({
            post: post.id,
            author: currentUser.id,
            parent: null,
        })
    }, [])
    return (
        <>
            <div className="intro-y blog col-span-12 md:col-span-6 box">
                <div className="blog__preview image-fit">
                    <img alt="عکس پست" className="rounded-t-md" src={post.main_image}/>
                    <div className="absolute w-full flex items-center px-5 pt-6 z-10">
                        <div className="w-10 h-10 flex-none image-fit">
                            <img alt="عکس کاربر" className="rounded-full" src={postUser.image}/>
                        </div>
                        <div className="mr-3 text-white ml-auto">
                           <a className="font-medium">{postUser.username}</a>
                            <div className="text-xs mt-0.5">{getRelativeTime(post.date)}</div>
                        </div>
                        <Dropdown>
                            <DropdownToggle
                                as='div'
                                variant={'light'}
                                className="dropdown-toggle  w-8 h-8 rounded-full overflow-hidden shadow-lg image-fit zoom-in"
                                role="button" aria-expanded="false">
                                <IoEllipsisVerticalSharp
                                    className='feather feather-more-vertical w-4 h-4 text-white'/>
                            </DropdownToggle>
                            <Dropdown.Menu className="dropdown-menu__content box dark:bg-dark-1 p-2">
                                <Link
                                    className='w-full flex items-center block p-2 transition duration-300 ease-in-out bg-white dark:bg-dark-1 hover:bg-gray-200 dark:hover:bg-dark-2 rounded-md'
                                    to={`/admin/posts/edit/${post.id}`}><IoPencil
                                    className="ml-2 text-xl"/> ویرایش پست </Link>
                                <button
                                    className='w-full flex items-center block p-2 transition duration-300 ease-in-out bg-white dark:bg-dark-1 hover:bg-gray-200 dark:hover:bg-dark-2 rounded-md'
                                    onClick={() => handleShow(post.id)}><CiTrash
                                    className="ml-2 text-xl"/> حذف پست
                                </button>
                            </Dropdown.Menu>
                        </Dropdown>
                    </div>
                    <div className="absolute bottom-0 text-white px-5 pb-6 z-10">
                        <div
                            className="blog__category px-2 py-1 rounded">
                            {post.category.map((item, index) => (
                                <span key={index}>{item.title}   </span>
                            ))}
                        </div>
                        <Link to={`/admin/posts/${post.id}/`} className="block font-medium text-xl mt-3">{post.title}
                        </Link>

                    </div>
                </div>
                <div className="p-5 text-gray-700 dark:text-gray-600">
                     {post.content.textContent}
                    <Link to={`/admin/posts/${post.id}/`} className="block text-theme-1 text-sm mt-3">
                        بیشتر بخوانید...
                    </Link>
                </div>
                {/*<div className="flex items-center px-5 py-3 border-t border-gray-200 dark:border-dark-5">*/}
                {/*    <a */}
                {/*       className="intro-x w-8 h-8 flex items-center justify-center rounded-full border border-gray-400 dark:border-dark-5 dark:bg-dark-5 dark:text-gray-300 text-gray-600 ml-2 tooltip"*/}
                {/*       title="بوکمارک"> <i data-feather="bookmark" className="w-3 h-3"/> </a>*/}
                {/*    <div className="intro-x flex ml-2">*/}
                {/*        <div className="intro-x w-8 h-8 image-fit">*/}
                {/*            <img alt="Icewall Tailwind HTML Admin Template"*/}
                {/*                 className="rounded-full border border-white zoom-in tooltip"*/}
                {/*                 src="dist\images\profile-14.jpg" title="آل پاچینو"/>*/}
                {/*        </div>*/}
                {/*        <div className="intro-x w-8 h-8 image-fit -ml-4">*/}
                {/*            <img alt="Icewall Tailwind HTML Admin Template"*/}
                {/*                 className="rounded-full border border-white zoom-in tooltip"*/}
                {/*                 src="dist\images\profile-7.jpg" title="سیلور استالونه"/>*/}
                {/*        </div>*/}
                {/*        <div className="intro-x w-8 h-8 image-fit -ml-4">*/}
                {/*            <img alt="Icewall Tailwind HTML Admin Template"*/}
                {/*                 className="rounded-full border border-white zoom-in tooltip"*/}
                {/*                 src="dist\images\profile-5.jpg" title="شارلیز ترون"/>*/}
                {/*        </div>*/}
                {/*    </div>*/}
                {/*    <a */}
                {/*       className="intro-x w-8 h-8 flex items-center justify-center rounded-full bg-theme-14 dark:bg-dark-5 dark:text-gray-300 text-theme-10 mr-auto tooltip"*/}
                {/*       title="اشتراک"> <i data-feather="share-2" className="w-3 h-3"/> </a>*/}
                {/*    <a */}
                {/*       className="intro-x w-8 h-8 flex items-center justify-center rounded-full bg-theme-1 text-white mr-2 tooltip"*/}
                {/*       title="دانلود پی‌دی‌اف"> <i data-feather="share" className="w-3 h-3"/> </a>*/}
                {/*</div>*/}
                <div className="px-5 pt-3 pb-5 border-t border-gray-200 dark:border-dark-5">
                    <div className="w-full flex text-gray-600 text-xs sm:text-sm">
                        <div className="ml-2"> نظرات: <span className="font-medium">{post.total_comments}</span></div>
                        <div className="ml-2"> مشاهده: <span className="font-medium">70k</span></div>
                        <div className="mr-auto"> لایک: <span className="font-medium">31k</span></div>
                    </div>
                    <div className="w-full flex items-center mt-3">
                        <div className="w-8 h-8 flex-none image-fit ml-3">
                            <img alt="عکس کاربر" className="rounded-full"
                                 src={currentUser.image}/>
                        </div>
                        <div className="flex-1 relative text-gray-700 dark:text-gray-300">
                            <input type="text"
                                   ref={contentElement}
                                   className="form-control form-control-rounded border-transparent bg-gray-200 pl-10 placeholder-theme-8"
                                   placeholder="نظر خود را بنویسید..."/>
                            <div
                                className="w-4 h-4 absolute my-auto inset-y-0 left-0   w-8 h-8 sm:w-10 sm:h-10 rounded-full flex items-center justify-center  mr-2 text-gray-800 zoom-in tooltip"
                                onClick={() => addComment('/api/posts/comments/', 'POST')}
                            >
                                <LiaTelegram className='feather feather-linkedin fill-current' size={'20px'}/>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </>
    )
}

export default PostItem
