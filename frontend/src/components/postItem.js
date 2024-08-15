import React, { useContext } from 'react'
import { userContext } from '../context/UserContext'
import { getRelativeTime } from "@/services/helper";
import { Dropdown } from 'react-bootstrap';
import { IoEllipsisVerticalSharp } from "react-icons/io5";
import { CiTrash } from "react-icons/ci";
import { IoPencil } from "react-icons/io5";
import { Link } from 'react-router-dom';
function PostItem({ post }) {
    const currentUser = useContext(userContext)
    return (
        <div className="intro-y blog col-span-12 md:col-span-6 box">
            <div className="blog__preview image-fit">
                <img alt="عکس پست" className="rounded-t-md" src={post.main_image} />
                <div className="absolute w-full flex items-center px-5 pt-6 z-10">
                    <div className="w-10 h-10 flex-none image-fit">
                        <img alt="عکس کاربر" className="rounded-full" src={post.author.image} />
                    </div>
                    <div className="mr-3 text-white ml-auto">
                        <a href className="font-medium">{post.author.username}</a>
                        <div className="text-xs mt-0.5">{getRelativeTime(post.date)}</div>
                    </div>
                    <Dropdown>
                        <Dropdown.Toggle
                            as="div"
                            className="blog__action w-8 h-8 flex items-center justify-center rounded-full text-4xl">
                            <IoEllipsisVerticalSharp className='feather feather-more-vertical w-4 h-4 text-white' />
                        </Dropdown.Toggle>
                        <Dropdown.Menu className="dropdown-menu__content box dark:bg-dark-1 p-2">
                            <Dropdown.Item className="flex items-center block p-2 transition duration-300 ease-in-out bg-white dark:bg-dark-1 hover:bg-gray-200 dark:hover:bg-dark-2 rounded-md">
                                <Link to={`admin/posts/edit/:${post.id}`}><IoPencil className="ml-2 text-xl" /> ویرایش پست </Link>
                            </Dropdown.Item>
                            <Dropdown.Item className="flex items-center block p-2 transition duration-300 ease-in-out bg-white dark:bg-dark-1 hover:bg-gray-200 dark:hover:bg-dark-2 rounded-md">
                                <Link to={`admin/posts/delete/:${post.id}`}> <CiTrash className="ml-2 text-xl" /> حذف پست </Link>
                            </Dropdown.Item>
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
                    <a href className="block font-medium text-xl mt-3">{post.title}</a></div>
            </div>
            <div className="p-5 text-gray-700 dark:text-gray-600">
                {post.content.textContent}
            </div>
            <div className="flex items-center px-5 py-3 border-t border-gray-200 dark:border-dark-5">
                <a href
                    className="intro-x w-8 h-8 flex items-center justify-center rounded-full border border-gray-400 dark:border-dark-5 dark:bg-dark-5 dark:text-gray-300 text-gray-600 ml-2 tooltip"
                    title="بوکمارک"> <i data-feather="bookmark" className="w-3 h-3" /> </a>
                <div className="intro-x flex ml-2">
                    <div className="intro-x w-8 h-8 image-fit">
                        <img alt="Icewall Tailwind HTML Admin Template"
                            className="rounded-full border border-white zoom-in tooltip"
                            src="dist\images\profile-14.jpg" title="آل پاچینو" />
                    </div>
                    <div className="intro-x w-8 h-8 image-fit -ml-4">
                        <img alt="Icewall Tailwind HTML Admin Template"
                            className="rounded-full border border-white zoom-in tooltip"
                            src="dist\images\profile-7.jpg" title="سیلور استالونه" />
                    </div>
                    <div className="intro-x w-8 h-8 image-fit -ml-4">
                        <img alt="Icewall Tailwind HTML Admin Template"
                            className="rounded-full border border-white zoom-in tooltip"
                            src="dist\images\profile-5.jpg" title="شارلیز ترون" />
                    </div>
                </div>
                <a href
                    className="intro-x w-8 h-8 flex items-center justify-center rounded-full bg-theme-14 dark:bg-dark-5 dark:text-gray-300 text-theme-10 mr-auto tooltip"
                    title="اشتراک"> <i data-feather="share-2" className="w-3 h-3" /> </a>
                <a href
                    className="intro-x w-8 h-8 flex items-center justify-center rounded-full bg-theme-1 text-white mr-2 tooltip"
                    title="دانلود پی‌دی‌اف"> <i data-feather="share" className="w-3 h-3" /> </a>
            </div>
            <div className="px-5 pt-3 pb-5 border-t border-gray-200 dark:border-dark-5">
                <div className="w-full flex text-gray-600 text-xs sm:text-sm">
                    <div className="ml-2"> نظرات: <span className="font-medium">191</span></div>
                    <div className="ml-2"> مشاهده: <span className="font-medium">70k</span></div>
                    <div className="mr-auto"> لایک: <span className="font-medium">31k</span></div>
                </div>
                <div className="w-full flex items-center mt-3">
                    <div className="w-8 h-8 flex-none image-fit ml-3">
                        <img alt="Icewall Tailwind HTML Admin Template" className="rounded-full"
                            src={currentUser.image} />
                    </div>
                    <div className="flex-1 relative text-gray-700 dark:text-gray-300">
                        <input type="text"
                            className="form-control form-control-rounded border-transparent bg-gray-200 pl-10 placeholder-theme-8"
                            placeholder="نظر خود را بنویسید..." />
                        <i data-feather="smile" className="w-4 h-4 absolute my-auto inset-y-0 ml-3 left-0" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PostItem
