import React from 'react'
import Header from './header'
function HomePage() {
    return (
        <div>
            {/* BEGIN: Mobile Menu */}
            <div className="mobile-menu md:hidden">
                <div className="mobile-menu-bar">
                    <a href className="flex ml-auto">
                        <img alt="Rubick Tailwind HTML Admin Template" className="w-6" src="./dist/images/logo.svg" />
                    </a>
                    <a href="javascript:;" id="mobile-menu-toggler"> <i data-feather="bar-chart-2" className="w-8 h-8 text-white transform -rotate-90" /> </a>
                </div>
                <ul className="border-t border-theme-29 py-5 hidden">
                    <li>
                        <a href="javascript:;.html" className="menu menu--active">
                            <div className="menu__icon"> <i data-feather="home" /> </div>
                            <div className="menu__title"> دشبرد <i data-feather="chevron-down" className="menu__sub-icon transform rotate-180" /> </div>
                        </a>
                        <ul className="menu__sub-open">
                            <li>
                                <a href="index.html" className="menu menu--active">
                                    <div className="menu__icon"> <i data-feather="activity" /> </div>
                                    <div className="menu__title"> نمای کل 1 </div>
                                </a>
                            </li>
                            <li>
                                <a href="side-menu-light-dashboard-overview-2.html" className="menu">
                                    <div className="menu__icon"> <i data-feather="activity" /> </div>
                                    <div className="menu__title"> نمای کل 2 </div>
                                </a>
                            </li>
                            <li>
                                <a href="side-menu-light-dashboard-overview-3.html" className="menu">
                                    <div className="menu__icon"> <i data-feather="activity" /> </div>
                                    <div className="menu__title"> نمای کل 3 </div>
                                </a>
                            </li>
                        </ul>
                    </li>
                    <li>
                        <a href="javascript:;" className="menu">
                            <div className="menu__icon"> <i data-feather="box" /> </div>
                            <div className="menu__title"> چینش منو <i data-feather="chevron-down" className="menu__sub-icon " /> </div>
                        </a>
                        <ul className>
                            <li>
                                <a href="index.html" className="menu menu--active">
                                    <div className="menu__icon"> <i data-feather="activity" /> </div>
                                    <div className="menu__title"> منو کنار </div>
                                </a>
                            </li>
                            <li>
                                <a href="simple-menu-light-dashboard-overview-1.html" className="menu menu--active">
                                    <div className="menu__icon"> <i data-feather="activity" /> </div>
                                    <div className="menu__title"> منو ساده </div>
                                </a>
                            </li>
                            <li>
                                <a href="top-menu-light-dashboard-overview-1.html" className="menu menu--active">
                                    <div className="menu__icon"> <i data-feather="activity" /> </div>
                                    <div className="menu__title"> منو بالا </div>
                                </a>
                            </li>
                        </ul>
                    </li>
                    <li>
                        <a href="side-menu-light-inbox.html" className="menu">
                            <div className="menu__icon"> <i data-feather="inbox" /> </div>
                            <div className="menu__title"> صندوق ورودی </div>
                        </a>
                    </li>
                    <li>
                        <a href="side-menu-light-file-manager.html" className="menu">
                            <div className="menu__icon"> <i data-feather="hard-drive" /> </div>
                            <div className="menu__title"> مدیریت فایل </div>
                        </a>
                    </li>
                    <li>
                        <a href="side-menu-light-point-of-sale.html" className="menu">
                            <div className="menu__icon"> <i data-feather="credit-card" /> </div>
                            <div className="menu__title"> نمای فروش </div>
                        </a>
                    </li>
                    <li>
                        <a href="side-menu-light-chat.html" className="menu">
                            <div className="menu__icon"> <i data-feather="message-square" /> </div>
                            <div className="menu__title"> چت </div>
                        </a>
                    </li>
                    <li>
                        <a href="side-menu-light-post.html" className="menu">
                            <div className="menu__icon"> <i data-feather="file-text" /> </div>
                            <div className="menu__title"> پست </div>
                        </a>
                    </li>
                    <li>
                        <a href="side-menu-light-calendar.html" className="menu">
                            <div className="menu__icon"> <i data-feather="calendar" /> </div>
                            <div className="menu__title"> تقویم </div>
                        </a>
                    </li>
                    <li className="menu__devider my-6" />
                    <li>
                        <a href="javascript:;" className="menu">
                            <div className="menu__icon"> <i data-feather="edit" /> </div>
                            <div className="menu__title"> کراد <i data-feather="chevron-down" className="menu__sub-icon " /> </div>
                        </a>
                        <ul className>
                            <li>
                                <a href="side-menu-light-crud-data-list.html" className="menu">
                                    <div className="menu__icon"> <i data-feather="activity" /> </div>
                                    <div className="menu__title"> لیست داده </div>
                                </a>
                            </li>
                            <li>
                                <a href="side-menu-light-crud-form.html" className="menu">
                                    <div className="menu__icon"> <i data-feather="activity" /> </div>
                                    <div className="menu__title"> فرم </div>
                                </a>
                            </li>
                        </ul>
                    </li>
                    <li>
                        <a href="javascript:;" className="menu">
                            <div className="menu__icon"> <i data-feather="users" /> </div>
                            <div className="menu__title"> کاربران <i data-feather="chevron-down" className="menu__sub-icon " /> </div>
                        </a>
                        <ul className>
                            <li>
                                <a href="side-menu-light-users-layout-1.html" className="menu">
                                    <div className="menu__icon"> <i data-feather="activity" /> </div>
                                    <div className="menu__title"> چینش 1 </div>
                                </a>
                            </li>
                            <li>
                                <a href="side-menu-light-users-layout-2.html" className="menu">
                                    <div className="menu__icon"> <i data-feather="activity" /> </div>
                                    <div className="menu__title"> چینش 2 </div>
                                </a>
                            </li>
                            <li>
                                <a href="side-menu-light-users-layout-3.html" className="menu">
                                    <div className="menu__icon"> <i data-feather="activity" /> </div>
                                    <div className="menu__title"> چینش 3 </div>
                                </a>
                            </li>
                        </ul>
                    </li>
                    <li>
                        <a href="javascript:;" className="menu">
                            <div className="menu__icon"> <i data-feather="trello" /> </div>
                            <div className="menu__title"> پروفایل <i data-feather="chevron-down" className="menu__sub-icon " /> </div>
                        </a>
                        <ul className>
                            <li>
                                <a href="side-menu-light-profile-overview-1.html" className="menu">
                                    <div className="menu__icon"> <i data-feather="activity" /> </div>
                                    <div className="menu__title"> نمای کل 1 </div>
                                </a>
                            </li>
                            <li>
                                <a href="side-menu-light-profile-overview-2.html" className="menu">
                                    <div className="menu__icon"> <i data-feather="activity" /> </div>
                                    <div className="menu__title"> نمای کل 2 </div>
                                </a>
                            </li>
                            <li>
                                <a href="side-menu-light-profile-overview-3.html" className="menu">
                                    <div className="menu__icon"> <i data-feather="activity" /> </div>
                                    <div className="menu__title"> نمای کل 3 </div>
                                </a>
                            </li>
                        </ul>
                    </li>
                    <li>
                        <a href="javascript:;" className="menu">
                            <div className="menu__icon"> <i data-feather="layout" /> </div>
                            <div className="menu__title"> صفحات <i data-feather="chevron-down" className="menu__sub-icon " /> </div>
                        </a>
                        <ul className>
                            <li>
                                <a href="javascript:;" className="menu">
                                    <div className="menu__icon"> <i data-feather="activity" /> </div>
                                    <div className="menu__title"> ویزارد <i data-feather="chevron-down" className="menu__sub-icon " /> </div>
                                </a>
                                <ul className>
                                    <li>
                                        <a href="side-menu-light-wizard-layout-1.html" className="menu">
                                            <div className="menu__icon"> <i data-feather="zap" /> </div>
                                            <div className="menu__title">چینش  1</div>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="side-menu-light-wizard-layout-2.html" className="menu">
                                            <div className="menu__icon"> <i data-feather="zap" /> </div>
                                            <div className="menu__title">چینش  2</div>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="side-menu-light-wizard-layout-3.html" className="menu">
                                            <div className="menu__icon"> <i data-feather="zap" /> </div>
                                            <div className="menu__title">چینش  3</div>
                                        </a>
                                    </li>
                                </ul>
                            </li>
                            <li>
                                <a href="javascript:;" className="menu">
                                    <div className="menu__icon"> <i data-feather="activity" /> </div>
                                    <div className="menu__title"> بلاگ <i data-feather="chevron-down" className="menu__sub-icon " /> </div>
                                </a>
                                <ul className>
                                    <li>
                                        <a href="side-menu-light-blog-layout-1.html" className="menu">
                                            <div className="menu__icon"> <i data-feather="zap" /> </div>
                                            <div className="menu__title">چینش  1</div>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="side-menu-light-blog-layout-2.html" className="menu">
                                            <div className="menu__icon"> <i data-feather="zap" /> </div>
                                            <div className="menu__title">چینش  2</div>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="side-menu-light-blog-layout-3.html" className="menu">
                                            <div className="menu__icon"> <i data-feather="zap" /> </div>
                                            <div className="menu__title">چینش  3</div>
                                        </a>
                                    </li>
                                </ul>
                            </li>
                            <li>
                                <a href="javascript:;" className="menu">
                                    <div className="menu__icon"> <i data-feather="activity" /> </div>
                                    <div className="menu__title"> قیمت‌گذاری <i data-feather="chevron-down" className="menu__sub-icon " /> </div>
                                </a>
                                <ul className>
                                    <li>
                                        <a href="side-menu-light-pricing-layout-1.html" className="menu">
                                            <div className="menu__icon"> <i data-feather="zap" /> </div>
                                            <div className="menu__title">چینش  1</div>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="side-menu-light-pricing-layout-2.html" className="menu">
                                            <div className="menu__icon"> <i data-feather="zap" /> </div>
                                            <div className="menu__title">چینش  2</div>
                                        </a>
                                    </li>
                                </ul>
                            </li>
                            <li>
                                <a href="javascript:;" className="menu">
                                    <div className="menu__icon"> <i data-feather="activity" /> </div>
                                    <div className="menu__title"> فاکتور <i data-feather="chevron-down" className="menu__sub-icon " /> </div>
                                </a>
                                <ul className>
                                    <li>
                                        <a href="side-menu-light-invoice-layout-1.html" className="menu">
                                            <div className="menu__icon"> <i data-feather="zap" /> </div>
                                            <div className="menu__title">چینش  1</div>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="side-menu-light-invoice-layout-2.html" className="menu">
                                            <div className="menu__icon"> <i data-feather="zap" /> </div>
                                            <div className="menu__title">چینش  2</div>
                                        </a>
                                    </li>
                                </ul>
                            </li>
                            <li>
                                <a href="javascript:;" className="menu">
                                    <div className="menu__icon"> <i data-feather="activity" /> </div>
                                    <div className="menu__title"> پرسش و پاسخ <i data-feather="chevron-down" className="menu__sub-icon " /> </div>
                                </a>
                                <ul className>
                                    <li>
                                        <a href="side-menu-light-faq-layout-1.html" className="menu">
                                            <div className="menu__icon"> <i data-feather="zap" /> </div>
                                            <div className="menu__title">چینش  1</div>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="side-menu-light-faq-layout-2.html" className="menu">
                                            <div className="menu__icon"> <i data-feather="zap" /> </div>
                                            <div className="menu__title">چینش  2</div>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="side-menu-light-faq-layout-3.html" className="menu">
                                            <div className="menu__icon"> <i data-feather="zap" /> </div>
                                            <div className="menu__title">چینش  3</div>
                                        </a>
                                    </li>
                                </ul>
                            </li>
                            <li>
                                <a href="login-light-login.html" className="menu">
                                    <div className="menu__icon"> <i data-feather="activity" /> </div>
                                    <div className="menu__title"> ورود </div>
                                </a>
                            </li>
                            <li>
                                <a href="login-light-register.html" className="menu">
                                    <div className="menu__icon"> <i data-feather="activity" /> </div>
                                    <div className="menu__title"> ثبت نام </div>
                                </a>
                            </li>
                            <li>
                                <a href="main-light-error-page.html" className="menu">
                                    <div className="menu__icon"> <i data-feather="activity" /> </div>
                                    <div className="menu__title"> صفحه خطا </div>
                                </a>
                            </li>
                            <li>
                                <a href="side-menu-light-update-profile.html" className="menu">
                                    <div className="menu__icon"> <i data-feather="activity" /> </div>
                                    <div className="menu__title"> بروزرسانی پروفایل </div>
                                </a>
                            </li>
                            <li>
                                <a href="side-menu-light-change-password.html" className="menu">
                                    <div className="menu__icon"> <i data-feather="activity" /> </div>
                                    <div className="menu__title"> تغییر رمزعبور</div>
                                </a>
                            </li>
                        </ul>
                    </li>
                    <li className="menu__devider my-6" />
                    <li>
                        <a href="javascript:;" className="menu">
                            <div className="menu__icon"> <i data-feather="inbox" /> </div>
                            <div className="menu__title"> کامپوننت‌ها <i data-feather="chevron-down" className="menu__sub-icon " /> </div>
                        </a>
                        <ul className>
                            <li>
                                <a href="javascript:;" className="menu">
                                    <div className="menu__icon"> <i data-feather="activity" /> </div>
                                    <div className="menu__title"> جدول <i data-feather="chevron-down" className="menu__sub-icon " /> </div>
                                </a>
                                <ul className>
                                    <li>
                                        <a href="side-menu-light-regular-table.html" className="menu">
                                            <div className="menu__icon"> <i data-feather="zap" /> </div>
                                            <div className="menu__title">جدول ساده</div>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="side-menu-light-tabulator.html" className="menu">
                                            <div className="menu__icon"> <i data-feather="zap" /> </div>
                                            <div className="menu__title">تیبللاتور</div>
                                        </a>
                                    </li>
                                </ul>
                            </li>
                            <li>
                                <a href="javascript:;" className="menu">
                                    <div className="menu__icon"> <i data-feather="activity" /> </div>
                                    <div className="menu__title">همپوشانی<i data-feather="chevron-down" className="menu__sub-icon " /> </div>
                                </a>
                                <ul className>
                                    <li>
                                        <a href="side-menu-light-modal.html" className="menu">
                                            <div className="menu__icon"> <i data-feather="zap" /> </div>
                                            <div className="menu__title">مودال</div>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="side-menu-light-slide-over.html" className="menu">
                                            <div className="menu__icon"> <i data-feather="zap" /> </div>
                                            <div className="menu__title">اسلاید اور</div>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="side-menu-light-notification.html" className="menu">
                                            <div className="menu__icon"> <i data-feather="zap" /> </div>
                                            <div className="menu__title">اطلاعیه‌ها</div>
                                        </a>
                                    </li>
                                </ul>
                            </li>
                            <li>
                                <a href="side-menu-light-accordion.html" className="menu">
                                    <div className="menu__icon"> <i data-feather="activity" /> </div>
                                    <div className="menu__title">آکاردیون</div>
                                </a>
                            </li>
                            <li>
                                <a href="side-menu-light-button.html" className="menu">
                                    <div className="menu__icon"> <i data-feather="activity" /> </div>
                                    <div className="menu__title">دکمه</div>
                                </a>
                            </li>
                            <li>
                                <a href="side-menu-light-alert.html" className="menu">
                                    <div className="menu__icon"> <i data-feather="activity" /> </div>
                                    <div className="menu__title">هشدار</div>
                                </a>
                            </li>
                            <li>
                                <a href="side-menu-light-progress-bar.html" className="menu">
                                    <div className="menu__icon"> <i data-feather="activity" /> </div>
                                    <div className="menu__title">نوار پیشرفت</div>
                                </a>
                            </li>
                            <li>
                                <a href="side-menu-light-tooltip.html" className="menu">
                                    <div className="menu__icon"> <i data-feather="activity" /> </div>
                                    <div className="menu__title"> تولتیپ </div>
                                </a>
                            </li>
                            <li>
                                <a href="side-menu-light-dropdown.html" className="menu">
                                    <div className="menu__icon"> <i data-feather="activity" /> </div>
                                    <div className="menu__title"> دراپ‌دوان </div>
                                </a>
                            </li>
                            <li>
                                <a href="side-menu-light-typography.html" className="menu">
                                    <div className="menu__icon"> <i data-feather="activity" /> </div>
                                    <div className="menu__title"> تایپوگرافی </div>
                                </a>
                            </li>
                            <li>
                                <a href="side-menu-light-icon.html" className="menu">
                                    <div className="menu__icon"> <i data-feather="activity" /> </div>
                                    <div className="menu__title"> ایکن </div>
                                </a>
                            </li>
                            <li>
                                <a href="side-menu-light-loading-icon.html" className="menu">
                                    <div className="menu__icon"> <i data-feather="activity" /> </div>
                                    <div className="menu__title"> ایکن لودینگ </div>
                                </a>
                            </li>
                        </ul>
                    </li>
                    <li>
                        <a href="javascript:;" className="menu">
                            <div className="menu__icon"> <i data-feather="sidebar" /> </div>
                            <div className="menu__title"> فرم‌ها <i data-feather="chevron-down" className="menu__sub-icon " /> </div>
                        </a>
                        <ul className>
                            <li>
                                <a href="side-menu-light-regular-form.html" className="menu">
                                    <div className="menu__icon"> <i data-feather="activity" /> </div>
                                    <div className="menu__title"> فرم ساده </div>
                                </a>
                            </li>
                            <li>
                                <a href="side-menu-light-datepicker.html" className="menu">
                                    <div className="menu__icon"> <i data-feather="activity" /> </div>
                                    <div className="menu__title"> انتخابگر زمان</div>
                                </a>
                            </li>
                            <li>
                                <a href="side-menu-light-tail-select.html" className="menu">
                                    <div className="menu__icon"> <i data-feather="activity" /> </div>
                                    <div className="menu__title"> انتخابگر تیل </div>
                                </a>
                            </li>
                            <li>
                                <a href="side-menu-light-file-upload.html" className="menu">
                                    <div className="menu__icon"> <i data-feather="activity" /> </div>
                                    <div className="menu__title">آپلود فایل </div>
                                </a>
                            </li>
                            <li>
                                <a href="side-menu-light-wysiwyg-editor.html" className="menu">
                                    <div className="menu__icon"> <i data-feather="activity" /> </div>
                                    <div className="menu__title">ادیتور ویسیویگ</div>
                                </a>
                            </li>
                            <li>
                                <a href="side-menu-light-validation.html" className="menu">
                                    <div className="menu__icon"> <i data-feather="activity" /> </div>
                                    <div className="menu__title">اعتبارسنجی</div>
                                </a>
                            </li>
                        </ul>
                    </li>
                    <li>
                        <a href="javascript:;" className="menu">
                            <div className="menu__icon"> <i data-feather="hard-drive" /> </div>
                            <div className="menu__title">ویجت‌ها<i data-feather="chevron-down" className="menu__sub-icon " /> </div>
                        </a>
                        <ul className>
                            <li>
                                <a href="side-menu-light-chart.html" className="menu">
                                    <div className="menu__icon"> <i data-feather="activity" /> </div>
                                    <div className="menu__title">نمودار</div>
                                </a>
                            </li>
                            <li>
                                <a href="side-menu-light-slider.html" className="menu">
                                    <div className="menu__icon"> <i data-feather="activity" /> </div>
                                    <div className="menu__title">اسلایدر</div>
                                </a>
                            </li>
                            <li>
                                <a href="side-menu-light-image-zoom.html" className="menu">
                                    <div className="menu__icon"> <i data-feather="activity" /> </div>
                                    <div className="menu__title">بزرگنمایی تصویر</div>
                                </a>
                            </li>
                        </ul>
                    </li>
                </ul>
            </div>
            {/* BEGIN: Top Bar */}
            <Header/>
            {/* END: Top Bar */}
            <div className="grid grid-cols-12 gap-6">
                <div className="col-span-12 xxl:col-span-9">
                    <div className="grid grid-cols-12 gap-6">
                        {/* BEGIN: General Report */}
                        <div className="col-span-12 mt-8">
                            <div className="intro-y flex items-center h-10">
                                <h2 className="text-lg font-medium truncate ml-5">
                                    گزارش کلی
                                </h2>
                                <a href className="mr-auto flex items-center text-theme-1 dark:text-theme-10"> <i data-feather="refresh-ccw" className="w-4 h-4 ml-3" />به روزرسانی داده</a>
                            </div>
                            <div className="grid grid-cols-12 gap-6 mt-5">
                                <div className="col-span-12 sm:col-span-6 xl:col-span-3 intro-y">
                                    <div className="report-box zoom-in">
                                        <div className="box p-5">
                                            <div className="flex">
                                                <i data-feather="shopping-cart" className="report-box__icon text-theme-10" />
                                                <div className="mr-auto">
                                                    <div className="report-box__indicator bg-theme-9 tooltip cursor-pointer" title="33% بالاتر از ماه گذشته"> 33% <i data-feather="chevron-up" className="w-4 h-4 mr-0.5" /> </div>
                                                </div>
                                            </div>
                                            <div className="text-3xl font-bold leading-8 mt-6">4.710</div>
                                            <div className="text-base text-gray-600 mt-1">مورد فروش </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-span-12 sm:col-span-6 xl:col-span-3 intro-y">
                                    <div className="report-box zoom-in">
                                        <div className="box p-5">
                                            <div className="flex">
                                                <i data-feather="credit-card" className="report-box__icon text-theme-11" />
                                                <div className="mr-auto">
                                                    <div className="report-box__indicator bg-theme-6 tooltip cursor-pointer" title="2% کمتر از ماه گذشته"> 2% <i data-feather="chevron-down" className="w-4 h-4 mr-0.5" /> </div>
                                                </div>
                                            </div>
                                            <div className="text-3xl font-bold leading-8 mt-6">3.721</div>
                                            <div className="text-base text-gray-600 mt-1">سفارش جدید</div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-span-12 sm:col-span-6 xl:col-span-3 intro-y">
                                    <div className="report-box zoom-in">
                                        <div className="box p-5">
                                            <div className="flex">
                                                <i data-feather="monitor" className="report-box__icon text-theme-12" />
                                                <div className="mr-auto">
                                                    <div className="report-box__indicator bg-theme-9 tooltip cursor-pointer" title="12% بالاتر از ماه گذشته"> 12% <i data-feather="chevron-up" className="w-4 h-4 mr-0.5" /> </div>
                                                </div>
                                            </div>
                                            <div className="text-3xl font-bold leading-8 mt-6">2.149</div>
                                            <div className="text-base text-gray-600 mt-1">محصولات کلی</div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-span-12 sm:col-span-6 xl:col-span-3 intro-y">
                                    <div className="report-box zoom-in">
                                        <div className="box p-5">
                                            <div className="flex">
                                                <i data-feather="user" className="report-box__icon text-theme-9" />
                                                <div className="mr-auto">
                                                    <div className="report-box__indicator bg-theme-9 tooltip cursor-pointer" title="22% بالاتر از ماه گذشته"> 22% <i data-feather="chevron-up" className="w-4 h-4 mr-0.5" /> </div>
                                                </div>
                                            </div>
                                            <div className="text-3xl font-bold leading-8 mt-6">152.040</div>
                                            <div className="text-base text-gray-600 mt-1">بازدیدکنندگان</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* END: General Report */}
                        {/* BEGIN: Sales Report */}
                        <div className="col-span-12 lg:col-span-6 mt-8">
                            <div className="intro-y block sm:flex items-center h-10">
                                <h2 className="text-lg font-medium truncate ml-5">
                                    گزارش فروش
                                </h2>
                                <div className="sm:mr-auto mt-3 sm:mt-0 relative text-gray-700 dark:text-gray-300">
                                    <i data-feather="calendar" className="w-4 h-4 z-10 absolute my-auto inset-y-0 ml-3 left-0" />
                                    <input type="text" className="datepicker form-control sm:w-56 box pl-10" />
                                </div>
                            </div>
                            <div className="intro-y box p-5 mt-12 sm:mt-5">
                                <div className="flex flex-col xl:flex-row xl:items-center">
                                    <div className="flex">
                                        <div>
                                            <div className="text-theme-19 dark:text-gray-300 text-lg xl:text-xl font-bold">15,000 تومان</div>
                                            <div className="mt-0.5 text-gray-600 dark:text-gray-600">ماه اخیر</div>
                                        </div>
                                        <div className="w-px h-12 border border-r border-dashed border-gray-300 dark:border-dark-5 mx-4 xl:mx-6" />
                                        <div>
                                            <div className="text-gray-600 dark:text-gray-600 text-lg xl:text-xl font-medium">10,000 تومان</div>
                                            <div className="mt-0.5 text-gray-600 dark:text-gray-600">ماه اخیر</div>
                                        </div>
                                    </div>
                                    <div className="dropdown xl:mr-auto mt-5 xl:mt-0">
                                        <button className="dropdown-toggle btn btn-outline-secondary font-normal" aria-expanded="false">فیلتر دسته‌بندی<i data-feather="chevron-down" className="w-4 h-4 mr-2" /> </button>
                                        <div className="dropdown-menu w-40">
                                            <div className="dropdown-menu__content box dark:bg-dark-1 p-2 overflow-y-auto h-32"> <a href className="flex items-center block p-2 transition duration-300 ease-in-out bg-white dark:bg-dark-1 hover:bg-gray-200 dark:hover:bg-dark-2 rounded-md"> کامپیوتر و لپ تاپ </a> <a href className="flex items-center block p-2 transition duration-300 ease-in-out bg-white dark:bg-dark-1 hover:bg-gray-200 dark:hover:bg-dark-2 rounded-md">گوشی هوشمند</a> <a href className="flex items-center block p-2 transition duration-300 ease-in-out bg-white dark:bg-dark-1 hover:bg-gray-200 dark:hover:bg-dark-2 rounded-md">الکترونیک</a> <a href className="flex items-center block p-2 transition duration-300 ease-in-out bg-white dark:bg-dark-1 hover:bg-gray-200 dark:hover:bg-dark-2 rounded-md">عکاسی</a> <a href className="flex items-center block p-2 transition duration-300 ease-in-out bg-white dark:bg-dark-1 hover:bg-gray-200 dark:hover:bg-dark-2 rounded-md">ورزشی</a> </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="report-chart">
                                    <canvas id="report-line-chart" height={169} className="mt-6" />
                                </div>
                            </div>
                        </div>
                        {/* END: Sales Report */}
                        {/* BEGIN: Weekly Top Seller */}
                        <div className="col-span-12 sm:col-span-6 lg:col-span-3 mt-8">
                            <div className="intro-y flex items-center h-10">
                                <h2 className="text-lg font-medium truncate ml-5">
                                    فروش بالای هفتگی
                                </h2>
                                <a href className="mr-auto text-theme-1 dark:text-theme-10 truncate"> بیشتر </a>
                            </div>
                            <div className="intro-y box p-5 mt-5">
                                <canvas className="mt-3" id="report-pie-chart" height={300} />
                                <div className="mt-8">
                                    <div className="flex items-center">
                                        <div className="w-2 h-2 bg-theme-11 rounded-full ml-3" />
                                        <span className="truncate">17 - 30 سن </span>
                                        <div className="h-px flex-1 border border-r border-dashed border-gray-300 mx-3 xl:hidden" />
                                        <span className="font-medium xl:mr-auto">62%</span>
                                    </div>
                                    <div className="flex items-center mt-4">
                                        <div className="w-2 h-2 bg-theme-1 rounded-full ml-3" />
                                        <span className="truncate">31 - 50 سن </span>
                                        <div className="h-px flex-1 border border-r border-dashed border-gray-300 mx-3 xl:hidden" />
                                        <span className="font-medium xl:mr-auto">33%</span>
                                    </div>
                                    <div className="flex items-center mt-4">
                                        <div className="w-2 h-2 bg-theme-12 rounded-full ml-3" />
                                        <span className="truncate">&gt;= 50 سن </span>
                                        <div className="h-px flex-1 border border-r border-dashed border-gray-300 mx-3 xl:hidden" />
                                        <span className="font-medium xl:mr-auto">10%</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* END: Weekly Top Seller */}
                        {/* BEGIN: Sales Report */}
                        <div className="col-span-12 sm:col-span-6 lg:col-span-3 mt-8">
                            <div className="intro-y flex items-center h-10">
                                <h2 className="text-lg font-medium truncate ml-5">
                                    گزارش فروش
                                </h2>
                                <a href className="mr-auto text-theme-1 dark:text-theme-10 truncate"> بیشتر </a>
                            </div>
                            <div className="intro-y box p-5 mt-5">
                                <canvas className="mt-3" id="report-donut-chart" height={300} />
                                <div className="mt-8">
                                    <div className="flex items-center">
                                        <div className="w-2 h-2 bg-theme-11 rounded-full ml-3" />
                                        <span className="truncate">17 - 30 سن </span>
                                        <div className="h-px flex-1 border border-r border-dashed border-gray-300 mx-3 xl:hidden" />
                                        <span className="font-medium xl:mr-auto">62%</span>
                                    </div>
                                    <div className="flex items-center mt-4">
                                        <div className="w-2 h-2 bg-theme-1 rounded-full ml-3" />
                                        <span className="truncate">31 - 50 سن </span>
                                        <div className="h-px flex-1 border border-r border-dashed border-gray-300 mx-3 xl:hidden" />
                                        <span className="font-medium xl:mr-auto">33%</span>
                                    </div>
                                    <div className="flex items-center mt-4">
                                        <div className="w-2 h-2 bg-theme-12 rounded-full ml-3" />
                                        <span className="truncate">&gt;= 50 سن </span>
                                        <div className="h-px flex-1 border border-r border-dashed border-gray-300 mx-3 xl:hidden" />
                                        <span className="font-medium xl:mr-auto">10%</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* END: Sales Report */}
                        {/* BEGIN: Official Store */}
                        <div className="col-span-12 xl:col-span-8 mt-6">
                            <div className="intro-y block sm:flex items-center h-10">
                                <h2 className="text-lg font-medium truncate ml-5">
                                    فروشگاه رسمی
                                </h2>
                                <div className="sm:mr-auto mt-3 sm:mt-0 relative text-gray-700 dark:text-gray-300">
                                    <i data-feather="map-pin" className="w-4 h-4 z-10 absolute my-auto inset-y-0 ml-3 left-0" />
                                    <input type="text" className="form-control sm:w-40 box pl-10" placeholder="فیلتر بر اساس شهر" />
                                </div>
                            </div>
                            <div className="intro-y box p-5 mt-12 sm:mt-5">
                                <div>250 فروشگاه رسمی در 21 کشور ، برای مشاهده جزئیات مکان ، روی نشانگر کلیک کنید.</div>
                                <div className="report-maps mt-5 bg-gray-200 rounded-md" data-center="-6.2425342, 106.8626478" data-sources="/dist/json/location.json" />
                            </div>
                        </div>
                        {/* END: Official Store */}
                        {/* BEGIN: Weekly Best Sellers */}
                        <div className="col-span-12 xl:col-span-4 mt-6">
                            <div className="intro-y flex items-center h-10">
                                <h2 className="text-lg font-medium truncate ml-5">
                                    بهترین فروشنده هفتگی
                                </h2>
                            </div>
                            <div className="mt-5">
                                <div className="intro-y">
                                    <div className="box px-4 py-4 mb-3 flex items-center zoom-in">
                                        <div className="w-10 h-10 flex-none image-fit rounded-md overflow-hidden">
                                            <img alt="Rubick Tailwind HTML Admin Template" src="dist/images/profile-14.jpg" />
                                        </div>
                                        <div className="mr-4 ml-auto">
                                            <div className="font-medium">کوین اسپیسی</div>
                                            <div className="text-gray-600 text-xs mt-0.5">27 شهریور 1400</div>
                                        </div>
                                        <div className="py-1 px-2 rounded-full text-xs bg-theme-9 text-white cursor-pointer font-medium">137 فروش</div>
                                    </div>
                                </div>
                                <div className="intro-y">
                                    <div className="box px-4 py-4 mb-3 flex items-center zoom-in">
                                        <div className="w-10 h-10 flex-none image-fit rounded-md overflow-hidden">
                                            <img alt="Rubick Tailwind HTML Admin Template" src="dist/images/profile-12.jpg" />
                                        </div>
                                        <div className="mr-4 ml-auto">
                                            <div className="font-medium">رابرت دنیرو</div>
                                            <div className="text-gray-600 text-xs mt-0.5">11 مهر 1400</div>
                                        </div>
                                        <div className="py-1 px-2 rounded-full text-xs bg-theme-9 text-white cursor-pointer font-medium">137 فروش</div>
                                    </div>
                                </div>
                                <div className="intro-y">
                                    <div className="box px-4 py-4 mb-3 flex items-center zoom-in">
                                        <div className="w-10 h-10 flex-none image-fit rounded-md overflow-hidden">
                                            <img alt="Rubick Tailwind HTML Admin Template" src="dist/images/profile-3.jpg" />
                                        </div>
                                        <div className="mr-4 ml-auto">
                                            <div className="font-medium">جان تراولتا</div>
                                            <div className="text-gray-600 text-xs mt-0.5">14  آبان 1400</div>
                                        </div>
                                        <div className="py-1 px-2 rounded-full text-xs bg-theme-9 text-white cursor-pointer font-medium">137 فروش</div>
                                    </div>
                                </div>
                                <div className="intro-y">
                                    <div className="box px-4 py-4 mb-3 flex items-center zoom-in">
                                        <div className="w-10 h-10 flex-none image-fit rounded-md overflow-hidden">
                                            <img alt="Rubick Tailwind HTML Admin Template" src="dist/images/profile-12.jpg" />
                                        </div>
                                        <div className="mr-4 ml-auto">
                                            <div className="font-medium">آرنولد شوایتگز</div>
                                            <div className="text-gray-600 text-xs mt-0.5">16  آذر  1400</div>
                                        </div>
                                        <div className="py-1 px-2 rounded-full text-xs bg-theme-9 text-white cursor-pointer font-medium">137 فروش</div>
                                    </div>
                                </div>
                                <a href className="intro-y w-full block text-center rounded-md py-4 border border-dotted border-theme-15 dark:border-dark-5 text-theme-16 dark:text-gray-600">مشاهده بیشتر</a>
                            </div>
                        </div>
                        {/* END: Weekly Best Sellers */}
                        {/* BEGIN: General Report */}
                        <div className="col-span-12 grid grid-cols-12 gap-6 mt-8">
                            <div className="col-span-12 sm:col-span-6 xxl:col-span-3 intro-y">
                                <div className="box p-5 zoom-in">
                                    <div className="flex items-center">
                                        <div className="w-2/4 flex-none">
                                            <div className="text-lg font-medium truncate">هدف فروش </div>
                                            <div className="text-gray-600 mt-1">300 فروش </div>
                                        </div>
                                        <div className="flex-none mr-auto relative">
                                            <canvas id="report-donut-chart-1" width={90} height={90} />
                                            <div className="font-medium absolute w-full h-full flex items-center justify-center top-0 left-0">20%</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-span-12 sm:col-span-6 xxl:col-span-3 intro-y">
                                <div className="box p-5 zoom-in">
                                    <div className="flex">
                                        <div className="text-lg font-medium truncate mr-3">شبکه های اجتماعی </div>
                                        <div className="py-1 px-2 flex items-center rounded-full text-xs bg-gray-200 dark:bg-dark-5 text-gray-600 dark:text-gray-300 cursor-pointer mr-auto truncate">320 فالوور</div>
                                    </div>
                                    <div className="mt-4">
                                        <canvas className="simple-line-chart-1 -ml-1" height={60} />
                                    </div>
                                </div>
                            </div>
                            <div className="col-span-12 sm:col-span-6 xxl:col-span-3 intro-y">
                                <div className="box p-5 zoom-in">
                                    <div className="flex items-center">
                                        <div className="w-2/4 flex-none">
                                            <div className="text-lg font-medium truncate">محصولات جدید</div>
                                            <div className="text-gray-600 mt-1">1450 محصول</div>
                                        </div>
                                        <div className="flex-none mr-auto relative">
                                            <canvas id="report-donut-chart-2" width={90} height={90} />
                                            <div className="font-medium absolute w-full h-full flex items-center justify-center top-0 left-0">45%</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-span-12 sm:col-span-6 xxl:col-span-3 intro-y">
                                <div className="box p-5 zoom-in">
                                    <div className="flex">
                                        <div className="text-lg font-medium truncate mr-3">تبلیغات پست شده</div>
                                        <div className="py-1 px-2 flex items-center rounded-full text-xs bg-gray-200 dark:bg-dark-5 text-gray-600 dark:text-gray-300 cursor-pointer mr-auto truncate">180 کمپین</div>
                                    </div>
                                    <div className="mt-4">
                                        <canvas className="simple-line-chart-1 -ml-1" height={60} />
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* END: General Report */}
                        {/* BEGIN: Weekly Top Products */}
                        <div className="col-span-12 mt-6">
                            <div className="intro-y block sm:flex items-center h-10">
                                <h2 className="text-lg font-medium truncate ml-5">
                                    محصولات برتر هفته
                                </h2>
                                <div className="flex items-center sm:mr-auto mt-3 sm:mt-0">
                                    <button className="btn box flex items-center text-gray-700 dark:text-gray-300"> <i data-feather="file-text" className="hidden sm:block w-4 h-4 ml-2" /> خروجی اکسل </button>
                                    <button className="mr-3 btn box flex items-center text-gray-700 dark:text-gray-300"> <i data-feather="file-text" className="hidden sm:block w-4 h-4 ml-2" /> خروجی پی‌دی‌اف </button>
                                </div>
                            </div>
                            <div className="intro-y overflow-auto lg:overflow-visible mt-8 sm:mt-0">
                                <table className="table table-report sm:mt-2">
                                    <thead>
                                        <tr>
                                            <th className="whitespace-nowrap">تصاویر</th>
                                            <th className="whitespace-nowrap">نام محصول</th>
                                            <th className="text-center whitespace-nowrap">موجودی</th>
                                            <th className="text-center whitespace-nowrap">وضعیت</th>
                                            <th className="text-center whitespace-nowrap">فعالیت</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr className="intro-x">
                                            <td className="w-40">
                                                <div className="flex">
                                                    <div className="w-10 h-10 image-fit zoom-in">
                                                        <img alt="Rubick Tailwind HTML Admin Template" className="tooltip rounded-full" src="dist/images/preview-8.jpg" title="اپلود شده 27 آذر 1400 " />
                                                    </div>
                                                    <div className="w-10 h-10 image-fit zoom-in -ml-5">
                                                        <img alt="Rubick Tailwind HTML Admin Template" className="tooltip rounded-full" src="dist/images/preview-7.jpg" title="اپلود شده 26 مهر 1400 " />
                                                    </div>
                                                    <div className="w-10 h-10 image-fit zoom-in -ml-5">
                                                        <img alt="Rubick Tailwind HTML Admin Template" className="tooltip rounded-full" src="dist/images/preview-14.jpg" title="اپلود شده 16 مهر 1400 " />
                                                    </div>
                                                </div>
                                            </td>
                                            <td>
                                                <a href className="font-medium whitespace-nowrap">دل ایکس‌پی‌اس </a>
                                                <div className="text-gray-600 text-xs whitespace-nowrap mt-0.5">کامپیوتر و لپ تاپ</div>
                                            </td>
                                            <td className="text-center">110</td>
                                            <td className="w-40">
                                                <div className="flex items-center justify-center text-theme-9"> <i data-feather="check-square" className="w-4 h-4 ml-2" /> فعال </div>
                                            </td>
                                            <td className="table-report__action w-56">
                                                <div className="flex justify-center items-center">
                                                    <a className="flex items-center ml-3" href> <i data-feather="check-square" className="w-4 h-4 ml-1" /> ویرایش</a>
                                                    <a className="flex items-center text-theme-6" href> <i data-feather="trash-2" className="w-4 h-4 ml-1" /> حذف </a>
                                                </div>
                                            </td>
                                        </tr>
                                        <tr className="intro-x">
                                            <td className="w-40">
                                                <div className="flex">
                                                    <div className="w-10 h-10 image-fit zoom-in">
                                                        <img alt="Rubick Tailwind HTML Admin Template" className="tooltip rounded-full" src="dist/images/preview-6.jpg" title="اپلود شده 11 تیر 1400" />
                                                    </div>
                                                    <div className="w-10 h-10 image-fit zoom-in -ml-5">
                                                        <img alt="Rubick Tailwind HTML Admin Template" className="tooltip rounded-full" src="dist/images/preview-8.jpg" title="اپلود شده 23 تیر 1400" />
                                                    </div>
                                                    <div className="w-10 h-10 image-fit zoom-in -ml-5">
                                                        <img alt="Rubick Tailwind HTML Admin Template" className="tooltip rounded-full" src="dist/images/preview-8.jpg" title="اپلود شده 17 دی 1400" />
                                                    </div>
                                                </div>
                                            </td>
                                            <td>
                                                <a href className="font-medium whitespace-nowrap">سامسونگ کیوناین تی‌وی</a>
                                                <div className="text-gray-600 text-xs whitespace-nowrap mt-0.5">الکترونیک</div>
                                            </td>
                                            <td className="text-center">113</td>
                                            <td className="w-40">
                                                <div className="flex items-center justify-center text-theme-9"> <i data-feather="check-square" className="w-4 h-4 ml-2" /> فعال </div>
                                            </td>
                                            <td className="table-report__action w-56">
                                                <div className="flex justify-center items-center">
                                                    <a className="flex items-center ml-3" href> <i data-feather="check-square" className="w-4 h-4 ml-1" /> ویرایش</a>
                                                    <a className="flex items-center text-theme-6" href> <i data-feather="trash-2" className="w-4 h-4 ml-1" /> حذف </a>
                                                </div>
                                            </td>
                                        </tr>
                                        <tr className="intro-x">
                                            <td className="w-40">
                                                <div className="flex">
                                                    <div className="w-10 h-10 image-fit zoom-in">
                                                        <img alt="Rubick Tailwind HTML Admin Template" className="tooltip rounded-full" src="dist/images/preview-14.jpg" title="اپلود شده 14 بهمن 1400" />
                                                    </div>
                                                    <div className="w-10 h-10 image-fit zoom-in -ml-5">
                                                        <img alt="Rubick Tailwind HTML Admin Template" className="tooltip rounded-full" src="dist/images/preview-2.jpg" title="اپلود شده 18مهر 1400" />
                                                    </div>
                                                    <div className="w-10 h-10 image-fit zoom-in -ml-5">
                                                        <img alt="Rubick Tailwind HTML Admin Template" className="tooltip rounded-full" src="dist/images/preview-1.jpg" title="اپلود شده 19 تیر 1400" />
                                                    </div>
                                                </div>
                                            </td>
                                            <td>
                                                <a href className="font-medium whitespace-nowrap">سامسونگ اس بیست اولترا</a>
                                                <div className="text-gray-600 text-xs whitespace-nowrap mt-0.5">گوشی هوشمند و لپتاپ</div>
                                            </td>
                                            <td className="text-center">140</td>
                                            <td className="w-40">
                                                <div className="flex items-center justify-center text-theme-9"> <i data-feather="check-square" className="w-4 h-4 ml-2" /> فعال </div>
                                            </td>
                                            <td className="table-report__action w-56">
                                                <div className="flex justify-center items-center">
                                                    <a className="flex items-center ml-3" href> <i data-feather="check-square" className="w-4 h-4 ml-1" /> ویرایش</a>
                                                    <a className="flex items-center text-theme-6" href> <i data-feather="trash-2" className="w-4 h-4 ml-1" /> حذف </a>
                                                </div>
                                            </td>
                                        </tr>
                                        <tr className="intro-x">
                                            <td className="w-40">
                                                <div className="flex">
                                                    <div className="w-10 h-10 image-fit zoom-in">
                                                        <img alt="Rubick Tailwind HTML Admin Template" className="tooltip rounded-full" src="dist/images/preview-7.jpg" title="اپلود شده 16 مهر 1400" />
                                                    </div>
                                                    <div className="w-10 h-10 image-fit zoom-in -ml-5">
                                                        <img alt="Rubick Tailwind HTML Admin Template" className="tooltip rounded-full" src="dist/images/preview-8.jpg" title="اپلود شده 17 آذر 1400" />
                                                    </div>
                                                    <div className="w-10 h-10 image-fit zoom-in -ml-5">
                                                        <img alt="Rubick Tailwind HTML Admin Template" className="tooltip rounded-full" src="dist/images/preview-2.jpg" title="اپلود شده 27 آذر 1400" />
                                                    </div>
                                                </div>
                                            </td>
                                            <td>
                                                <a href className="font-medium whitespace-nowrap">نیکون ضد </a>
                                                <div className="text-gray-600 text-xs whitespace-nowrap mt-0.5">عکاسی</div>
                                            </td>
                                            <td className="text-center">50</td>
                                            <td className="w-40">
                                                <div className="flex items-center justify-center text-theme-9"> <i data-feather="check-square" className="w-4 h-4 ml-2" /> فعال </div>
                                            </td>
                                            <td className="table-report__action w-56">
                                                <div className="flex justify-center items-center">
                                                    <a className="flex items-center ml-3" href> <i data-feather="check-square" className="w-4 h-4 ml-1" /> ویرایش</a>
                                                    <a className="flex items-center text-theme-6" href> <i data-feather="trash-2" className="w-4 h-4 ml-1" /> حذف </a>
                                                </div>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                            <div className="intro-y flex flex-wrap sm:flex-row sm:flex-nowrap items-center mt-3">
                                <ul className="pagination">
                                    <li>
                                        <a className="pagination__link" href> <i className="w-4 h-4" data-feather="chevrons-right" /> </a>
                                    </li>
                                    <li>
                                        <a className="pagination__link" href> <i className="w-4 h-4" data-feather="chevron-right" /> </a>
                                    </li>
                                    <li> <a className="pagination__link" href>...</a> </li>
                                    <li> <a className="pagination__link" href>1</a> </li>
                                    <li> <a className="pagination__link pagination__link--active" href>2</a> </li>
                                    <li> <a className="pagination__link" href>3</a> </li>
                                    <li> <a className="pagination__link" href>...</a> </li>
                                    <li>
                                        <a className="pagination__link" href> <i className="w-4 h-4" data-feather="chevron-left" /> </a>
                                    </li>
                                    <li>
                                        <a className="pagination__link" href> <i className="w-4 h-4" data-feather="chevrons-left" /> </a>
                                    </li>
                                </ul>
                                <select className="w-20 form-select box mt-3 sm:mt-0">
                                    <option>10</option>
                                    <option>25</option>
                                    <option>35</option>
                                    <option>50</option>
                                </select>
                            </div>
                        </div>
                        {/* END: Weekly Top Products */}
                    </div>
                </div>
                <div className="col-span-12 xxl:col-span-3">
                    <div className="xxl:border-l border-theme-5 -mb-10 pb-10">
                        <div className="xxl:pl-6 grid grid-cols-12 gap-6">
                            {/* BEGIN: Transactions */}
                            <div className="col-span-12 md:col-span-6 xl:col-span-4 xxl:col-span-12 mt-3 xxl:mt-8">
                                <div className="intro-x flex items-center h-10">
                                    <h2 className="text-lg font-medium truncate ml-5">
                                        تراکنش ها
                                    </h2>
                                </div>
                                <div className="mt-5">
                                    <div className="intro-x">
                                        <div className="box px-5 py-3 mb-3 flex items-center zoom-in">
                                            <div className="w-10 h-10 flex-none image-fit rounded-full overflow-hidden">
                                                <img alt="Rubick Tailwind HTML Admin Template" src="dist/images/profile-14.jpg" />
                                            </div>
                                            <div className="mr-4 ml-auto">
                                                <div className="font-medium">کوین اسپیسی</div>
                                                <div className="text-gray-600 text-xs mt-0.5">27 شهریور 1400</div>
                                            </div>
                                            <div className="text-theme-9">71+ تومان</div>
                                        </div>
                                    </div>
                                    <div className="intro-x">
                                        <div className="box px-5 py-3 mb-3 flex items-center zoom-in">
                                            <div className="w-10 h-10 flex-none image-fit rounded-full overflow-hidden">
                                                <img alt="Rubick Tailwind HTML Admin Template" src="dist/images/profile-12.jpg" />
                                            </div>
                                            <div className="mr-4 ml-auto">
                                                <div className="font-medium">رابرت دنیرو</div>
                                                <div className="text-gray-600 text-xs mt-0.5">11 مهر 1400</div>
                                            </div>
                                            <div className="text-theme-9">30+ تومان</div>
                                        </div>
                                    </div>
                                    <div className="intro-x">
                                        <div className="box px-5 py-3 mb-3 flex items-center zoom-in">
                                            <div className="w-10 h-10 flex-none image-fit rounded-full overflow-hidden">
                                                <img alt="Rubick Tailwind HTML Admin Template" src="dist/images/profile-3.jpg" />
                                            </div>
                                            <div className="mr-4 ml-auto">
                                                <div className="font-medium">جان تراولتا</div>
                                                <div className="text-gray-600 text-xs mt-0.5">14  آبان 1400</div>
                                            </div>
                                            <div className="text-theme-9">105+ تومان</div>
                                        </div>
                                    </div>
                                    <div className="intro-x">
                                        <div className="box px-5 py-3 mb-3 flex items-center zoom-in">
                                            <div className="w-10 h-10 flex-none image-fit rounded-full overflow-hidden">
                                                <img alt="Rubick Tailwind HTML Admin Template" src="dist/images/profile-12.jpg" />
                                            </div>
                                            <div className="mr-4 ml-auto">
                                                <div className="font-medium">آرنولد شوایتگز</div>
                                                <div className="text-gray-600 text-xs mt-0.5">16  آذر  1400</div>
                                            </div>
                                            <div className="text-theme-9">43+ تومان</div>
                                        </div>
                                    </div>
                                    <div className="intro-x">
                                        <div className="box px-5 py-3 mb-3 flex items-center zoom-in">
                                            <div className="w-10 h-10 flex-none image-fit rounded-full overflow-hidden">
                                                <img alt="Rubick Tailwind HTML Admin Template" src="dist/images/profile-13.jpg" />
                                            </div>
                                            <div className="mr-4 ml-auto">
                                                <div className="font-medium">راسل کرو</div>
                                                <div className="text-gray-600 text-xs mt-0.5">6 شهریور 1400</div>
                                            </div>
                                            <div className="text-theme-9">109+ تومان</div>
                                        </div>
                                    </div>
                                    <a href className="intro-x w-full block text-center rounded-md py-3 border border-dotted border-theme-15 dark:border-dark-5 text-theme-16 dark:text-gray-600">مشاهده بیشتر</a>
                                </div>
                            </div>
                            {/* END: Transactions */}
                            {/* BEGIN: Recent Activities */}
                            <div className="col-span-12 md:col-span-6 xl:col-span-4 xxl:col-span-12 mt-3">
                                <div className="intro-x flex items-center h-10">
                                    <h2 className="text-lg font-medium truncate ml-5">
                                        فعالیت های اخیر
                                    </h2>
                                    <a href className="mr-auto text-theme-1 dark:text-theme-10 truncate"> بیشتر </a>
                                </div>
                                <div className="report-timeline mt-5 relative">
                                    <div className="intro-x relative flex items-center mb-3">
                                        <div className="report-timeline__image">
                                            <div className="w-10 h-10 flex-none image-fit rounded-full overflow-hidden">
                                                <img alt="Rubick Tailwind HTML Admin Template" src="dist/images/profile-1.jpg" />
                                            </div>
                                        </div>
                                        <div className="box px-5 py-3 mr-4 flex-1 zoom-in">
                                            <div className="flex items-center">
                                                <div className="font-medium">دنزل واشینگتون</div>
                                                <div className="text-xs text-gray-500 mr-auto">07:00 صبح</div>
                                            </div>
                                            <div className="text-gray-600 mt-1"> به تیم پیوسته است </div>
                                        </div>
                                    </div>
                                    <div className="intro-x relative flex items-center mb-3">
                                        <div className="report-timeline__image">
                                            <div className="w-10 h-10 flex-none image-fit rounded-full overflow-hidden">
                                                <img alt="Rubick Tailwind HTML Admin Template" src="dist/images/profile-3.jpg" />
                                            </div>
                                        </div>
                                        <div className="box px-5 py-3 mr-4 flex-1 zoom-in">
                                            <div className="flex items-center">
                                                <div className="font-medium">آرنولد شوایتگز</div>
                                                <div className="text-xs text-gray-500 mr-auto">07:00 صبح</div>
                                            </div>
                                            <div className="text-gray-600">
                                                <div className="mt-1"> 3 عکس جدید اضافه کرد </div>
                                                <div className="flex mt-2">
                                                    <div className="tooltip w-8 h-8 image-fit ml-1 zoom-in" title="Dell XPS 13">
                                                        <img alt="Rubick Tailwind HTML Admin Template" className="rounded-md border border-white" src="dist/images/preview-7.jpg" />
                                                    </div>
                                                    <div className="tooltip w-8 h-8 image-fit ml-1 zoom-in" title="Samsung Q90 QLED TV">
                                                        <img alt="Rubick Tailwind HTML Admin Template" className="rounded-md border border-white" src="dist/images/preview-2.jpg" />
                                                    </div>
                                                    <div className="tooltip w-8 h-8 image-fit ml-1 zoom-in" title="Samsung Galaxy S20 Ultra">
                                                        <img alt="Rubick Tailwind HTML Admin Template" className="rounded-md border border-white" src="dist/images/preview-9.jpg" />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="intro-x text-gray-500 text-xs text-center my-4">12 خرداد</div>
                                    <div className="intro-x relative flex items-center mb-3">
                                        <div className="report-timeline__image">
                                            <div className="w-10 h-10 flex-none image-fit rounded-full overflow-hidden">
                                                <img alt="Rubick Tailwind HTML Admin Template" src="dist/images/profile-11.jpg" />
                                            </div>
                                        </div>
                                        <div className="box px-5 py-3 mr-4 flex-1 zoom-in">
                                            <div className="flex items-center">
                                                <div className="font-medium">کیانو ریورز</div>
                                                <div className="text-xs text-gray-500 mr-auto">07:00 صبح</div>
                                            </div>
                                            <div className="text-gray-600 mt-1"> تغییر <a className="text-theme-1 dark:text-theme-10" href>سونی مستر سریز ای‌ناین‌جی</a> قیمت و توضیحات</div>
                                        </div>
                                    </div>
                                    <div className="intro-x relative flex items-center mb-3">
                                        <div className="report-timeline__image">
                                            <div className="w-10 h-10 flex-none image-fit rounded-full overflow-hidden">
                                                <img alt="Rubick Tailwind HTML Admin Template" src="dist/images/profile-9.jpg" />
                                            </div>
                                        </div>
                                        <div className="box px-5 py-3 mr-4 flex-1 zoom-in">
                                            <div className="flex items-center">
                                                <div className="font-medium">جانی دپ</div>
                                                <div className="text-xs text-gray-500 mr-auto">07:00 صبح</div>
                                            </div>
                                            <div className="text-gray-600 mt-1"> تغییر <a className="text-theme-1 dark:text-theme-10" href>نیکون ضد </a>  توضیحات</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* END: Recent Activities */}
                            {/* BEGIN: Important Notes */}
                            <div className="col-span-12 md:col-span-6 xl:col-span-12 xl:col-start-1 xl:row-start-1 xxl:col-start-auto xxl:row-start-auto mt-3">
                                <div className="intro-x flex items-center h-10">
                                    <h2 className="text-lg font-medium truncate ml-auto">
                                        یادداشت های مهم
                                    </h2>
                                    <button data-carousel="important-notes" data-target="prev" className="tiny-slider-navigator btn px-2 border-gray-400 text-gray-700 dark:text-gray-300 mr-2"> <i data-feather="chevron-right" className="w-4 h-4" /> </button>
                                    <button data-carousel="important-notes" data-target="next" className="tiny-slider-navigator btn px-2 border-gray-400 text-gray-700 dark:text-gray-300 mr-2"> <i data-feather="chevron-left" className="w-4 h-4" /> </button>
                                </div>
                                <div className="mt-5 intro-x">
                                    <div className="box zoom-in">
                                        <div className="tiny-slider" id="important-notes">
                                            <div className="p-5">
                                                <div className="text-base font-medium truncate">لورم ایپسوم متن ساختگی با تولید سادگی</div>
                                                <div className="text-gray-500 mt-1"> 20 ساعت قبل </div>
                                                <div className="text-gray-600 text-right mt-1">لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلیتکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد.</div>
                                                <div className="font-medium flex mt-5">
                                                    <button type="button" className="btn btn-outline-secondary py-1 px-2 ">رد کردن</button>
                                                    <button type="button" className="btn btn-secondary py-1 px-2 ml-auto ml-auto">مشاهده نکته</button>
                                                </div>
                                            </div>
                                            <div className="p-5">
                                                <div className="text-base font-medium truncate">لورم ایپسوم متن ساختگی با تولید سادگی</div>
                                                <div className="text-gray-500 mt-1"> 20 ساعت قبل </div>
                                                <div className="text-gray-600 text-right mt-1">لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلیتکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد.</div>
                                                <div className="font-medium flex mt-5">
                                                    <button type="button" className="btn btn-outline-secondary py-1 px-2 ">رد کردن</button>
                                                    <button type="button" className="btn btn-secondary py-1 px-2 ml-auto ml-auto">مشاهده نکته</button>
                                                </div>
                                            </div>
                                            <div className="p-5">
                                                <div className="text-base font-medium truncate">لورم ایپسوم متن ساختگی با تولید سادگی</div>
                                                <div className="text-gray-500 mt-1"> 20 ساعت قبل </div>
                                                <div className="text-gray-600 text-right mt-1">لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلیتکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد.</div>
                                                <div className="font-medium flex mt-5">
                                                    <button type="button" className="btn btn-outline-secondary py-1 px-2 ">رد کردن</button>
                                                    <button type="button" className="btn btn-secondary py-1 px-2 ml-auto ml-auto">مشاهده نکته</button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* END: Important Notes */}
                            {/* BEGIN: Schedules */}
                            <div className="col-span-12 md:col-span-6 xl:col-span-4 xxl:col-span-12 xl:col-start-1 xl:row-start-2 xxl:col-start-auto xxl:row-start-auto mt-3">
                                <div className="intro-x flex items-center h-10">
                                    <h2 className="text-lg font-medium truncate ml-5">
                                        برنامه ها
                                    </h2>
                                    <a href className="mr-auto text-theme-1 dark:text-theme-10 truncate flex items-center"> <i data-feather="plus" className="w-4 h-4 ml-1" /> افزودن برنامه های جدید </a>
                                </div>
                                <div className="mt-5">
                                    <div className="intro-x box">
                                        <div className="p-5">
                                            <div className="flex">
                                                <i data-feather="chevron-right" className="w-5 h-5 text-gray-600" />
                                                <div className="font-medium text-base mx-auto">مهر</div>
                                                <i data-feather="chevron-left" className="w-5 h-5 text-gray-600" />
                                            </div>
                                            <div className="grid grid-cols-7 gap-4 mt-5 text-center cal">
                                                <div className="font-medium">شنبه</div>
                                                <div className="font-medium">یکشنبه</div>
                                                <div className="font-medium">دوشنبه</div>
                                                <div className="font-medium">سه‌شنبه</div>
                                                <div className="font-medium">چهار‌شنبه</div>
                                                <div className="font-medium">پنجشنبه</div>
                                                <div className="font-medium">جمعه</div>
                                                <div className="py-0.5 rounded relative text-gray-600">29</div>
                                                <div className="py-0.5 rounded relative text-gray-600">30</div>
                                                <div className="py-0.5 rounded relative text-gray-600">31</div>
                                                <div className="py-0.5 rounded relative">1</div>
                                                <div className="py-0.5 rounded relative">2</div>
                                                <div className="py-0.5 rounded relative">3</div>
                                                <div className="py-0.5 rounded relative">4</div>
                                                <div className="py-0.5 rounded relative">5</div>
                                                <div className="py-0.5 bg-theme-29 dark:bg-theme-10 rounded relative">6</div>
                                                <div className="py-0.5 rounded relative">7</div>
                                                <div className="py-0.5 bg-theme-26 dark:bg-theme-17 text-white rounded relative">8</div>
                                                <div className="py-0.5 rounded relative">9</div>
                                                <div className="py-0.5 rounded relative">10</div>
                                                <div className="py-0.5 rounded relative">11</div>
                                                <div className="py-0.5 rounded relative">12</div>
                                                <div className="py-0.5 rounded relative">13</div>
                                                <div className="py-0.5 rounded relative">14</div>
                                                <div className="py-0.5 rounded relative">15</div>
                                                <div className="py-0.5 rounded relative">16</div>
                                                <div className="py-0.5 rounded relative">17</div>
                                                <div className="py-0.5 rounded relative">18</div>
                                                <div className="py-0.5 rounded relative">19</div>
                                                <div className="py-0.5 rounded relative">20</div>
                                                <div className="py-0.5 rounded relative">21</div>
                                                <div className="py-0.5 rounded relative">22</div>
                                                <div className="py-0.5 bg-theme-30 dark:bg-theme-22 rounded relative">23</div>
                                                <div className="py-0.5 rounded relative">24</div>
                                                <div className="py-0.5 rounded relative">25</div>
                                                <div className="py-0.5 rounded relative">26</div>
                                                <div className="py-0.5 bg-theme-31 dark:bg-theme-23 rounded relative">27</div>
                                                <div className="py-0.5 rounded relative">28</div>
                                                <div className="py-0.5 rounded relative">29</div>
                                                <div className="py-0.5 rounded relative">30</div>
                                                <div className="py-0.5 rounded relative text-gray-600">1</div>
                                                <div className="py-0.5 rounded relative text-gray-600">2</div>
                                                <div className="py-0.5 rounded relative text-gray-600">3</div>
                                                <div className="py-0.5 rounded relative text-gray-600">4</div>
                                                <div className="py-0.5 rounded relative text-gray-600">5</div>
                                                <div className="py-0.5 rounded relative text-gray-600">6</div>
                                                <div className="py-0.5 rounded relative text-gray-600">7</div>
                                                <div className="py-0.5 rounded relative text-gray-600">8</div>
                                                <div className="py-0.5 rounded relative text-gray-600">9</div>
                                            </div>
                                        </div>
                                        <div className="border-t border-gray-200 dark:border-dark-5 p-5">
                                            <div className="flex items-center">
                                                <div className="w-2 h-2 bg-theme-11 rounded-full ml-3" />
                                                <span className="truncate">UI/UX ورکشاپ</span>
                                                <div className="h-px flex-1 border border-r border-dashed border-gray-300 mx-3 xl:hidden" />
                                                <span className="font-medium xl:mr-auto">23ام</span>
                                            </div>
                                            <div className="flex items-center mt-4">
                                                <div className="w-2 h-2 bg-theme-1 dark:bg-theme-10 rounded-full ml-3" />
                                                <span className="truncate">VueJs توسعه فرانت با</span>
                                                <div className="h-px flex-1 border border-r border-dashed border-gray-300 mx-3 xl:hidden" />
                                                <span className="font-medium xl:mr-auto">10ام</span>
                                            </div>
                                            <div className="flex items-center mt-4">
                                                <div className="w-2 h-2 bg-theme-12 rounded-full ml-3" />
                                                <span className="truncate">لاراول ای پی ا رست</span>
                                                <div className="h-px flex-1 border border-r border-dashed border-gray-300 mx-3 xl:hidden" />
                                                <span className="font-medium xl:mr-auto">31ام</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* END: Schedules */}
                        </div>
                    </div>
                </div>
            </div>
            {/* END: Mobile Menu */}

        </div>
    )
}

export default HomePage
