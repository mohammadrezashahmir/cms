import React, {useContext} from 'react';
import {Formik, Form, Field, ErrorMessage} from 'formik';
import * as Yup from 'yup';
import axios from 'axios';
import {toast} from 'react-toastify';
import {AuthContext} from "../../context/AuthContext";
import {Link} from "react-router-dom";

const Login = () => {
    const validationSchema = Yup.object({
        email: Yup.string().email('ایمیل نامعتبر است').required('این فیلد اجباری است'),
        password: Yup.string().required('این فیلد اجباری است'),
    });
    const {login} = useContext(AuthContext)

    const handleSubmit = (values) => {
        axios.post(`${process.env.REACT_APP_BASE_URL}/user/login/`, values)
            .then((res) => {
                toast.success(<div className="text-lg font-medium">{res.data.details}</div>)
                login(res.data.access, res.data.refresh)

            })
            .catch((error) => {
                toast.error(<div className="text-lg font-medium">{error.response.data.details}</div>)
            })

    };

    return (
        <div className="h-screen xl:h-auto flex py-5 xl:py-0 my-10 xl:my-0">
            <div
                className="my-auto mx-auto xl:mr-20 bg-white dark:bg-dark-1 xl:bg-transparent px-5 sm:px-8 py-8 xl:p-0 rounded-md shadow-md xl:shadow-none w-full sm:w-3/4 lg:w-2/4 xl:w-auto">
                <h2 className="intro-x font-bold text-2xl xl:text-3xl text-center xl:text-right">
                    ورود
                </h2>
                <div className="intro-x mt-2 text-gray-500 dark:text-gray-500 xl:hidden text-center">چند
                    کلیک دیگر برای ورود به اکانت خود دارید . همه حساب های تجارت الکترونیکی خود را در یک مکان
                    مدیریت کنید
                </div>


                <Formik
                    initialValues={{email: '', password: ''}}
                    validationSchema={validationSchema}
                    onSubmit={handleSubmit}
                >
                    {({setFieldValue}) => (
                        <Form className="intro-x mt-8">
                            <div className="intro-x mt-4">
                                <Field
                                    type="email"
                                    name="email"
                                    className="login__input form-control py-3 px-4 border-gray-300 block"
                                    placeholder="ایمیل"
                                />
                                <ErrorMessage name="email" component="div"
                                              className="text-lg text-theme-6  leading-none mt-3"/>
                            </div>

                            <div className="intro-x mt-4">
                                <Field
                                    type="password"
                                    name="password"
                                    className="login__input form-control py-3 px-4 border-gray-300 block"
                                    placeholder="رمزعبور"
                                />
                                <ErrorMessage name="password" component="div"
                                              className="text-lg text-theme-6  leading-none mt-3"/>
                            </div>
                            <div
                                className="intro-x flex text-theme-1 dark:text-gray-600 text-xs sm:text-sm mt-4">
                                <Link to='/user/forget/'>فراموشی رمز عبور؟</Link>
                            </div>
                            <div className="intro-x mt-5 xl:mt-8 text-center xl:text-right">
                                <button
                                    type="submit"
                                    className="btn btn-primary py-3 px-4 w-full xl:w-32 xl:ml-3 align-top"

                                >
                                    ورود
                                </button>
                                <Link to='/user/register/'
                                      className="btn btn-outline-secondary py-3 px-4 w-full xl:w-32 mt-3 xl:mt-0 align-top">ثبت
                                    نام</Link>
                            </div>
                        </Form>
                    )}
                </Formik>
            </div>
        </div>
    );
};

export default Login;
