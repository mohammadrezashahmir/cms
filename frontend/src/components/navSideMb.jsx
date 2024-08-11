import React from 'react'

function NavSideMb() {
    return (
        <div class="mobile-menu md:hidden">
            <div class="mobile-menu-bar">
                <a href="" class="flex ml-auto">
                    <img alt="Rubick Tailwind HTML Admin Template" class="w-6" src="{% static 'dist/images/logo.svg' %}"/>
                </a>
                <a href="javascript:;" id="mobile-menu-toggler"> <i data-feather="bar-chart-2"
                    class="w-8 h-8 text-white transform -rotate-90"></i>
                </a>
            </div>
            <ul class="border-t border-theme-29 py-5 hidden">
                <li>
                    <a href="javascript:;" class="menu">
                        <div class="menu__icon"><i data-feather="home"></i></div>
                        <div class="menu__title"> دشبرد <i data-feather="chevron-down" class="menu__sub-icon "></i></div>
                    </a>
                    <ul class="">
                        <li>
                            <a href="index.html" class="menu">
                                <div class="menu__icon"><i data-feather="activity"></i></div>
                                <div class="menu__title"> نمای کل 1</div>
                            </a>
                        </li>
                        <li>
                            <a href="side-menu-light-dashboard-overview-2.html" class="menu">
                                <div class="menu__icon"><i data-feather="activity"></i></div>
                                <div class="menu__title"> نمای کل 2</div>
                            </a>
                        </li>
                        <li>
                            <a href="side-menu-light-dashboard-overview-3.html" class="menu">
                                <div class="menu__icon"><i data-feather="activity"></i></div>
                                <div class="menu__title"> نمای کل 3</div>
                            </a>
                        </li>
                    </ul>
                </li>
                <li>
                    <a href="side-menu-light-file-manager.html" class="menu">
                        <div class="menu__icon"><i data-feather="hard-drive"></i></div>
                        <div class="menu__title"> مدیریت فایل</div>
                    </a>
                </li>
                <li>
                    <a href="side-menu-light-point-of-sale.html" class="menu">
                        <div class="menu__icon"><i data-feather="credit-card"></i></div>
                        <div class="menu__title"> نمای فروش</div>
                    </a>
                </li>
                <li>
                    <a href="side-menu-light-chat.html" class="menu">
                        <div class="menu__icon"><i data-feather="message-square"></i></div>
                        <div class="menu__title"> چت</div>
                    </a>
                </li>
                <li>
                    <a href="side-menu-light-post.html" class="menu">
                        <div class="menu__icon"><i data-feather="file-text"></i></div>
                        <div class="menu__title"> پست</div>
                    </a>
                </li>
                <li>
                    <a href="side-menu-light-calendar.html" class="menu">
                        <div class="menu__icon"><i data-feather="calendar"></i></div>
                        <div class="menu__title"> تقویم</div>
                    </a>
                </li>
                <li class="menu__devider my-6"></li>
                <li>
                    <a href="javascript:;" class="menu">
                        <div class="menu__icon"><i data-feather="edit"></i></div>
                        <div class="menu__title"> کراد <i data-feather="chevron-down" class="menu__sub-icon "></i></div>
                    </a>
                    <ul class="">
                        <li>
                            <a href="side-menu-light-crud-data-list.html" class="menu">
                                <div class="menu__icon"><i data-feather="activity"></i></div>
                                <div class="menu__title"> لیست داده</div>
                            </a>
                        </li>
                        <li>
                            <a href="side-menu-light-crud-form.html" class="menu">
                                <div class="menu__icon"><i data-feather="activity"></i></div>
                                <div class="menu__title"> فرم</div>
                            </a>
                        </li>
                    </ul>
                </li>
                <li>
                    <a href="javascript:;" class="menu">
                        <div class="menu__icon"><i data-feather="users"></i></div>
                        <div class="menu__title"> کاربران <i data-feather="chevron-down" class="menu__sub-icon "></i></div>
                    </a>
                    <ul class="">
                        <li>
                            <a href="side-menu-light-users-layout-1.html" class="menu">
                                <div class="menu__icon"><i data-feather="activity"></i></div>
                                <div class="menu__title"> چینش 1</div>
                            </a>
                        </li>
                        <li>
                            <a href="side-menu-light-users-layout-2.html" class="menu">
                                <div class="menu__icon"><i data-feather="activity"></i></div>
                                <div class="menu__title"> چینش 2</div>
                            </a>
                        </li>
                        <li>
                            <a href="side-menu-light-users-layout-3.html" class="menu">
                                <div class="menu__icon"><i data-feather="activity"></i></div>
                                <div class="menu__title"> چینش 3</div>
                            </a>
                        </li>
                    </ul>
                </li>
                <li>
                    <a href="javascript:;" class="menu">
                        <div class="menu__icon"><i data-feather="trello"></i></div>
                        <div class="menu__title"> پروفایل <i data-feather="chevron-down" class="menu__sub-icon "></i></div>
                    </a>
                    <ul class="">
                        <li>
                            <a href="side-menu-light-profile-overview-1.html" class="menu">
                                <div class="menu__icon"><i data-feather="activity"></i></div>
                                <div class="menu__title"> نمای کل 1</div>
                            </a>
                        </li>
                    </ul>
                </li>
                <li>
                    <a href="javascript:;" class="menu menu--active">
                        <div class="menu__icon"><i data-feather="layout"></i></div>
                        <div class="menu__title"> صفحات <i data-feather="chevron-down"
                            class="menu__sub-icon transform rotate-180"></i></div>
                    </a>
                    <ul class="menu__sub-open">
                        <li>
                            <a href="javascript:;" class="menu">
                                <div class="menu__icon"><i data-feather="activity"></i></div>
                                <div class="menu__title"> ویزارد <i data-feather="chevron-down" class="menu__sub-icon "></i>
                                </div>
                            </a>
                            <ul class="">
                                <li>
                                    <a href="side-menu-light-wizard-layout-1.html" class="menu">
                                        <div class="menu__icon"><i data-feather="zap"></i></div>
                                        <div class="menu__title">چینش 1</div>
                                    </a>
                                </li>
                                <li>
                                    <a href="side-menu-light-wizard-layout-2.html" class="menu">
                                        <div class="menu__icon"><i data-feather="zap"></i></div>
                                        <div class="menu__title">چینش 2</div>
                                    </a>
                                </li>
                                <li>
                                    <a href="side-menu-light-wizard-layout-3.html" class="menu">
                                        <div class="menu__icon"><i data-feather="zap"></i></div>
                                        <div class="menu__title">چینش 3</div>
                                    </a>
                                </li>
                            </ul>
                        </li>
                        <li>
                            <a href="javascript:;" class="menu">
                                <div class="menu__icon"><i data-feather="activity"></i></div>
                                <div class="menu__title"> بلاگ <i data-feather="chevron-down" class="menu__sub-icon "></i>
                                </div>
                            </a>
                            <ul class="">
                                <li>
                                    <a href="side-menu-light-blog-layout-1.html" class="menu">
                                        <div class="menu__icon"><i data-feather="zap"></i></div>
                                        <div class="menu__title">چینش 1</div>
                                    </a>
                                </li>
                                <li>
                                    <a href="side-menu-light-blog-layout-2.html" class="menu">
                                        <div class="menu__icon"><i data-feather="zap"></i></div>
                                        <div class="menu__title">چینش 2</div>
                                    </a>
                                </li>
                                <li>
                                    <a href="side-menu-light-blog-layout-3.html" class="menu">
                                        <div class="menu__icon"><i data-feather="zap"></i></div>
                                        <div class="menu__title">چینش 3</div>
                                    </a>
                                </li>
                            </ul>
                        </li>
                        <li>
                            <a href="login-light-login.html" class="menu">
                                <div class="menu__icon"><i data-feather="activity"></i></div>
                                <div class="menu__title"> ورود</div>
                            </a>
                        </li>
                        <li>
                            <a href="login-light-register.html" class="menu">
                                <div class="menu__icon"><i data-feather="activity"></i></div>
                                <div class="menu__title"> ثبت نام</div>
                            </a>
                        </li>
                        <li>
                            <a href="main-light-error-page.html" class="menu">
                                <div class="menu__icon"><i data-feather="activity"></i></div>
                                <div class="menu__title"> صفحه خطا</div>
                            </a>
                        </li>
                        <li>
                            <a href="side-menu-light-update-profile.html" class="menu menu--active">
                                <div class="menu__icon"><i data-feather="activity"></i></div>
                                <div class="menu__title"> بروزرسانی پروفایل</div>
                            </a>
                        </li>
                        <li>
                            <a href="side-menu-light-change-password.html" class="menu">
                                <div class="menu__icon"><i data-feather="activity"></i></div>
                                <div class="menu__title"> تغییر رمزعبور</div>
                            </a>
                        </li>
                    </ul>
                </li>
                <li class="menu__devider my-6"></li>
            </ul>
        </div>
    )
}

export default NavSideMb
