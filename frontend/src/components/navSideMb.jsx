import React from 'react'

function NavSideMb() {
    return (
        <div className="mobile-menu md:hidden">
            <div className="mobile-menu-bar">
                <a href className="flex ml-auto">
                    <img alt="Rubick Tailwind HTML Admin Template" className="w-6" src="{% static 'dist/images/logo.svg' %}" />
                </a>
                <a href="javascript:;" id="mobile-menu-toggler"> <i data-feather="bar-chart-2" className="w-8 h-8 text-white transform -rotate-90" />
                </a>
            </div>
            <ul className="border-t border-theme-29 py-5 hidden">
                <li>
                    <a href="javascript:;" className="menu">
                        <div className="menu__icon"><i data-feather="home" /></div>
                        <div className="menu__title"> دشبرد <i data-feather="chevron-down" className="menu__sub-icon " /></div>
                    </a>
                    <ul className>
                        <li>
                            <a href="index.html" className="menu">
                                <div className="menu__icon"><i data-feather="activity" /></div>
                                <div className="menu__title"> نمای کل 1</div>
                            </a>
                        </li>
                        <li>
                            <a href="side-menu-light-dashboard-overview-2.html" className="menu">
                                <div className="menu__icon"><i data-feather="activity" /></div>
                                <div className="menu__title"> نمای کل 2</div>
                            </a>
                        </li>
                        <li>
                            <a href="side-menu-light-dashboard-overview-3.html" className="menu">
                                <div className="menu__icon"><i data-feather="activity" /></div>
                                <div className="menu__title"> نمای کل 3</div>
                            </a>
                        </li>
                    </ul>
                </li>
                <li>
                    <a href="side-menu-light-file-manager.html" className="menu">
                        <div className="menu__icon"><i data-feather="hard-drive" /></div>
                        <div className="menu__title"> مدیریت فایل</div>
                    </a>
                </li>
                <li>
                    <a href="side-menu-light-point-of-sale.html" className="menu">
                        <div className="menu__icon"><i data-feather="credit-card" /></div>
                        <div className="menu__title"> نمای فروش</div>
                    </a>
                </li>
                <li>
                    <a href="side-menu-light-chat.html" className="menu">
                        <div className="menu__icon"><i data-feather="message-square" /></div>
                        <div className="menu__title"> چت</div>
                    </a>
                </li>
                <li>
                    <a href="side-menu-light-post.html" className="menu">
                        <div className="menu__icon"><i data-feather="file-text" /></div>
                        <div className="menu__title"> پست</div>
                    </a>
                </li>
                <li>
                    <a href="side-menu-light-calendar.html" className="menu">
                        <div className="menu__icon"><i data-feather="calendar" /></div>
                        <div className="menu__title"> تقویم</div>
                    </a>
                </li>
                <li className="menu__devider my-6" />
                <li>
                    <a href="javascript:;" className="menu">
                        <div className="menu__icon"><i data-feather="edit" /></div>
                        <div className="menu__title"> کراد <i data-feather="chevron-down" className="menu__sub-icon " /></div>
                    </a>
                    <ul className>
                        <li>
                            <a href="side-menu-light-crud-data-list.html" className="menu">
                                <div className="menu__icon"><i data-feather="activity" /></div>
                                <div className="menu__title"> لیست داده</div>
                            </a>
                        </li>
                        <li>
                            <a href="side-menu-light-crud-form.html" className="menu">
                                <div className="menu__icon"><i data-feather="activity" /></div>
                                <div className="menu__title"> فرم</div>
                            </a>
                        </li>
                    </ul>
                </li>
                <li>
                    <a href="javascript:;" className="menu">
                        <div className="menu__icon"><i data-feather="users" /></div>
                        <div className="menu__title"> کاربران <i data-feather="chevron-down" className="menu__sub-icon " /></div>
                    </a>
                    <ul className>
                        <li>
                            <a href="side-menu-light-users-layout-1.html" className="menu">
                                <div className="menu__icon"><i data-feather="activity" /></div>
                                <div className="menu__title"> چینش 1</div>
                            </a>
                        </li>
                        <li>
                            <a href="side-menu-light-users-layout-2.html" className="menu">
                                <div className="menu__icon"><i data-feather="activity" /></div>
                                <div className="menu__title"> چینش 2</div>
                            </a>
                        </li>
                        <li>
                            <a href="side-menu-light-users-layout-3.html" className="menu">
                                <div className="menu__icon"><i data-feather="activity" /></div>
                                <div className="menu__title"> چینش 3</div>
                            </a>
                        </li>
                    </ul>
                </li>
                <li>
                    <a href="javascript:;" className="menu">
                        <div className="menu__icon"><i data-feather="trello" /></div>
                        <div className="menu__title"> پروفایل <i data-feather="chevron-down" className="menu__sub-icon " /></div>
                    </a>
                    <ul className>
                        <li>
                            <a href="side-menu-light-profile-overview-1.html" className="menu">
                                <div className="menu__icon"><i data-feather="activity" /></div>
                                <div className="menu__title"> نمای کل 1</div>
                            </a>
                        </li>
                    </ul>
                </li>
                <li>
                    <a href="javascript:;" className="menu menu--active">
                        <div className="menu__icon"><i data-feather="layout" /></div>
                        <div className="menu__title"> صفحات <i data-feather="chevron-down" className="menu__sub-icon transform rotate-180" /></div>
                    </a>
                    <ul className="menu__sub-open">
                        <li>
                            <a href="javascript:;" className="menu">
                                <div className="menu__icon"><i data-feather="activity" /></div>
                                <div className="menu__title"> ویزارد <i data-feather="chevron-down" className="menu__sub-icon " />
                                </div>
                            </a>
                            <ul className>
                                <li>
                                    <a href="side-menu-light-wizard-layout-1.html" className="menu">
                                        <div className="menu__icon"><i data-feather="zap" /></div>
                                        <div className="menu__title">چینش 1</div>
                                    </a>
                                </li>
                                <li>
                                    <a href="side-menu-light-wizard-layout-2.html" className="menu">
                                        <div className="menu__icon"><i data-feather="zap" /></div>
                                        <div className="menu__title">چینش 2</div>
                                    </a>
                                </li>
                                <li>
                                    <a href="side-menu-light-wizard-layout-3.html" className="menu">
                                        <div className="menu__icon"><i data-feather="zap" /></div>
                                        <div className="menu__title">چینش 3</div>
                                    </a>
                                </li>
                            </ul>
                        </li>
                        <li>
                            <a href="javascript:;" className="menu">
                                <div className="menu__icon"><i data-feather="activity" /></div>
                                <div className="menu__title"> بلاگ <i data-feather="chevron-down" className="menu__sub-icon " />
                                </div>
                            </a>
                            <ul className>
                                <li>
                                    <a href="side-menu-light-blog-layout-1.html" className="menu">
                                        <div className="menu__icon"><i data-feather="zap" /></div>
                                        <div className="menu__title">چینش 1</div>
                                    </a>
                                </li>
                                <li>
                                    <a href="side-menu-light-blog-layout-2.html" className="menu">
                                        <div className="menu__icon"><i data-feather="zap" /></div>
                                        <div className="menu__title">چینش 2</div>
                                    </a>
                                </li>
                                <li>
                                    <a href="side-menu-light-blog-layout-3.html" className="menu">
                                        <div className="menu__icon"><i data-feather="zap" /></div>
                                        <div className="menu__title">چینش 3</div>
                                    </a>
                                </li>
                            </ul>
                        </li>
                        <li>
                            <a href="login-light-login.html" className="menu">
                                <div className="menu__icon"><i data-feather="activity" /></div>
                                <div className="menu__title"> ورود</div>
                            </a>
                        </li>
                        <li>
                            <a href="login-light-register.html" className="menu">
                                <div className="menu__icon"><i data-feather="activity" /></div>
                                <div className="menu__title"> ثبت نام</div>
                            </a>
                        </li>
                        <li>
                            <a href="main-light-error-page.html" className="menu">
                                <div className="menu__icon"><i data-feather="activity" /></div>
                                <div className="menu__title"> صفحه خطا</div>
                            </a>
                        </li>
                        <li>
                            <a href="side-menu-light-update-profile.html" className="menu menu--active">
                                <div className="menu__icon"><i data-feather="activity" /></div>
                                <div className="menu__title"> بروزرسانی پروفایل</div>
                            </a>
                        </li>
                        <li>
                            <a href="side-menu-light-change-password.html" className="menu">
                                <div className="menu__icon"><i data-feather="activity" /></div>
                                <div className="menu__title"> تغییر رمزعبور</div>
                            </a>
                        </li>
                    </ul>
                </li>
                <li className="menu__devider my-6" />
            </ul>
        </div>

    )
}

export default NavSideMb
