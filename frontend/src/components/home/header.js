import React from 'react'

function Header() {
    return (
        <div className="top-bar">
            {/* BEGIN: Breadcrumb */}
            <div className="-intro-x breadcrumb ml-auto hidden sm:flex"> <a href>اپلیکیشن</a> <i data-feather="chevron-left" className="breadcrumb__icon" /> <a href className="breadcrumb--active">داشبرد</a> </div>
            {/* END: Breadcrumb */}
            {/* BEGIN: Search */}
            <div className="intro-x relative ml-3 sm:ml-6">
                <div className="search hidden sm:block">
                    <input type="text" className="search__input form-control border-transparent placeholder-theme-13" placeholder="جستجو..." />
                    <i data-feather="search" className="search__icon dark:text-gray-300" />
                </div>
                <a className="notification sm:hidden" href> <i data-feather="search" className="notification__icon dark:text-gray-300" /> </a>
                <div className="search-result">
                    <div className="search-result__content">
                        <div className="search-result__content__title">صفحات</div>
                        <div className="mb-5">
                            <a href className="flex items-center">
                                <div className="w-8 h-8 bg-theme-18 text-theme-9 flex items-center justify-center rounded-full"> <i className="w-4 h-4" data-feather="inbox" /> </div>
                                <div className="mr-3">تنظیمات ایمیل</div>
                            </a>
                            <a href className="flex items-center mt-2">
                                <div className="w-8 h-8 bg-theme-17 text-theme-11 flex items-center justify-center rounded-full"> <i className="w-4 h-4" data-feather="users" /> </div>
                                <div className="mr-3">کاربران و دسترسی ها</div>
                            </a>
                            <a href className="flex items-center mt-2">
                                <div className="w-8 h-8 bg-theme-14 text-theme-10 flex items-center justify-center rounded-full"> <i className="w-4 h-4" data-feather="credit-card" /> </div>
                                <div className="mr-3">گزارش تراکنش ها</div>
                            </a>
                        </div>
                        <div className="search-result__content__title">کاربران</div>
                        <div className="mb-5">
                            <a href className="flex items-center mt-2">
                                <div className="w-8 h-8 image-fit">
                                    <img alt="Rubick Tailwind HTML Admin Template" className="rounded-full" src="dist/images/profile-5.jpg" />
                                </div>
                                <div className="mr-3">آل پاچینو</div>
                                <div className="mr-auto truncate text-gray-600 text-xs text-left">alpacino@left4code.com</div>
                            </a>
                            <a href className="flex items-center mt-2">
                                <div className="w-8 h-8 image-fit">
                                    <img alt="Rubick Tailwind HTML Admin Template" className="rounded-full" src="dist/images/profile-15.jpg" />
                                </div>
                                <div className="mr-3">دنزل واشینگتون</div>
                                <div className="mr-auto truncate text-gray-600 text-xs text-left">denzelwashington@left4code.com</div>
                            </a>
                            <a href className="flex items-center mt-2">
                                <div className="w-8 h-8 image-fit">
                                    <img alt="Rubick Tailwind HTML Admin Template" className="rounded-full" src="dist/images/profile-12.jpg" />
                                </div>
                                <div className="mr-3">کوین اسپیسی</div>
                                <div className="mr-auto truncate text-gray-600 text-xs text-left">kevinspacey@left4code.com</div>
                            </a>
                            <a href className="flex items-center mt-2">
                                <div className="w-8 h-8 image-fit">
                                    <img alt="Rubick Tailwind HTML Admin Template" className="rounded-full" src="dist/images/profile-7.jpg" />
                                </div>
                                <div className="mr-3">نیکلاس کیج</div>
                                <div className="mr-auto truncate text-gray-600 text-xs text-left">nicolascage@left4code.com</div>
                            </a>
                        </div>
                        <div className="search-result__content__title">محصولات</div>
                        <a href className="flex items-center mt-2">
                            <div className="w-8 h-8 image-fit">
                                <img alt="Rubick Tailwind HTML Admin Template" className="rounded-full" src="dist/images/preview-15.jpg" />
                            </div>
                            <div className="mr-3">سامسونگ اس بیست اولترا</div>
                            <div className="mr-auto truncate text-gray-600 text-xs text-left">گوشی هوشمند و لپتاپ</div>
                        </a>
                        <a href className="flex items-center mt-2">
                            <div className="w-8 h-8 image-fit">
                                <img alt="Rubick Tailwind HTML Admin Template" className="rounded-full" src="dist/images/preview-7.jpg" />
                            </div>
                            <div className="mr-3">سامسونگ اس بیست اولترا</div>
                            <div className="mr-auto truncate text-gray-600 text-xs text-left">گوشی هوشمند و لپتاپ</div>
                        </a>
                        <a href className="flex items-center mt-2">
                            <div className="w-8 h-8 image-fit">
                                <img alt="Rubick Tailwind HTML Admin Template" className="rounded-full" src="dist/images/preview-10.jpg" />
                            </div>
                            <div className="mr-3">سونی مستر سریز ای‌ناین‌جی</div>
                            <div className="mr-auto truncate text-gray-600 text-xs text-left">الکترونیک</div>
                        </a>
                        <a href className="flex items-center mt-2">
                            <div className="w-8 h-8 image-fit">
                                <img alt="Rubick Tailwind HTML Admin Template" className="rounded-full" src="dist/images/preview-1.jpg" />
                            </div>
                            <div className="mr-3">سامسونگ کیوناین تی‌وی</div>
                            <div className="mr-auto truncate text-gray-600 text-xs text-left">الکترونیک</div>
                        </a>
                    </div>
                </div>
            </div>
            {/* END: Search */}
            {/* BEGIN: Notifications */}
            <div className="intro-x dropdown ml-auto sm:ml-6">
                <div className="dropdown-toggle notification notification--bullet cursor-pointer" role="button" aria-expanded="false"> <i data-feather="bell" className="notification__icon dark:text-gray-300" /> </div>
                <div className="notification-content pt-2 dropdown-menu">
                    <div className="notification-content__box dropdown-menu__content box dark:bg-dark-6">
                        <div className="notification-content__title"> اطلاعیه ها </div>
                        <div className="cursor-pointer relative flex items-center ">
                            <div className="w-12 h-12 flex-none image-fit ml-1">
                                <img alt="Rubick Tailwind HTML Admin Template" className="rounded-full" src="dist/images/profile-5.jpg" />
                                <div className="w-3 h-3 bg-theme-9 absolute left-0 bottom-0 rounded-full border-2 border-white" />
                            </div>
                            <div className="mr-2 overflow-hidden">
                                <div className="flex items-center">
                                    <a href="javascript:;" className="font-medium truncate ml-5">آل پاچینو</a>
                                    <div className="text-xs text-gray-500 mr-auto whitespace-nowrap">05:09 عصر</div>
                                </div>
                                <div className="w-full truncate text-gray-600 mt-0.5">لورم ایپسوم متن ساختگی با تولید سادگی
                                    نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است.</div>
                            </div>
                        </div>
                        <div className="cursor-pointer relative flex items-center mt-5">
                            <div className="w-12 h-12 flex-none image-fit ml-1">
                                <img alt="Rubick Tailwind HTML Admin Template" className="rounded-full" src="dist/images/profile-15.jpg" />
                                <div className="w-3 h-3 bg-theme-9 absolute left-0 bottom-0 rounded-full border-2 border-white" />
                            </div>
                            <div className="mr-2 overflow-hidden">
                                <div className="flex items-center">
                                    <a href="javascript:;" className="font-medium truncate ml-5">دنزل واشینگتون</a>
                                    <div className="text-xs text-gray-500 mr-auto whitespace-nowrap">05:09 عصر</div>
                                </div>
                                <div className="w-full truncate text-gray-600 mt-0.5">لورم ایپسوم متن ساختگی با تولید سادگی
                                    نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است.</div>
                            </div>
                        </div>
                        <div className="cursor-pointer relative flex items-center mt-5">
                            <div className="w-12 h-12 flex-none image-fit ml-1">
                                <img alt="Rubick Tailwind HTML Admin Template" className="rounded-full" src="dist/images/profile-12.jpg" />
                                <div className="w-3 h-3 bg-theme-9 absolute left-0 bottom-0 rounded-full border-2 border-white" />
                            </div>
                            <div className="mr-2 overflow-hidden">
                                <div className="flex items-center">
                                    <a href="javascript:;" className="font-medium truncate ml-5">کوین اسپیسی</a>
                                    <div className="text-xs text-gray-500 mr-auto whitespace-nowrap">01:10 صبح</div>
                                </div>
                                <div className="w-full truncate text-gray-600 mt-0.5">لورم ایپسوم متن ساختگی با تولید سادگی
                                    نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است.</div>
                            </div>
                        </div>
                        <div className="cursor-pointer relative flex items-center mt-5">
                            <div className="w-12 h-12 flex-none image-fit ml-1">
                                <img alt="Rubick Tailwind HTML Admin Template" className="rounded-full" src="dist/images/profile-7.jpg" />
                                <div className="w-3 h-3 bg-theme-9 absolute left-0 bottom-0 rounded-full border-2 border-white" />
                            </div>
                            <div className="mr-2 overflow-hidden">
                                <div className="flex items-center">
                                    <a href="javascript:;" className="font-medium truncate ml-5">نیکلاس کیج</a>
                                    <div className="text-xs text-gray-500 mr-auto whitespace-nowrap">05:09 عصر</div>
                                </div>
                                <div className="w-full truncate text-gray-600 mt-0.5">لورم ایپسوم متن ساختگی با تولید سادگی
                                    نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است.</div>
                            </div>
                        </div>
                        <div className="cursor-pointer relative flex items-center mt-5">
                            <div className="w-12 h-12 flex-none image-fit ml-1">
                                <img alt="Rubick Tailwind HTML Admin Template" className="rounded-full" src="dist/images/profile-13.jpg" />
                                <div className="w-3 h-3 bg-theme-9 absolute left-0 bottom-0 rounded-full border-2 border-white" />
                            </div>
                            <div className="mr-2 overflow-hidden">
                                <div className="flex items-center">
                                    <a href="javascript:;" className="font-medium truncate ml-5">جانی دپ</a>
                                    <div className="text-xs text-gray-500 mr-auto whitespace-nowrap">01:10 صبح</div>
                                </div>
                                <div className="w-full truncate text-gray-600 mt-0.5">لورم ایپسوم متن ساختگی با تولید سادگی
                                    نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است.</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* END: Notifications */}
            {/* BEGIN: Account Menu */}
            <div className="intro-x dropdown w-8 h-8">
                <div className="dropdown-toggle w-8 h-8 rounded-full overflow-hidden shadow-lg image-fit zoom-in" role="button" aria-expanded="false">
                    <img alt="Rubick Tailwind HTML Admin Template" src="" />
                </div>
                <div className="dropdown-menu w-56">
                    <div className="dropdown-menu__content box bg-theme-26 dark:bg-dark-6 text-white">
                        <div className="p-4 border-b border-theme-27 dark:border-dark-3">
                            <div className="font-medium">آل پاچینو</div>
                            <div className="text-xs text-theme-28 mt-0.5 dark:text-gray-600">مهندس فرانت اند</div>
                        </div>
                        <div className="p-2">
                            <a href className="flex items-center block p-2 transition duration-300 ease-in-out hover:bg-theme-1 dark:hover:bg-dark-3 rounded-md"> <i data-feather="user" className="w-4 h-4 ml-2" /> پروفایل </a>
                            <a href className="flex items-center block p-2 transition duration-300 ease-in-out hover:bg-theme-1 dark:hover:bg-dark-3 rounded-md"> <i data-feather="edit" className="w-4 h-4 ml-2" /> افزودن اکانت </a>
                            <a href className="flex items-center block p-2 transition duration-300 ease-in-out hover:bg-theme-1 dark:hover:bg-dark-3 rounded-md"> <i data-feather="lock" className="w-4 h-4 ml-2" />بازیابی رمزعبور</a>
                            <a href className="flex items-center block p-2 transition duration-300 ease-in-out hover:bg-theme-1 dark:hover:bg-dark-3 rounded-md"> <i data-feather="help-circle" className="w-4 h-4 ml-2" />راهنمایی</a>
                        </div>
                        <div className="p-2 border-t border-theme-27 dark:border-dark-3">
                            <a href className="flex items-center block p-2 transition duration-300 ease-in-out hover:bg-theme-1 dark:hover:bg-dark-3 rounded-md"> <i data-feather="toggle-right" className="w-4 h-4 ml-2" />خروج</a>
                        </div>
                    </div>
                </div>
            </div>
            {/* END: Account Menu */}
        </div>
    )
}

export default Header
