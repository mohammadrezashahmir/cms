import React from 'react';
import {ErrorMessage, Field, Form, Formik} from "formik";
import * as Yup from "yup";
import axios from "axios";
import {toast} from "react-toastify";
import {useNavigate, useParams} from "react-router-dom";

const ResetPassword = () => {
    const {code} = useParams()
    const navigate = useNavigate()
    const validationSchema = Yup.object({
        password: Yup.string().min(8, 'رمزعبور باید حداقل 8 کاراکتر باشد').required('این فیلد اجباری است'),
        confirm_password: Yup.string()
            .oneOf([Yup.ref('password'), null], 'رمزعبور‌ها باید مطابقت داشته باشند')
            .required('این فیلد اجباری است'),
    });

    const handleSubmit = (values) => {
        axios.post(`${process.env.REACT_APP_BASE_URL}/user/reset-password/${code}/`, values)
            .then((res) => {
                toast.success(<div className="text-lg font-medium">{res.data.details}</div>)
                navigate("/user/login/")
            })
            .catch((error) => {
                toast.error(<div className="text-lg font-medium">{error.response?.data.details}</div>)
            })

    };
    return (
        <div className="h-screen xl:h-auto flex py-5 xl:py-0 my-10 xl:my-0">
            <div
                className="my-auto mx-auto xl:mr-20 bg-white dark:bg-dark-1 xl:bg-transparent px-5 sm:px-8 py-8 xl:p-0 rounded-md shadow-md xl:shadow-none w-full sm:w-3/4 lg:w-2/4 xl:w-auto">
                <h2 className="intro-x font-bold text-2xl xl:text-3xl text-center xl:text-right">
                    بازیابی رمزعبور
                </h2>
                <div className="intro-x mt-2 text-gray-500 dark:text-gray-500  text-center xl:text-right">
                    رمزعبور جدیدتان را بسازید!
                </div>
                <Formik
                    initialValues={{password: '', confirm_password: ''}}
                    validationSchema={validationSchema}
                    onSubmit={handleSubmit}
                >
                    {() => (
                        <Form className="intro-x mt-8">
                            <div className="intro-x mt-4">
                                <Field
                                    type="password"
                                    name="password"
                                    className="login__input form-control py-3 px-4 border-gray-300 block"
                                    placeholder="رمزعبور جدید"
                                />
                                <ErrorMessage name="password" component="div"
                                              className="text-lg text-theme-6  leading-none mt-3"/>
                            </div>
                            <div className="intro-x mt-4">
                                <Field
                                    type="password"
                                    name="confirm_password"
                                    className="login__input form-control py-3 px-4 border-gray-300 block"
                                    placeholder="تایید رمزعبور"
                                />
                                <ErrorMessage name="confirm_password" component="div"
                                              className="text-lg text-theme-6  leading-none mt-3"/>
                            </div>
                            <div className="intro-x mt-5 xl:mt-8 text-center xl:text-right">
                                <button type="submit"
                                        className="btn btn-primary py-3 px-4 w-full xl:w-32 xl:ml-3 align-top">
                                    تایید
                                </button>
                            </div>
                        </Form>
                    )}
                </Formik>
            </div>
        </div>

    );
};

export default ResetPassword;