import React, { useState } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';
import { toast } from 'react-toastify';
import {Link} from "react-router-dom";

const Register = () => {
    const validationSchema = Yup.object({
        user_name: Yup.string().required('این فیلد اجباری است'),
        email: Yup.string().email('ایمیل نامعتبر است').required('این فیلد اجباری است'),
        password: Yup.string().min(8, 'رمزعبور باید حداقل 8 کاراکتر باشد').required('این فیلد اجباری است'),
        confirm_password: Yup.string()
            .oneOf([Yup.ref('password'), null], 'رمزعبور‌ها باید مطابقت داشته باشند')
            .required('این فیلد اجباری است'),
    });
    const [passwordStrength, setPasswordStrength] = useState(0);


    const checkPasswordStrength = (password) => {
        let strength = 0;
        if (password.length >= 8) strength += 1;
        if (/[A-Z]/.test(password)) strength += 1;
        if (/[0-9]/.test(password)) strength += 1;
        if (/[^A-Za-z0-9]/.test(password)) strength += 1;
        setPasswordStrength(strength);
    };

    const handleSubmit = (values) => {
        axios.post(`${process.env.REACT_APP_BASE_URL}/user/register/`,values)
        .then((res)=>{
            toast.success( <div className="text-lg font-medium">{res.details}</div>)
        })
        .catch((error)=>{
            toast.error(<div className="text-lg font-medium">{error.response.data.details}</div>)
        })
        
    };

    return (
        <div className="h-screen xl:h-auto flex py-5 xl:py-0 my-10 xl:my-0">
            <div
                className="my-auto mx-auto xl:mr-20 bg-white dark:bg-dark-1 xl:bg-transparent px-5 sm:px-8 py-8 xl:p-0 rounded-md shadow-md xl:shadow-none w-full sm:w-3/4 lg:w-2/4 xl:w-auto">
                <h2 className="intro-x font-bold text-2xl xl:text-3xl text-center xl:text-right">
                    ثبت نام
                </h2>
                <div className="intro-x mt-2 text-gray-500 dark:text-gray-500 xl:hidden text-center">چند کلیک دیگر برای
                    ورود به اکانت خود دارید . همه حساب های تجارت الکترونیکی خود را در یک مکان مدیریت کنید
                </div>


                <Formik
                    initialValues={{user_name: '', email: '', password: '', confirm_password: ''}}
                    validationSchema={validationSchema}
                    onSubmit={handleSubmit}
                >
                    {({setFieldValue}) => (
                        <Form className="intro-x mt-8">
                            <div className="intro-x">
                                <Field
                                    type="text"
                                    name="user_name"
                                    className="login__input form-control py-3 px-4 border-gray-300 block"
                                    placeholder=" نام کاربری "
                                />
                                <ErrorMessage name="user_name" component="div"
                                              className="text-lg text-theme-6  leading-none mt-3"/>
                            </div>

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
                                    onChange={(e) => {
                                        const {value} = e.target;
                                        checkPasswordStrength(value);
                                        setFieldValue('password', value);
                                    }}
                                />
                                <div className="intro-x w-full grid grid-cols-12 gap-4 h-1 mt-3">
                                    <div
                                        className={`col-span-3 h-full rounded ${passwordStrength >= 1 ? 'bg-theme-9' : 'bg-gray-200 dark:bg-dark-2'}`}/>
                                    <div
                                        className={`col-span-3 h-full rounded ${passwordStrength >= 2 ? 'bg-theme-9' : 'bg-gray-200 dark:bg-dark-2'}`}/>
                                    <div
                                        className={`col-span-3 h-full rounded ${passwordStrength >= 3 ? 'bg-theme-9' : 'bg-gray-200 dark:bg-dark-2'}`}/>
                                    <div
                                        className={`col-span-3 h-full rounded ${passwordStrength >= 4 ? 'bg-theme-9' : 'bg-gray-200 dark:bg-dark-2'}`}/>
                                </div>
                                {passwordStrength >= 3 && <div className="text-theme-9 mt-2">پسورد قوی</div>}
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
                                <button
                                    type="submit"
                                    className="btn btn-primary py-3 px-4 w-full xl:w-32 xl:ml-3 align-top"

                                >
                                    ثبت نام
                                </button>
                                <Link to='/user/login/'
                                      className="btn btn-outline-secondary py-3 px-4 w-full xl:w-32 mt-3 xl:mt-0 align-top">ورود</Link>
                            </div>
                        </Form>
                    )}
                </Formik>
            </div>
        </div>
    );
};

export default Register;
