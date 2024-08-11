import React, { useState, useEffect } from 'react'
// MODULE:
import ReactQuill from 'react-quill';
// CSS:
import 'react-quill/dist/quill.snow.css'
// SERVICES:
import { getDataFromServer } from '../../services/api';
// COMPONENTS:
import SelectInput from '../inputForm/selectInput';
function AddPostForm() {
    const [data, setData] = useState({
        title: '',
        content: '',
        caption: '',
        main_image: '',
        gallery: [],
        author: '',
        date: '',
        category: [],
        tags: [],
        is_published: false,
        show_author: false,
    })
    const [fetchedData, setFetchedData] = useState({
        category: [],
        tag: [],
        user: [],
    })

    const changeHandler = (event) => {
        const { name, value, type, checked } = event.target;
        setData({
            ...data,
            [name]: type === "checkbox" ? checked : value,
        })


    }
    const categoryE = []
    const tagE = []
    const userE = []
    fetchedData.category.forEach(item => {
        categoryE.push(<option key={item.id} value={item.id} >{item.title}</option>)
    })
    fetchedData.tag.forEach(item => {
        tagE.push(<option key={item.id} value={item.id} >{item.title}</option>)
    })
    fetchedData.user.forEach(item => {
        userE.push(
            <a href="javascript:;" key={item.id} className="flex items-center block p-2 transition duration-300 ease-in-out bg-white dark:bg-dark-1 hover:bg-gray-200 dark:hover:bg-dark-2 rounded-md">
                <div className="w-6 h-6 absolute image-fit ml-3">
                    <img className="rounded" alt="Rubick Tailwind HTML Admin Template" src={item.image} />
                </div>
                <div className="mr-8 pr-1">{item.username}</div>
            </a>
        )
    })

    useEffect(() => {
        const fetchAPI = async () => {
            setFetchedData({
                tag: await getDataFromServer('/api/posts/getTag/'),
                category: await getDataFromServer('/api/posts/getCategory/'),
                user: await getDataFromServer('/api/users/getAdminUsers/'),
            })
        }
        fetchAPI()
    }, [])

    return (
        <div className="content">
            <div className="intro-y flex flex-col sm:flex-row items-center mt-8">
                <h2 className="text-lg font-medium ml-auto">
                    افزودن پست جدید
                </h2>
                <div className="w-full sm:w-auto flex mt-4 sm:mt-0">
                    <button className=" mr-2 dropdown-toggle btn btn-primary shadow-md flex items-center" aria-expanded="false"> ذخیره<i className="w-4 h-4 mr-2" data-feather="chevron-down" /> </button>
                </div>
            </div>
            <div className="pos intro-y grid grid-cols-12 gap-5 mt-5">
                {/* BEGIN: Post Content */}
                <div className="intro-y col-span-12 lg:col-span-8">
                    <input type="text" className="intro-y form-control py-3 px-4 box pl-10 placeholder-theme-13" value={data.title} name='title' onChange={changeHandler} placeholder="عنوان" />
                    <div className="post intro-y overflow-hidden box mt-5">
                        <div className="post__tabs nav nav-tabs flex-col sm:flex-row bg-gray-300 dark:bg-dark-2 text-gray-600" role="tablist">
                            <a title="Fill in the article content" data-toggle="tab" data-target="#content" href="javascript:;" className="tooltip w-full sm:w-40 py-4 text-center flex justify-center items-center active" id="content-tab" role="tab" aria-controls="content" aria-selected="true"> <i data-feather="file-text" className="w-4 h-4 ml-2" /> محتوا </a>
                        </div>
                        <div className="post__content tab-content">
                            <div id="content" className="tab-pane p-5 active" role="tabpanel" aria-labelledby="content-tab" >
                                <div className="border border-gray-200 dark:border-dark-5 rounded-md p-5">
                                    <div className="font-medium flex items-center border-b border-gray-200 dark:border-dark-5 pb-5"> <i data-feather="chevron-down" className="w-4 h-4 ml-2" /> محتوای متن </div>
                                    <div className="mt-5" >
                                        <ReactQuill name="content" value={data.content} onChange={(text, delta, source, editor) => {
                                            if (source == 'user') {
                                                setData({
                                                    ...data,
                                                    content: text,
                                                })
                                            }
                                        }} />
                                    </div>
                                </div>
                                <div className="border border-gray-200 dark:border-dark-5 rounded-md p-5 mt-5">
                                    <div className="font-medium flex items-center border-b border-gray-200 dark:border-dark-5 pb-5"> <i data-feather="chevron-down" className="w-4 h-4 ml-2" /> زیرنویس و تصاویر </div>
                                    <div className="mt-5">
                                        <div>
                                            <label htmlFor="post-form-7" className="form-label"> کپشن </label>
                                            <input id="post-form-7" type="text" value={data.caption} onChange={changeHandler} className="form-control" placeholder="کپشن را بنویسید" />
                                        </div>
                                        <div className="mt-3">
                                            <label className="form-label">آپلود تصویر</label>
                                            <div className="border-2 border-dashed dark:border-dark-5 rounded-md pt-4">
                                                <div className="flex flex-wrap px-4">
                                                    <div className="w-24 h-24 relative image-fit mb-5 ml-5 cursor-pointer zoom-in">
                                                        <img className="rounded-md" alt="Rubick Tailwind HTML Admin Template" src="dist\images\preview-3.jpg" />
                                                        <div title="Remove this image?" className="tooltip w-5 h-5 flex items-center justify-center absolute rounded-full text-white bg-theme-6 left-0 top-0 -ml-2 -mt-2"> <i data-feather="x" className="w-4 h-4" /> </div>
                                                    </div>
                                                </div>
                                                <div className="px-4 pb-4 flex items-center cursor-pointer relative">
                                                    <i data-feather="image" className="w-4 h-4 ml-2" /> <span className="text-theme-1 dark:text-theme-10 ml-1">فایل را آپلود کنید</span> یا بکشید و بیاندازید
                                                    <input type="file" value={data.main_image} onChange={changeHandler} className="w-full h-full top-0 left-0 absolute opacity-0" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* END: Post Content */}
                {/* BEGIN: Post Info */}
                <div className="col-span-12 lg:col-span-4">
                    <div className="intro-y box p-5">
                        <div>
                            <label className="form-label">نویسنده:</label>
                            <div className="dropdown">
                                <div className="dropdown-toggle btn w-full btn-outline-secondary dark:bg-dark-2 dark:border-dark-2 flex items-center justify-start" role="button" aria-expanded="false">
                                    {userE[0]}
                                </div>
                                <div className="dropdown-menu w-full">
                                    <div className="dropdown-menu__content box dark:bg-dark-1 p-2">
                                        {userE}

                                    </div>
                                </div>
                            </div>
                        </div>
                
                        <SelectInput
                         key={1} label={'دسته‌بندی'} 
                         placeHolder={'انتخاب دسته بندی'} 
                         multiple={true} choises={categoryE}
                         />
                           <SelectInput
                         key={2} label={'برچسب ها'} 
                         placeHolder={'انتخاب تگ'} 
                         multiple={true} choises={tagE}
                         />
                        <div className="form-check flex-col items-start mt-3">
                            <label htmlFor="post-form-5" className="form-check-label ml-0 mb-2">منتشرشده</label>
                            <input id="post-form-5" name='is_published' checked={data.is_pulished} onChange={changeHandler} className="form-check-switch" type="checkbox" />
                        </div>
                        <div className="form-check flex-col items-start mt-3">
                            <label htmlFor="post-form-6" className="form-check-label ml-0 mb-2">نمایش نام نویسنده</label>
                            <input id="post-form-6" name='show_author' checked={data.show_author} onChange={changeHandler} className="form-check-switch" type="checkbox" />
                        </div>
                    </div>
                </div>
                {/* END: Post Info */}
            </div>
        </div>
    )
}
export default AddPostForm

