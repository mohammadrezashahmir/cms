import React, { useState, useEffect, useContext } from 'react'
import { Link } from 'react-router-dom'

// components:
import PostItem from './postItem'
// context:
import { postsContext } from '../context/PostsContext'
function Posts() {
    const posts = useContext(postsContext)
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
                    <Link to={'/admin/posts/add-post/'} className="btn btn-primary shadow-md ml-2"> افزودن پست </Link>
                    <div className="dropdown ml-auto sm:ml-0">
                        <button className="dropdown-toggle btn px-2 box text-gray-700 dark:text-gray-300" aria-expanded="false">
                            <span className="w-5 h-5 flex items-center justify-center"> <i className="w-4 h-4" data-feather="plus" /> </span>
                        </button>
                        <div className="dropdown-menu w-40">
                            <div className="dropdown-menu__content box dark:bg-dark-1 p-2">
                                <a href className="flex items-center block p-2 transition duration-300 ease-in-out bg-white dark:bg-dark-1 hover:bg-gray-200 dark:hover:bg-dark-2 rounded-md"> <i data-feather="share-2" className="w-4 h-4 ml-2" /> اشتراک پست </a>
                                <a href className="flex items-center block p-2 transition duration-300 ease-in-out bg-white dark:bg-dark-1 hover:bg-gray-200 dark:hover:bg-dark-2 rounded-md"> <i data-feather="download" className="w-4 h-4 ml-2" /> دانلود پست </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="intro-y grid grid-cols-12 gap-6 mt-5">
                {postList.map(item => item)}
                <div className="intro-y col-span-12 flex flex-wrap sm:flex-row sm:flex-nowrap items-center">
                    <ul className="pagination">
                        <li>
                            <a className="pagination__link" href> <i className="w-4 h-4" data-feather="chevrons-right" /> </a>
                        </li>
                        <li>
                            <a className="pagination__link" href> <i className="w-4 h-4" data-feather="chevron-right" /> </a>
                        </li>
                        <li> <a className="pagination__link" href>...</a> </li>
                        <li> <a className="pagination__link" href>1</a> </li>
                        <li> <a className="pagination__link pagination__link--active" href>2</a> </li>
                        <li> <a className="pagination__link" href>3</a> </li>
                        <li> <a className="pagination__link" href>...</a> </li>
                        <li>
                            <a className="pagination__link" href> <i className="w-4 h-4" data-feather="chevron-left" /> </a>
                        </li>
                        <li>
                            <a className="pagination__link" href> <i className="w-4 h-4" data-feather="chevrons-left" /> </a>
                        </li>
                    </ul>
                    <select className="w-20 form-select box mt-3 sm:mt-0">
                        <option>10</option>
                        <option>25</option>
                        <option>35</option>
                        <option>50</option>
                    </select>
                </div>
            </div>
        </>
    )
}

export default Posts
