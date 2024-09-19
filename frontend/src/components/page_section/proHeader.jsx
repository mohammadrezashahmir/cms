import React from 'react';
import {Dropdown, DropdownDivider, DropdownItem, DropdownMenu, DropdownToggle} from "react-bootstrap";
import {useAuth} from "../../context/AuthContext";
import {Link} from "react-router-dom";

const ProHeader = () => {
    const {currentUser, logout} = useAuth();
    return (
        <div className="top-bar">
            {/* BEGIN: Breadcrumb */}
            {/*<div className="-intro-x breadcrumb ml-auto hidden sm:flex"><a href>اپلیکیشن</a>*/}
            {/*    <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none"*/}
            {/*         stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"*/}
            {/*         className="feather feather-chevron-left breadcrumb__icon">*/}
            {/*        <polyline points="15 18 9 12 15 6"/>*/}
            {/*    </svg>*/}
            {/*    <a href className="breadcrumb--active">داشبرد</a></div>*/}
            {/*/!* END: Breadcrumb *!/*/}
            {/*/!* BEGIN: Search *!/*/}
            {/*<div className="intro-x relative ml-3 sm:ml-6">*/}
            {/*    <div className="search hidden sm:block">*/}
            {/*        <input type="text" className="search__input form-control border-transparent placeholder-theme-13"*/}
            {/*               placeholder="جستجو..."/>*/}
            {/*        <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none"*/}
            {/*             stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"*/}
            {/*             className="feather feather-search search__icon dark:text-gray-300">*/}
            {/*            <circle cx={11} cy={11} r={8}/>*/}
            {/*            <line x1={21} y1={21} x2="16.65" y2="16.65"/>*/}
            {/*        </svg>*/}
            {/*    </div>*/}
            {/*    <a className="notification sm:hidden" href>*/}
            {/*        <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none"*/}
            {/*             stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"*/}
            {/*             className="feather feather-search notification__icon dark:text-gray-300">*/}
            {/*            <circle cx={11} cy={11} r={8}/>*/}
            {/*            <line x1={21} y1={21} x2="16.65" y2="16.65"/>*/}
            {/*        </svg>*/}
            {/*    </a>*/}
            {/*    <div className="search-result">*/}
            {/*        <div className="search-result__content">*/}
            {/*            <div className="search-result__content__title">صفحات</div>*/}
            {/*            <div className="mb-5">*/}
            {/*                <a href className="flex items-center">*/}
            {/*                    <div*/}
            {/*                        className="w-8 h-8 bg-theme-18 text-theme-9 flex items-center justify-center rounded-full">*/}
            {/*                        <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24"*/}
            {/*                             fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"*/}
            {/*                             strokeLinejoin="round" className="feather feather-inbox w-4 h-4">*/}
            {/*                            <polyline points="22 12 16 12 14 15 10 15 8 12 2 12"/>*/}
            {/*                            <path*/}
            {/*                                d="M5.45 5.11L2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z"/>*/}
            {/*                        </svg>*/}
            {/*                    </div>*/}
            {/*                    <div className="mr-3">تنظیمات ایمیل</div>*/}
            {/*                </a>*/}
            {/*                <a href className="flex items-center mt-2">*/}
            {/*                    <div*/}
            {/*                        className="w-8 h-8 bg-theme-17 text-theme-11 flex items-center justify-center rounded-full">*/}
            {/*                        <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24"*/}
            {/*                             fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"*/}
            {/*                             strokeLinejoin="round" className="feather feather-users w-4 h-4">*/}
            {/*                            <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>*/}
            {/*                            <circle cx={9} cy={7} r={4}/>*/}
            {/*                            <path d="M23 21v-2a4 4 0 0 0-3-3.87"/>*/}
            {/*                            <path d="M16 3.13a4 4 0 0 1 0 7.75"/>*/}
            {/*                        </svg>*/}
            {/*                    </div>*/}
            {/*                    <div className="mr-3">کاربران و دسترسی</div>*/}
            {/*                </a>*/}
            {/*                <a href className="flex items-center mt-2">*/}
            {/*                    <div*/}
            {/*                        className="w-8 h-8 bg-theme-14 text-theme-10 flex items-center justify-center rounded-full">*/}
            {/*                        <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24"*/}
            {/*                             fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"*/}
            {/*                             strokeLinejoin="round" className="feather feather-credit-card w-4 h-4">*/}
            {/*                            <rect x={1} y={4} width={22} height={16} rx={2} ry={2}/>*/}
            {/*                            <line x1={1} y1={10} x2={23} y2={10}/>*/}
            {/*                        </svg>*/}
            {/*                    </div>*/}
            {/*                    <div className="mr-3">گزارش تراکنش ها</div>*/}
            {/*                </a>*/}
            {/*            </div>*/}
            {/*            <div className="search-result__content__title">کاربران</div>*/}
            {/*            <div className="mb-5">*/}
            {/*                <a href className="flex items-center mt-2">*/}
            {/*                    <div className="w-8 h-8 image-fit">*/}
            {/*                        <img alt="Rubick Tailwind HTML Admin Template" className="rounded-full"*/}
            {/*                             src="dist\images\profile-11.jpg"/>*/}
            {/*                    </div>*/}
            {/*                    <div className="mr-3">دنزل واشینگتون</div>*/}
            {/*                    <div*/}
            {/*                        className="mr-auto truncate text-gray-600 text-xs text-left">denzelwashington@left4code.com*/}
            {/*                    </div>*/}
            {/*                </a>*/}
            {/*                <a href className="flex items-center mt-2">*/}
            {/*                    <div className="w-8 h-8 image-fit">*/}
            {/*                        <img alt="Rubick Tailwind HTML Admin Template" className="rounded-full"*/}
            {/*                             src="dist\images\profile-7.jpg"/>*/}
            {/*                    </div>*/}
            {/*                    <div className="mr-3">کیانو ریورز</div>*/}
            {/*                    <div*/}
            {/*                        className="mr-auto truncate text-gray-600 text-xs text-left">keanureeves@left4code.com*/}
            {/*                    </div>*/}
            {/*                </a>*/}
            {/*                <a href className="flex items-center mt-2">*/}
            {/*                    <div className="w-8 h-8 image-fit">*/}
            {/*                        <img alt="Rubick Tailwind HTML Admin Template" className="rounded-full"*/}
            {/*                             src="dist\images\profile-1.jpg"/>*/}
            {/*                    </div>*/}
            {/*                    <div className="mr-3">Keira Knightley</div>*/}
            {/*                    <div*/}
            {/*                        className="mr-auto truncate text-gray-600 text-xs text-left">keiraknightley@left4code.com*/}
            {/*                    </div>*/}
            {/*                </a>*/}
            {/*                <a href className="flex items-center mt-2">*/}
            {/*                    <div className="w-8 h-8 image-fit">*/}
            {/*                        <img alt="Rubick Tailwind HTML Admin Template" className="rounded-full"*/}
            {/*                             src="dist\images\profile-8.jpg"/>*/}
            {/*                    </div>*/}
            {/*                    <div className="mr-3">انجلینا جولی</div>*/}
            {/*                    <div*/}
            {/*                        className="mr-auto truncate text-gray-600 text-xs text-left">angelinajolie@left4code.com*/}
            {/*                    </div>*/}
            {/*                </a>*/}
            {/*            </div>*/}
            {/*            <div className="search-result__content__title">محصولات</div>*/}
            {/*            <a href className="flex items-center mt-2">*/}
            {/*                <div className="w-8 h-8 image-fit">*/}
            {/*                    <img alt="Rubick Tailwind HTML Admin Template" className="rounded-full"*/}
            {/*                         src="dist\images\preview-15.jpg"/>*/}
            {/*                </div>*/}
            {/*                <div className="mr-3">سونی ایر سون تری</div>*/}
            {/*                <div className="mr-auto truncate text-gray-600 text-xs text-left">عکاسی</div>*/}
            {/*            </a>*/}
            {/*            <a href className="flex items-center mt-2">*/}
            {/*                <div className="w-8 h-8 image-fit">*/}
            {/*                    <img alt="Rubick Tailwind HTML Admin Template" className="rounded-full"*/}
            {/*                         src="dist\images\preview-12.jpg"/>*/}
            {/*                </div>*/}
            {/*                <div className="mr-3">اوپو فایند ایکس پرو</div>*/}
            {/*                <div className="mr-auto truncate text-gray-600 text-xs text-left">گوشی هوشمند و لپتاپ</div>*/}
            {/*            </a>*/}
            {/*            <a href className="flex items-center mt-2">*/}
            {/*                <div className="w-8 h-8 image-fit">*/}
            {/*                    <img alt="Rubick Tailwind HTML Admin Template" className="rounded-full"*/}
            {/*                         src="dist\images\preview-1.jpg"/>*/}
            {/*                </div>*/}
            {/*                <div className="mr-3">دل ایکس‌پی‌اس</div>*/}
            {/*                <div className="mr-auto truncate text-gray-600 text-xs text-left">کامپیوتر و لپ تاپ</div>*/}
            {/*            </a>*/}
            {/*            <a href className="flex items-center mt-2">*/}
            {/*                <div className="w-8 h-8 image-fit">*/}
            {/*                    <img alt="Rubick Tailwind HTML Admin Template" className="rounded-full"*/}
            {/*                         src="dist\images\preview-12.jpg"/>*/}
            {/*                </div>*/}
            {/*                <div className="mr-3">نیک تایجن</div>*/}
            {/*                <div className="mr-auto truncate text-gray-600 text-xs text-left">ورزشی</div>*/}
            {/*            </a>*/}
            {/*        </div>*/}
            {/*    </div>*/}
            {/*</div>*/}
            {/*/!* END: Search *!/*/}
            {/*/!* BEGIN: Notifications *!/*/}
            {/*<div className="intro-x dropdown ml-auto sm:ml-6">*/}
            {/*    <div className="dropdown-toggle notification notification--bullet cursor-pointer" role="button"*/}
            {/*         aria-expanded="false">*/}
            {/*        <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none"*/}
            {/*             stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"*/}
            {/*             className="feather feather-bell notification__icon dark:text-gray-300">*/}
            {/*            <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"/>*/}
            {/*            <path d="M13.73 21a2 2 0 0 1-3.46 0"/>*/}
            {/*        </svg>*/}
            {/*    </div>*/}
            {/*    <div className="notification-content pt-2 dropdown-menu">*/}
            {/*        <div className="notification-content__box dropdown-menu__content box dark:bg-dark-6">*/}
            {/*            <div className="notification-content__title"> اطلاعیه ها</div>*/}
            {/*            <div className="cursor-pointer relative flex items-center ">*/}
            {/*                <div className="w-12 h-12 flex-none image-fit ml-1">*/}
            {/*                    <img alt="Rubick Tailwind HTML Admin Template" className="rounded-full"*/}
            {/*                         src="dist\images\profile-11.jpg"/>*/}
            {/*                    <div*/}
            {/*                        className="w-3 h-3 bg-theme-9 absolute left-0 bottom-0 rounded-full border-2 border-white"/>*/}
            {/*                </div>*/}
            {/*                <div className="mr-2 overflow-hidden">*/}
            {/*                    <div className="flex items-center">*/}
            {/*                        <a href="javascript:;" className="font-medium truncate ml-5">دنزل واشینگتون</a>*/}
            {/*                        <div className="text-xs text-gray-500 mr-auto whitespace-nowrap">05:09 عصر</div>*/}
            {/*                    </div>*/}
            {/*                    <div className="w-full truncate text-gray-600 mt-0.5">لورم ایپسوم متن ساختگی با تولید*/}
            {/*                        سادگی نامفهوم*/}
            {/*                        از صنعت چاپ و با استفاده از طراحان گرافیک است.*/}
            {/*                    </div>*/}
            {/*                </div>*/}
            {/*            </div>*/}
            {/*            <div className="cursor-pointer relative flex items-center mt-5">*/}
            {/*                <div className="w-12 h-12 flex-none image-fit ml-1">*/}
            {/*                    <img alt="Rubick Tailwind HTML Admin Template" className="rounded-full"*/}
            {/*                         src="dist\images\profile-7.jpg"/>*/}
            {/*                    <div*/}
            {/*                        className="w-3 h-3 bg-theme-9 absolute left-0 bottom-0 rounded-full border-2 border-white"/>*/}
            {/*                </div>*/}
            {/*                <div className="mr-2 overflow-hidden">*/}
            {/*                    <div className="flex items-center">*/}
            {/*                        <a href="javascript:;" className="font-medium truncate ml-5">کیانو ریورز</a>*/}
            {/*                        <div className="text-xs text-gray-500 mr-auto whitespace-nowrap">01:10 صبح</div>*/}
            {/*                    </div>*/}
            {/*                    <div className="w-full truncate text-gray-600 mt-0.5">لورم ایپسوم متن ساختگی با تولید*/}
            {/*                        سادگی*/}
            {/*                        نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است.*/}
            {/*                    </div>*/}
            {/*                </div>*/}
            {/*            </div>*/}
            {/*            <div className="cursor-pointer relative flex items-center mt-5">*/}
            {/*                <div className="w-12 h-12 flex-none image-fit ml-1">*/}
            {/*                    <img alt="Rubick Tailwind HTML Admin Template" className="rounded-full"*/}
            {/*                         src="dist\images\profile-1.jpg"/>*/}
            {/*                    <div*/}
            {/*                        className="w-3 h-3 bg-theme-9 absolute left-0 bottom-0 rounded-full border-2 border-white"/>*/}
            {/*                </div>*/}
            {/*                <div className="mr-2 overflow-hidden">*/}
            {/*                    <div className="flex items-center">*/}
            {/*                        <a href="javascript:;" className="font-medium truncate ml-5">Keira Knightley</a>*/}
            {/*                        <div className="text-xs text-gray-500 mr-auto whitespace-nowrap">01:10 صبح</div>*/}
            {/*                    </div>*/}
            {/*                    <div className="w-full truncate text-gray-600 mt-0.5">لورم ایپسوم متن ساختگی با تولید*/}
            {/*                        سادگی نامفهوم*/}
            {/*                        از صنعت چاپ و با استفاده از طراحان گرافیک است.*/}
            {/*                    </div>*/}
            {/*                </div>*/}
            {/*            </div>*/}
            {/*            <div className="cursor-pointer relative flex items-center mt-5">*/}
            {/*                <div className="w-12 h-12 flex-none image-fit ml-1">*/}
            {/*                    <img alt="Rubick Tailwind HTML Admin Template" className="rounded-full"*/}
            {/*                         src="dist\images\profile-8.jpg"/>*/}
            {/*                    <div*/}
            {/*                        className="w-3 h-3 bg-theme-9 absolute left-0 bottom-0 rounded-full border-2 border-white"/>*/}
            {/*                </div>*/}
            {/*                <div className="mr-2 overflow-hidden">*/}
            {/*                    <div className="flex items-center">*/}
            {/*                        <a href="javascript:;" className="font-medium truncate ml-5">انجلینا جولی</a>*/}
            {/*                        <div className="text-xs text-gray-500 mr-auto whitespace-nowrap">01:10 صبح</div>*/}
            {/*                    </div>*/}
            {/*                    <div className="w-full truncate text-gray-600 mt-0.5">لورم ایپسوم متن ساختگی با تولید*/}
            {/*                        سادگی*/}
            {/*                        نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است.*/}
            {/*                    </div>*/}
            {/*                </div>*/}
            {/*            </div>*/}
            {/*            <div className="cursor-pointer relative flex items-center mt-5">*/}
            {/*                <div className="w-12 h-12 flex-none image-fit ml-1">*/}
            {/*                    <img alt="عکس کاربر" className="rounded-full" src="{{ user.image.url }}"/>*/}
            {/*                    <div*/}
            {/*                        className="w-3 h-3 bg-theme-9 absolute left-0 bottom-0 rounded-full border-2 border-white"/>*/}
            {/*                </div>*/}
            {/*                <div className="mr-2 overflow-hidden">*/}
            {/*                    <div className="flex items-center">*/}
            {/*                        <a href="javascript:;" className="font-medium truncate ml-5">راسل کرو</a>*/}
            {/*                        <div className="text-xs text-gray-500 mr-auto whitespace-nowrap">01:10 صبح</div>*/}
            {/*                    </div>*/}
            {/*                    <div className="w-full truncate text-gray-600 mt-0.5">لورم ایپسوم متن ساختگی با تولید*/}
            {/*                        سادگی*/}
            {/*                        نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است.*/}
            {/*                    </div>*/}
            {/*                </div>*/}
            {/*            </div>*/}
            {/*        </div>*/}
            {/*    </div>*/}
            {/*</div>*/}
            {/* END: Notifications */}
            {/* BEGIN: Account Menu */}
            <Dropdown className="intro-x dropdown w-8 h-8">
                <DropdownToggle variant={'light'}
                                className="dropdown-toggle w-8 h-8 rounded-full overflow-hidden shadow-lg image-fit zoom-in"
                                role="button" aria-expanded="false">
                    <img alt="عکس کاربر" src={currentUser.image}/>
                </DropdownToggle>
                <DropdownMenu className="dropdown-menu w-56 box bg-theme-26 dark:bg-dark-6 text-white p-2">
                    <DropdownItem as='div' className=" border-b border-theme-27 dark:border-dark-3 font-medium p-4">
                       {currentUser.username}
                    </DropdownItem>
                    <DropdownDivider/>
                    <Link
                            to='/profile/'
                           className="flex items-center block p-2 transition duration-300 ease-in-out hover:bg-theme-1 dark:hover:bg-dark-3 rounded-md">
                            <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24"
                                 fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"
                                 strokeLinejoin="round" className="feather feather-user w-4 h-4 ml-2">
                                <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/>
                                <circle cx={12} cy={7} r={4}/>
                            </svg>
                            پروفایل </Link>
                        <Link
                            to='/user/reset/'
                           className="flex items-center block p-2 transition duration-300 ease-in-out hover:bg-theme-1 dark:hover:bg-dark-3 rounded-md">
                            <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24"
                                 fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"
                                 strokeLinejoin="round" className="feather feather-lock w-4 h-4 ml-2">
                                <rect x={3} y={11} width={18} height={11} rx={2} ry={2}/>
                                <path d="M7 11V7a5 5 0 0 1 10 0v4"/>
                            </svg>
                            بازیابی رمزعبور</Link>
                    <DropdownItem as={'button'}
                                  onClick={logout}
                                  className="p-2 w-full border-t border-theme-27 dark:border-dark-3 flex items-center block p-2 transition duration-300 ease-in-out hover:bg-theme-1 dark:hover:bg-dark-3 rounded-md">

                            <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24"
                                 fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"
                                 strokeLinejoin="round" className="feather feather-toggle-right w-4 h-4 ml-2">
                                <rect x={1} y={5} width={22} height={14} rx={7} ry={7}/>
                                <circle cx={16} cy={12} r={3}/>
                            </svg>
                            خروج
                    </DropdownItem>
                </DropdownMenu>
            </Dropdown>
            {/* END: Account Menu */}
        </div>


    );
};

export default ProHeader;