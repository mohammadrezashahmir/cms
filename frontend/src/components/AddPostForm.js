import React, {useEffect, useState} from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import {Formik, Form, Field, ErrorMessage} from 'formik';
import * as Yup from 'yup';
import Select from 'react-select';
import {ToastContainer, toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {useParams} from 'react-router-dom';
import {getDataFromServer, sendDataToServer, deleteDataFromServer} from '../services/api';
import {convertToFormData} from "../services/helper";
import useConfirmationModal from "../hooks/confirmation";
import ConfirmationModal from "../components/confirmationModal";
import axios from "axios";

function AddPostForm() {
    const {id} = useParams();
    const [fetchedData, setFetchedData] = useState({
        category: [],
        tag: [],
        user: [],
        gallery: [],
        main_image: null,
    });
    const [loading, setLoading] = useState(true);
    const [initialValues, setInitialValues] = useState({
        title: '',
        content: '',
        caption: '',
        main_image: '',
        gallery: [],
        author: undefined,
        category: [],
        tags: [],
        is_published: true,
        show_author: true,
    });
    const deleteGalleryHandler = async (id) => {
        deleteDataFromServer(`/api/posts/gallery/${id}/`)
            .then(res => {
                const filtered = fetchedData.gallery.filter(item => item.id != id)
                setFetchedData({...fetchedData, gallery: filtered})
            })
    }
    const {
        showModal,
        handleShowModal,
        handleConfirm,
        handleCloseModal,
    } = useConfirmationModal(deleteGalleryHandler);
    useEffect(() => {
        const fetchAPI = async () => {
            if (id) {

                const gottenData = await getDataFromServer(`/api/posts/manage/${id}/`)
                if (gottenData) {
                    setFetchedData(
                        {...fetchedData, gallery: gottenData.gallery, main_image: gottenData.main_image}
                    )
                    const imageResponse = await axios.get(gottenData.main_image, {responseType: 'blob'});
                    const imageUrl = gottenData.main_image;
                    const imageName = imageUrl.substring(imageUrl.lastIndexOf('/') + 1);
                    const mainImageFile = new File([imageResponse.data], imageName, {type: imageResponse.data.type});
                    setInitialValues({
                        ...gottenData,
                        main_image: mainImageFile,
                        gallery: []
                    });
                }
            }
            const category = await getDataFromServer('/api/posts/getCategory/');
            const tag = await getDataFromServer('/api/posts/getTag/');
            const user = await getDataFromServer('/api/users/getAdminUsers/');
            setFetchedData(prevState => {
                return {...prevState, category, tag, user}
            });
            setLoading(false);
        };
        fetchAPI();
    }, [id,]);

    const validationSchema = Yup.object({
        title: Yup.string().required('این فیلد اجباری است'),
        content: Yup.string().required('این فیلد اجباری است'),
        caption: Yup.string().required('این فیلد اجباری است'),
        main_image: id ? Yup.mixed() : Yup.mixed().required('این فیلد اجباری است'),
        gallery: Yup.array(),
        author: Yup.mixed().required('این فیلد اجباری است'),
        category: Yup.array().min(1, 'باید حداقل یک مورد انتخاب شود').required('این فیلد اجباری است'),
        tags: Yup.array().min(1, 'باید حداقل یک مورد انتخاب شود').required('این فیلد اجباری است'),
        is_published: Yup.boolean(),
        show_author: Yup.boolean(),
    });

    return (
        <>
            <div>
                {loading ? 'loading' :
                    <>
                        <Formik
                            enableReinitialize={true}
                            initialValues={initialValues}
                            validationSchema={validationSchema}
                            onSubmit={(values, {resetForm, setFieldValue}) => {
                                const formData = convertToFormData(values);
                                const method = id ? 'PUT' : 'POST';
                                const url = id ? `/api/posts/manage/${id}/` : '/api/posts/manage/';
                                console.log(values)
                                sendDataToServer(url, formData, method)
                                    .then((res) => {
                                        toast.success(res.detail ||
                                            <div className="text-lg font-medium">.عملیات با موفقیت انجام شد</div>);
                                        document.querySelector("input[name='main_image']").value = "";
                                        document.querySelector("input[name='gallery']").value = ""
                                        setFieldValue('gallery', []);
                                        console.log(res)
                                        if (!id) {
                                            resetForm();
                                        } else {
                                            setFetchedData({
                                                ...fetchedData,
                                                main_image: res.main_image,
                                                gallery: res.gallery.map(item=>item)

                                            })
                                        }

                                    })
                                    .catch((error) => {
                                        toast.error(error.response?.data?.detail ||
                                            <div className="text-lg font-medium">.خطایی رخ داده است</div>);
                                    });
                            }}
                        >
                            {({setFieldValue, values}) => (
                                <Form className="content">
                                    <div className="intro-y flex flex-col sm:flex-row items-center mt-8">
                                        <h2 className="text-lg font-medium ml-auto">{id ? "ویرایش پست" : "افزودن پست جدید"
                                        }</h2>
                                        <div className="w-full sm:w-auto flex mt-4 sm:mt-0">
                                            <button type="submit" className="mr-2 btn btn-primary flex items-center">
                                                ذخیره
                                            </button>
                                        </div>
                                    </div>

                                    <div className="pos intro-y grid grid-cols-12 gap-5 mt-5">
                                        <div className="intro-y col-span-12 lg:col-span-8">
                                            <Field
                                                type="text"
                                                name="title"
                                                className="intro-y form-control py-3 px-4 box pl-10 placeholder-theme-13"
                                                placeholder="عنوان"
                                            />
                                            <ErrorMessage name="title" component="div"
                                                          className="text-theme-6 text-md mt-1"/>

                                            <div className="post intro-y overflow-hidden box mt-5">
                                                <div className="post__content tab-content">
                                                    <div id="content" className="tab-pane p-5 active" role="tabpanel"
                                                         aria-labelledby="content-tab">
                                                        <div
                                                            className="border border-gray-200 dark:border-dark-5 rounded-md p-5">
                                                            <div
                                                                className="font-medium flex items-center border-b border-gray-200 dark:border-dark-5 pb-5">
                                                                <i data-feather="chevron-down"
                                                                   className="w-4 h-4 ml-2"/> محتوای متن
                                                            </div>
                                                            <div className="mt-5">
                                                                <ReactQuill
                                                                    name="content"
                                                                    value={values.content}
                                                                    onChange={(text) => setFieldValue('content', text)}
                                                                />
                                                                <ErrorMessage name="content" component="div"
                                                                              className="text-theme-6 text-md mt-1"/>
                                                            </div>
                                                        </div>

                                                        <div
                                                            className="border border-gray-200 dark:border-dark-5 rounded-md p-5 mt-5">
                                                            <div
                                                                className="font-medium flex items-center border-b border-gray-200 dark:border-dark-5 pb-5">
                                                                <i data-feather="chevron-down"
                                                                   className="w-4 h-4 ml-2"/> زیرنویس و تصاویر
                                                            </div>
                                                            <div className="mt-5">
                                                                <div>
                                                                    <label htmlFor="caption"
                                                                           className="form-label"> کپشن </label>
                                                                    <Field
                                                                        id="caption"
                                                                        type="text"
                                                                        name="caption"
                                                                        className="form-control"
                                                                        placeholder="کپشن را بنویسید"
                                                                    />
                                                                    <ErrorMessage name="caption" component="div"
                                                                                  className="text-theme-6 text-md mt-1"/>

                                                                </div>
                                                                <div className="mt-3">
                                                                    <label className="form-label">آپلود تصویر</label>
                                                                    <div
                                                                        className="border-2 border-dashed dark:border-dark-5 rounded-md pt-4 flex flex-wrap">

                                                                        <div
                                                                            className="px-4 pb-4 flex items-center cursor-pointer relative">
                                                                            {fetchedData.main_image ?
                                                                                <div
                                                                                    className="w-24 h-24 relative image-fit mb-5 ml-5 cursor-pointer zoom-in">
                                                                                    <img className="rounded-md"
                                                                                         alt="عکس پست"
                                                                                         src={fetchedData.main_image}/>
                                                                                </div> :
                                                                                <>
                                                                                    <svg
                                                                                        xmlns="http://www.w3.org/2000/svg"
                                                                                        width="24" height="24"
                                                                                        viewBox="0 0 24 24" fill="none"
                                                                                        stroke="currentColor"
                                                                                        stroke-width="1.5"
                                                                                        stroke-linecap="round"
                                                                                        stroke-linejoin="round"
                                                                                        className="feather feather-image w-4 h-4 ml-2">
                                                                                        <rect x="3" y="3" width="18"
                                                                                              height="18" rx="2"
                                                                                              ry="2"></rect>
                                                                                        <circle cx="8.5" cy="8.5"
                                                                                                r="1.5"></circle>
                                                                                        <polyline
                                                                                            points="21 15 16 10 5 21"></polyline>
                                                                                    </svg>
                                                                                    <span
                                                                                        className="text-theme-1 dark:text-theme-10 ml-1">فایل را آپلود کنید</span>
                                                                                </>
                                                                            }
                                                                            <input
                                                                                type="file"
                                                                                name="main_image"
                                                                                onChange={(event) => {
                                                                                    setFieldValue('main_image', event.currentTarget.files[0]);
                                                                                }}
                                                                                className="w-full h-full top-0 left-0 absolute opacity-0"
                                                                            />
                                                                        </div>

                                                                    </div>
                                                                    <ErrorMessage name="main_image" component="div"
                                                                                  className="text-theme-6 text-md mt-1"/>
                                                                    <label className="form-label mt-3">آپلود گالری
                                                                        تصاویر</label>

                                                                    <div
                                                                        className="border-2  border-dashed dark:border-dark-5 rounded-md p-3">
                                                                        <div className="flex flex-wrap px-4">
                                                                            {fetchedData.gallery && fetchedData.gallery.map(image => {
                                                                                return (
                                                                                    <div key={image.id}
                                                                                         className="w-24 h-24 relative image-fit mb-5 ml-5 cursor-pointer zoom-in"
                                                                                    >
                                                                                        <img
                                                                                            className="rounded-md"
                                                                                            alt="عکس گالری"
                                                                                            src={image.image}
                                                                                        />
                                                                                        <div
                                                                                            className="tooltip w-5 h-5 flex items-center justify-center absolute rounded-full text-white bg-theme-6 left-0 top-0 -ml-2 -mt-2"
                                                                                            onClick={() => handleShowModal(image.id)}
                                                                                        >
                                                                                            <svg
                                                                                                xmlns="http://www.w3.org/2000/svg"
                                                                                                width="24"
                                                                                                height="24"
                                                                                                viewBox="0 0 24 24"
                                                                                                fill="none"
                                                                                                stroke="currentColor"
                                                                                                strokeWidth="1.5"
                                                                                                strokeLinecap="round"
                                                                                                strokeLinejoin="round"
                                                                                                className="feather feather-x w-4 h-4"
                                                                                            >
                                                                                                <line x1="18" y1="6"
                                                                                                      x2="6"
                                                                                                      y2="18"></line>
                                                                                                <line x1="6" y1="6"
                                                                                                      x2="18"
                                                                                                      y2="18"></line>
                                                                                            </svg>
                                                                                        </div>
                                                                                    </div>
                                                                                );
                                                                            })}

                                                                        </div>
                                                                        <div
                                                                            className="px-4 pb-4 flex items-center cursor-pointer relative">
                                                                            <svg xmlns="http://www.w3.org/2000/svg"
                                                                                 width="24" height="24"
                                                                                 viewBox="0 0 24 24"
                                                                                 fill="none" stroke="currentColor"
                                                                                 stroke-width="1.5"
                                                                                 stroke-linecap="round"
                                                                                 stroke-linejoin="round"
                                                                                 className="feather feather-image w-4 h-4 ml-2">
                                                                                <rect x="3" y="3" width="18" height="18"
                                                                                      rx="2" ry="2"></rect>
                                                                                <circle cx="8.5" cy="8.5"
                                                                                        r="1.5"></circle>
                                                                                <polyline
                                                                                    points="21 15 16 10 5 21"></polyline>
                                                                            </svg>
                                                                            <span
                                                                                className="text-theme-1 dark:text-theme-10 ml-1">فایل را آپلود کنید</span>

                                                                            <input
                                                                                type="file"
                                                                                name="gallery"
                                                                                multiple
                                                                                onChange={(event) => {
                                                                                    setFieldValue('gallery', Array.from(event.currentTarget.files));
                                                                                }}
                                                                                className="w-full h-full top-0 left-0 absolute opacity-0"
                                                                            />
                                                                        </div>

                                                                    </div>
                                                                    <ErrorMessage name="gallery" component="div"
                                                                                  className="text-theme-6 text-md mt-1"/>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        {/* END: Post Content */}

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
                                                        onChange={(option) => setFieldValue('author', option ? option.value : null)}
                                                        value={
                                                            values.author
                                                                ? {
                                                                    value: values.author,
                                                                    label: fetchedData.user.find(user => user.id === values.author)?.username || ''
                                                                }
                                                                : null
                                                        }
                                                    />

                                                    <ErrorMessage name="author" component="div"
                                                                  className="text-theme-6 text-md mt-1"/>
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
                                                        onChange={(option) => setFieldValue('category', option ? option.map(item => item.value) : [])}
                                                        isMulti
                                                        value={
                                                            values.category.map(categoryId => {
                                                                const category = fetchedData.category.find(cat => cat.id === categoryId);
                                                                return {
                                                                    value: category.id,
                                                                    label: category.title
                                                                };
                                                            })
                                                        }
                                                    />
                                                    <ErrorMessage name="category" component="div"
                                                                  className="text-theme-6 text-md mt-1"/>
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
                                                        onChange={(option) => setFieldValue('tags', option ? option.map(item => item.value) : [])}
                                                        isMulti
                                                        value={
                                                            values.tags.map(tagId => {
                                                                const tag = fetchedData.tag.find(tag => tag.id === tagId);
                                                                return {
                                                                    value: tag.id,
                                                                    label: tag.title
                                                                };
                                                            })
                                                        }
                                                    />
                                                    <ErrorMessage name="tags" component="div"
                                                                  className="text-theme-6 text-md mt-1"/>
                                                </div>

                                                <div className="form-check flex-col items-start mt-3">
                                                    <label htmlFor="is_published"
                                                           className="form-check-label ml-0 mb-2">منتشرشده</label>
                                                    <Field type="checkbox" name="is_published"
                                                           className="form-check-switch"/>
                                                </div>
                                                <div className="form-check flex-col items-start mt-3">
                                                    <label htmlFor="show_author" className="form-check-label ml-0 mb-2">نمایش
                                                        نام
                                                        نویسنده</label>
                                                    <Field type="checkbox" name="show_author"
                                                           className="form-check-switch"/>
                                                </div>

                                            </div>
                                        </div>
                                        {/* END: Post Info */}
                                    </div>
                                </Form>
                            )}
                        </Formik>
                        <ToastContainer/>
                    </>
                }
            </div>
            <ConfirmationModal
                show={showModal}
                onHide={handleCloseModal}
                onConfirm={handleConfirm}
                message="آیا از حذف این آیتم مطمئنید؟"
            />
        </>
    );
}

export default AddPostForm;
