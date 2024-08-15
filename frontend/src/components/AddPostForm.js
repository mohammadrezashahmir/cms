import React, { useEffect, useState } from 'react';

// package:

import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import Select from 'react-select'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

//my module:

import { getDataFromServer, postDataToServer } from '../services/api';
import { convertToFormData } from "../services/helper";

function AddPostForm() {
    const [fetchedData, setFetchedData] = useState({
        category: [],
        tag: [],
        user: [],
    });

    useEffect(() => {
        const fetchAPI = async () => {
            setFetchedData({
                tag: await getDataFromServer('/api/posts/getTag/'),
                category: await getDataFromServer('/api/posts/getCategory/'),
                user: await getDataFromServer('/api/users/getAdminUsers/'),
            });
        };
        fetchAPI();
    }, []);

    const validationSchema = Yup.object({
        title: Yup.string().required('این فیلد اجباری است'),
        content: Yup.string().required('این فیلد اجباری است'),
        caption: Yup.string().required('این فیلد اجباری است'),
        main_image: Yup.mixed().required('این فیلد اجباری است'),
        gallery: Yup.array(),
        author: Yup.mixed().required('این فیلد اجباری است'),
        category: Yup.array().min(1, 'باید حداقل یک مورد انتخاب شود').required('این فیلد اجباری است'),
        tags: Yup.array().min(1, 'باید حداقل یک مورد انتخاب شود').required('این فیلد اجباری است'),
        is_published: Yup.boolean(),
        show_author: Yup.boolean(),
    });
    return (
        <>
            <Formik
                initialValues={{
                    title: '',
                    content: '',
                    caption: '',
                    main_image: '',
                    gallery: [],
                    author: '',
                    category: [],
                    tags: [],
                    is_published: true,
                    show_author: true,
                }}
                validationSchema={validationSchema}
                onSubmit={(values, { resetForm }) => {
                    const formData = convertToFormData(values);
                    postDataToServer('/api/posts/listCreate/', formData)
                        .then((res) => {
                            toast.success(res.detail ||
                                <div className="text-lg  font-medium">.پست با موفقیت اضافه شد</div>);
                            resetForm();  // ریست کردن فرم پس از موفقیت
                        })
                        .catch((error) => {
                            toast.error(error.response?.data?.detail ||
                                <div className="text-lg  font-medium">.خطایی رخ داده است</div>);
                        });

                }}
            >
                {({ setFieldValue, values }) => (
                    <Form className="content">
                        <div className="intro-y flex flex-col sm:flex-row items-center mt-8">
                            <h2 className="text-lg font-medium ml-auto">افزودن پست جدید</h2>
                            <div className="w-full sm:w-auto flex mt-4 sm:mt-0">
                                <button type="submit" className="mr-2  btn btn-primary  flex items-center">
                                    ذخیره
                                </button>
                            </div>
                        </div>

                        <div className="pos intro-y grid grid-cols-12 gap-5 mt-5">
                            {/* BEGIN: Post Content */}
                            <div className="intro-y col-span-12 lg:col-span-8">
                                <Field
                                    type="text"
                                    name="title"
                                    className="intro-y form-control py-3 px-4 box pl-10 placeholder-theme-13"
                                    placeholder="عنوان"
                                />
                                <ErrorMessage name="title" component="div" className="text-theme-6 text-lg mt-1" />

                                <div className="post intro-y overflow-hidden box mt-5">
                                    <div className="post__content tab-content">
                                        <div id="content" className="tab-pane p-5 active" role="tabpanel"
                                            aria-labelledby="content-tab">
                                            <div className="border border-gray-200 dark:border-dark-5 rounded-md p-5">
                                                <div
                                                    className="font-medium flex items-center border-b border-gray-200 dark:border-dark-5 pb-5">
                                                    <i data-feather="chevron-down" className="w-4 h-4 ml-2" /> محتوای متن
                                                </div>
                                                <div className="mt-5">
                                                    <ReactQuill
                                                        name="content"
                                                        value={values.content}
                                                        onChange={(text) => setFieldValue('content', text)}
                                                    />
                                                    <ErrorMessage name="content" component="div"
                                                        className="text-theme-6 text-lg mt-1" />
                                                </div>
                                            </div>

                                            <div
                                                className="border border-gray-200 dark:border-dark-5 rounded-md p-5 mt-5">
                                                <div
                                                    className="font-medium flex items-center border-b border-gray-200 dark:border-dark-5 pb-5">
                                                    <i data-feather="chevron-down" className="w-4 h-4 ml-2" /> زیرنویس و
                                                    تصاویر
                                                </div>
                                                <div className="mt-5">
                                                    <div>
                                                        <label htmlFor="caption" className="form-label"> کپشن </label>
                                                        <Field
                                                            id="caption"
                                                            type="text"
                                                            name="caption"
                                                            className="form-control"
                                                            placeholder="کپشن را بنویسید"
                                                        />
                                                        <ErrorMessage name="caption" component="div"
                                                            className="text-theme-6 text-lg mt-1" />

                                                    </div>
                                                    <div className="mt-3">
                                                        <label className="form-label">آپلود تصویر</label>
                                                        <div
                                                            className="border-2 border-dashed dark:border-dark-5 rounded-md pt-4">
                                                            <div
                                                                className="px-4 pb-4 flex items-center cursor-pointer relative">
                                                                <input
                                                                    type="file"
                                                                    name="main_image"
                                                                    onChange={(event) => {
                                                                        setFieldValue('main_image', event.currentTarget.files[0]);
                                                                    }}
                                                                    className="w-full"
                                                                />
                                                            </div>


                                                        </div>
                                                        <ErrorMessage name="main_image" component="div"
                                                            className="text-theme-6 text-lg mt-1" />
                                                        <label className="form-label mt-3">آپلود گالری تصاویر</label>
                                                        <div
                                                            className="border-2  border-dashed dark:border-dark-5 rounded-md p-3">
                                                            <input
                                                                type="file"
                                                                name="gallery"
                                                                multiple
                                                                onChange={(event) => {
                                                                    const files = Array.from(event.currentTarget.files);
                                                                    setFieldValue('gallery', files);
                                                                }}
                                                                className="form-control"
                                                            />

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
                                        <Select
                                            name="author"
                                            placeholder="انتخاب..."
                                            options={fetchedData.user.map((user) => ({
                                                value: user.id,
                                                label: user.username,
                                            }))}
                                            onChange={(option) => setFieldValue('author', option.value)}
                                            defaultValue={fetchedData.user.length ? {
                                                value: fetchedData.user[0].id,
                                                label: fetchedData.user[0].username
                                            } : null}
                                        />
                                        <ErrorMessage name="author" component="div"
                                            className="text-theme-6 text-lg mt-1" />
                                    </div>
                                    <div className="mt-3">
                                        <label htmlFor="category" className="form-label">دسته‌بندی</label>
                                        <Select
                                            name="category"
                                            placeholder="انتخاب..."
                                            options={fetchedData.category.map((category) => ({
                                                value: category.id,
                                                label: category.title,
                                            }))}
                                            onChange={(option) => setFieldValue('category', option ? option.map((item) => item.value) : [])}
                                            isMulti
                                        />
                                        <ErrorMessage name="category" component="div"
                                            className="text-theme-6 text-lg mt-1" />
                                    </div>
                                    <div className="mt-3">
                                        <label htmlFor="tags" className="form-label">برچسب‌ها</label>
                                        <Select
                                            name="tags"
                                            placeholder="انتخاب..."
                                            options={fetchedData.tag.map((tag) => ({
                                                value: tag.id,
                                                label: tag.title,
                                            }))}
                                            onChange={(option) => setFieldValue('tags', option ? option.map((item) => item.value) : [])}
                                            isMulti
                                        />
                                        <ErrorMessage name="tags" component="div"
                                            className="text-theme-6 text-lg mt-1" />
                                    </div>
                                    <div className="form-check flex-col items-start mt-3">
                                        <label htmlFor="is_published"
                                            className="form-check-label ml-0 mb-2">منتشرشده</label>
                                        <Field type="checkbox" name="is_published" className="form-check-switch" />
                                    </div>
                                    <div className="form-check flex-col items-start mt-3">
                                        <label htmlFor="show_author" className="form-check-label ml-0 mb-2">نمایش نام
                                            نویسنده</label>
                                        <Field type="checkbox" name="show_author" className="form-check-switch" />
                                    </div>
                                </div>
                            </div>
                            {/* END: Post Info */}
                        </div>
                    </Form>
                )}
            </Formik>
            <ToastContainer />
        </>
    );
}

export default AddPostForm;
