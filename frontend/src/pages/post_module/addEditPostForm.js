import React, {useEffect, useState} from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import {Formik, Form, Field, ErrorMessage} from 'formik';
import * as Yup from 'yup';
import Select from 'react-select';
import {toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {useParams} from 'react-router-dom';
import {deleteDataFromServer, getDataFromServer, sendDataToServer} from '../../services/api';
import {convertToFormData} from "../../services/helper";
import axios from "axios";
import {usePosts} from "../../context/PostsContext";
import {useAuth} from "../../context/AuthContext";
import GalleryItem from "../../components/post_module/galleryItem";
import useModal from "../../hooks/bootstrapHook/modal";
import CustomModal from "../../components/bootstrapCom/modal";
import {DynamicForm} from "../../components/forms/form";

function AddEditPostForm() {
    const {id} = useParams();
    const {category, tag, addTag,addCategory} = usePosts()
    const [gallery, setGallery] = useState([])
    const {showModal, setShowModal, modalParam, setModalParam} = useModal()
    const {showModal: showModalTag, setShowModal: setShowModalTag} = useModal();
    const {showModal: showModalCat, setShowModal: setShowModalCat} = useModal()
    const {adminUsers} = useAuth()
    const [mainImageSrc, setMainImageSrc] = useState(null)
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
    const deleteGallery = (id) => {
        deleteDataFromServer(`/api/posts/gallery/${id}/`)
            .then(res => {
                const filtered = gallery.filter(item => item.id != id)
                setGallery(filtered)
            })
    }
    useEffect(() => {
        const fetchAPI = async () => {
            if (id) {
                const data = await getDataFromServer(`/api/posts/manage/${id}/`)
                if (data) {
                    const imageResponse = await axios.get(data.main_image, {responseType: 'blob'});
                    const imageUrl = data.main_image;
                    const imageName = imageUrl.substring(imageUrl.lastIndexOf('/') + 1);
                    const mainImageFile = new File([imageResponse.data], imageName, {type: imageResponse.data.type});
                    setInitialValues({
                        title: data.title,
                        content: data.content,
                        caption: data.caption,
                        main_image: mainImageFile,
                        author: data.author,
                        category: data.category,
                        tags: data.tags,
                        is_published: data.is_published,
                        show_author: data.show_author,
                    });
                    setMainImageSrc(data.main_image)
                    setGallery(data.gallery)
                }
            }
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
                                sendDataToServer(url, formData, method)
                                    .then((res) => {
                                        toast.success(res.detail ||
                                            <div className="text-lg font-medium"> {id ? 'ویرایش ' : 'ایجاد '}پست با
                                                موفقیت انجام شد </div>);
                                        setFieldValue('gallery', []);
                                        if (!id) {
                                            resetForm();
                                        } else {
                                            setMainImageSrc(res.main_image)
                                            setGallery(res.gallery)
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
                                                                            {mainImageSrc ?
                                                                                <div
                                                                                    className="w-24 h-24 relative image-fit mb-5 ml-5 cursor-pointer zoom-in">
                                                                                    <img className="rounded-md"
                                                                                         alt="عکس پست"
                                                                                         src={mainImageSrc}/>
                                                                                </div> :
                                                                                <>
                                                                                    <svg
                                                                                        xmlns="http://www.w3.org/2000/svg"
                                                                                        width="24" height="24"
                                                                                        viewBox="0 0 24 24" fill="none"
                                                                                        stroke="currentColor"
                                                                                        strokeWidth="1.5"
                                                                                        strokeLinecap="round"
                                                                                        strokeLinejoin="round"
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
                                                                            {
                                                                                gallery.map(image =>
                                                                                    <GalleryItem key={image.id}
                                                                                                 image={image}
                                                                                                 setShow={setShowModal}
                                                                                                 setModalParam={setModalParam}
                                                                                    />
                                                                                )
                                                                            }
                                                                        </div>
                                                                        <div
                                                                            className="px-4 pb-4 flex items-center cursor-pointer relative">
                                                                            <svg xmlns="http://www.w3.org/2000/svg"
                                                                                 width="24" height="24"
                                                                                 viewBox="0 0 24 24"
                                                                                 fill="none" stroke="currentColor"
                                                                                 strokeWidth="1.5"
                                                                                 strokeLinecap="round"
                                                                                 strokeLinejoin="round"
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
                                        <div className="col-span-12 lg:col-span-4">
                                            <div className="intro-y box p-5">
                                                <div>
                                                    <label className="form-label">نویسنده:</label>
                                                    <Select
                                                        name="author"
                                                        placeholder="انتخاب..."
                                                        options={adminUsers.map((user) => ({
                                                            value: user.id,
                                                            label: user.username,
                                                        }))}
                                                        onChange={(option) => setFieldValue('author', option ? option.value : null)}
                                                        value={
                                                            values.author
                                                                ? {
                                                                    value: values.author,
                                                                    label: adminUsers.find(user => user.id === values.author)?.username || ''
                                                                }
                                                                : null
                                                        }
                                                    />

                                                    <ErrorMessage name="author" component="div"
                                                                  className="text-theme-6 text-md mt-1"/>
                                                </div>
                                                <div className="mt-3">
                                                    <label htmlFor="category" className="form-label">دسته‌بندی</label>
                                                    <div className="flex">
                                                        <Select
                                                            name="category"
                                                            className='flex-grow'
                                                            placeholder="انتخاب..."
                                                            options={category.map((category) => ({
                                                                value: category.id,
                                                                label: category.title,
                                                            }))}
                                                            onChange={(option) => setFieldValue('category', option ? option.map(item => item.value) : [])}
                                                            isMulti
                                                            value={
                                                                values.category.map(categoryId => {
                                                                    const categoryI = category.find(cat => cat.id === categoryId);
                                                                    return {
                                                                        value: categoryI.id,
                                                                        label: categoryI.title
                                                                    };
                                                                })
                                                            }
                                                        />
                                                        <button type='button'
                                                                className="btn btn-primary mx-1 fit-content"
                                                                onClick={() => setShowModalCat(true)}>+
                                                        </button>
                                                    </div>
                                                    <ErrorMessage name="category" component="div"
                                                                  className="text-theme-6 text-md mt-1"/>
                                                </div>
                                                <div className="mt-3">
                                                    <label htmlFor="tags" className="form-label">برچسب‌ها</label>
                                                    <div className="flex">
                                                        <Select
                                                            name="tags"
                                                            placeholder="انتخاب..."
                                                            className='flex-grow'
                                                            options={tag.map((tag) => ({
                                                                value: tag.id,
                                                                label: tag.title,
                                                            }))}
                                                            onChange={(option) => setFieldValue('tags', option ? option.map(item => item.value) : [])}
                                                            isMulti
                                                            value={
                                                                values.tags.map(tagId => {
                                                                    const tagI = tag.find(tag => tag.id === tagId);
                                                                    return {
                                                                        value: tagI.id,
                                                                        label: tagI.title
                                                                    };
                                                                })
                                                            }
                                                        />
                                                        <button type='button'
                                                                className="btn btn-primary mx-1 fit-content"
                                                                onClick={() => setShowModalTag(true)}>+
                                                        </button>
                                                    </div>
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
                                    </div>
                                </Form>
                            )}
                        </Formik>
                    </>
                }
            </div>
            <CustomModal modalSet={{
                title: 'تایید حذف',
                content: 'آیا از حذف این آیتم مطمئنید؟',
                confirmTitle: 'بله'
            }} show={showModal} setShow={setShowModal} handleConfirm={() => deleteGallery(modalParam.imageId)}/>

            <CustomModal modalSet={{
                title: 'ایجاد تگ',
                content: <DynamicForm fields={
                    [
                        {
                            name: 'title',
                            label: 'عنوان',
                            validation: Yup.string().required('این فیلد اجباری است'),
                            initialValue: '',
                            placeholder: 'عنوان را بنویسید...'
                        },
                        {
                            name: 'url_title',
                            label: 'عنوان در url',
                            initialValue: '',
                            placeholder: 'عنوان در url ...'
                        },
                    ]
                } onSubmit={addTag}/>,
                confirmTitle: 'بستن',
                confirmColor: 'primary'
            }} show={showModalTag} setShow={setShowModalTag} handleConfirm={() => {
            }}/>
            <CustomModal modalSet={{
                title: 'ایجاد دسته بندی',
                content: <DynamicForm fields={
                    [
                        {
                            name: 'parent',
                            type: 'select',
                            isMulti: false,
                            options: category,
                            label: 'پدر',
                            placeholder: 'پدر دسته بندی...',
                            isClearable:true,
                        },
                        {
                            name: 'title',
                            label: 'عنوان',
                            validation: Yup.string().required('این فیلد اجباری است'),
                            initialValue: '',
                            placeholder: 'عنوان را بنویسید...'
                        },
                        {
                            name: 'url_title',
                            label: 'عنوان در url',
                            placeholder: 'عنوان در url ...'
                        },
                    ]
                } onSubmit={addCategory} />,
                confirmTitle: 'بستن'
            }} show={showModalCat} setShow={setShowModalCat} handleConfirm={() => {
            }}/>
        </>
    );
}

export default AddEditPostForm;
