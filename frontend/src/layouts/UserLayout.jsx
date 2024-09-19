import React from 'react';
import {ProfRoute} from "../components/user_module/protectRoute";
import {Outlet} from "react-router-dom";
import logo from "../assets/dist/images/logo.svg";
import bgWoman from "../assets/dist/images/illustration.svg";

const UserLayout = () => {
    return (
        <ProfRoute>
            <div className='login'>
                <div className="container sm:px-10">
                    <div className="block xl:grid grid-cols-2 gap-4">
                        <div className="hidden xl:flex flex-col min-h-screen">
                            <div className="-intro-x flex items-center pt-5">
                                <img alt="Logo" className="w-6" src={logo}/>
                                <span className="text-white text-lg mr-3">رو<span
                                    className="font-medium">بیک</span> </span>
                            </div>
                            <div className="my-auto">
                                <img alt="bg" className="-intro-x w-1/2 -mt-16" src={bgWoman}/>
                                <div className="-intro-x text-white font-medium text-4xl leading-tight mt-10">
                                    تنها چند کلیک
                                    <br/> ساخت اکانت تان
                                </div>
                                <div
                                    className="-intro-x mt-5 text-lg text-white text-opacity-70 dark:text-gray-500">تمامی
                                    اکانت های خود را در یک مکان مدیریت کنید
                                </div>
                            </div>
                        </div>
                        <Outlet/>
                    </div>
                </div>
            </div>
        </ProfRoute>
    );
};

export default UserLayout;