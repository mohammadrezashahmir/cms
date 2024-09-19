import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../../assets/dist/images/logo.svg'
function NavSideMb() {
    return (
        <div className="mobile-menu md:hidden">
            <div className="mobile-menu-bar">
                <div  className="flex ml-auto">
                    <img alt="لوگو" className="w-6" src={logo} />
                </div>
                <Link to="" id="mobile-menu-toggler"> <i data-feather="bar-chart-2" className="w-8 h-8 text-white transform -rotate-90" />
                </Link>
            </div>
            <ul className="border-t border-theme-29 py-5 hidden">
                <li>
                    <Link to="" className="menu">
                        <div className="menu__icon"><i data-feather="home" /></div>
                        <div className="menu__title"> دشبرد <i data-feather="chevron-down" className="menu__sub-icon " /></div>
                    </Link>
                    <ul >
                        <li>
                            <Link to="index.html" className="menu">
                                <div className="menu__icon"><i data-feather="activity" /></div>
                                <div className="menu__title"> نمای کل 1</div>
                            </Link>
                        </li>
                        <li>
                            <Link to="side-menu-light-dashboard-overview-2.html" className="menu">
                                <div className="menu__icon"><i data-feather="activity" /></div>
                                <div className="menu__title"> نمای کل 2</div>
                            </Link>
                        </li>
                        <li>
                            <Link to="side-menu-light-dashboard-overview-3.html" className="menu">
                                <div className="menu__icon"><i data-feather="activity" /></div>
                                <div className="menu__title"> نمای کل 3</div>
                            </Link>
                        </li>
                    </ul>
                </li>
                <li>
                    <Link to="side-menu-light-file-manager.html" className="menu">
                        <div className="menu__icon"><i data-feather="hard-drive" /></div>
                        <div className="menu__title"> مدیریت فایل</div>
                    </Link>
                </li>
                <li>
                    <Link to="side-menu-light-point-of-sale.html" className="menu">
                        <div className="menu__icon"><i data-feather="credit-card" /></div>
                        <div className="menu__title"> نمای فروش</div>
                    </Link>
                </li>
                <li>
                    <Link to="side-menu-light-chat.html" className="menu">
                        <div className="menu__icon"><i data-feather="message-square" /></div>
                        <div className="menu__title"> چت</div>
                    </Link>
                </li>
                <li>
                    <Link to="side-menu-light-post.html" className="menu">
                        <div className="menu__icon"><i data-feather="file-text" /></div>
                        <div className="menu__title"> پست</div>
                    </Link>
                </li>
                <li>
                    <Link to="side-menu-light-calendar.html" className="menu">
                        <div className="menu__icon"><i data-feather="calendar" /></div>
                        <div className="menu__title"> تقویم</div>
                    </Link>
                </li>
                <li className="menu__devider my-6" />
                <li>
                    <Link to="" className="menu">
                        <div className="menu__icon"><i data-feather="edit" /></div>
                        <div className="menu__title"> کراد <i data-feather="chevron-down" className="menu__sub-icon " /></div>
                    </Link>
                    <ul >
                        <li>
                            <Link to="side-menu-light-crud-data-list.html" className="menu">
                                <div className="menu__icon"><i data-feather="activity" /></div>
                                <div className="menu__title"> لیست داده</div>
                            </Link>
                        </li>
                        <li>
                            <Link to="side-menu-light-crud-form.html" className="menu">
                                <div className="menu__icon"><i data-feather="activity" /></div>
                                <div className="menu__title"> فرم</div>
                            </Link>
                        </li>
                    </ul>
                </li>
                <li>
                    <Link to="" className="menu">
                        <div className="menu__icon"><i data-feather="users" /></div>
                        <div className="menu__title"> کاربران <i data-feather="chevron-down" className="menu__sub-icon " /></div>
                    </Link>
                    <ul >
                        <li>
                            <Link to="side-menu-light-users-layout-1.html" className="menu">
                                <div className="menu__icon"><i data-feather="activity" /></div>
                                <div className="menu__title"> چینش 1</div>
                            </Link>
                        </li>
                        <li>
                            <Link to="side-menu-light-users-layout-2.html" className="menu">
                                <div className="menu__icon"><i data-feather="activity" /></div>
                                <div className="menu__title"> چینش 2</div>
                            </Link>
                        </li>
                        <li>
                            <Link to="side-menu-light-users-layout-3.html" className="menu">
                                <div className="menu__icon"><i data-feather="activity" /></div>
                                <div className="menu__title"> چینش 3</div>
                            </Link>
                        </li>
                    </ul>
                </li>
                <li>
                    <Link to="" className="menu">
                        <div className="menu__icon"><i data-feather="trello" /></div>
                        <div className="menu__title"> پروفایل <i data-feather="chevron-down" className="menu__sub-icon " /></div>
                    </Link>
                    <ul >
                        <li>
                            <Link to="side-menu-light-profile-overview-1.html" className="menu">
                                <div className="menu__icon"><i data-feather="activity" /></div>
                                <div className="menu__title"> نمای کل 1</div>
                            </Link>
                        </li>
                    </ul>
                </li>
                <li>
                    <Link to="" className="menu menu--active">
                        <div className="menu__icon"><i data-feather="layout" /></div>
                        <div className="menu__title"> صفحات <i data-feather="chevron-down" className="menu__sub-icon transform rotate-180" /></div>
                    </Link>
                    <ul className="menu__sub-open">
                        <li>
                            <Link to="" className="menu">
                                <div className="menu__icon"><i data-feather="activity" /></div>
                                <div className="menu__title"> ویزارد <i data-feather="chevron-down" className="menu__sub-icon " />
                                </div>
                            </Link>
                            <ul >
                                <li>
                                    <Link to="side-menu-light-wizard-layout-1.html" className="menu">
                                        <div className="menu__icon"><i data-feather="zap" /></div>
                                        <div className="menu__title">چینش 1</div>
                                    </Link>
                                </li>
                                <li>
                                    <Link to="side-menu-light-wizard-layout-2.html" className="menu">
                                        <div className="menu__icon"><i data-feather="zap" /></div>
                                        <div className="menu__title">چینش 2</div>
                                    </Link>
                                </li>
                                <li>
                                    <Link to="side-menu-light-wizard-layout-3.html" className="menu">
                                        <div className="menu__icon"><i data-feather="zap" /></div>
                                        <div className="menu__title">چینش 3</div>
                                    </Link>
                                </li>
                            </ul>
                        </li>
                        <li>
                            <Link to="" className="menu">
                                <div className="menu__icon"><i data-feather="activity" /></div>
                                <div className="menu__title"> بلاگ <i data-feather="chevron-down" className="menu__sub-icon " />
                                </div>
                            </Link>
                            <ul >
                                <li>
                                    <Link to="side-menu-light-blog-layout-1.html" className="menu">
                                        <div className="menu__icon"><i data-feather="zap" /></div>
                                        <div className="menu__title">چینش 1</div>
                                    </Link>
                                </li>
                                <li>
                                    <Link to="side-menu-light-blog-layout-2.html" className="menu">
                                        <div className="menu__icon"><i data-feather="zap" /></div>
                                        <div className="menu__title">چینش 2</div>
                                    </Link>
                                </li>
                                <li>
                                    <Link to="side-menu-light-blog-layout-3.html" className="menu">
                                        <div className="menu__icon"><i data-feather="zap" /></div>
                                        <div className="menu__title">چینش 3</div>
                                    </Link>
                                </li>
                            </ul>
                        </li>
                        <li>
                            <Link to="login-light-login.html" className="menu">
                                <div className="menu__icon"><i data-feather="activity" /></div>
                                <div className="menu__title"> ورود</div>
                            </Link>
                        </li>
                        <li>
                            <Link to="login-light-register.html" className="menu">
                                <div className="menu__icon"><i data-feather="activity" /></div>
                                <div className="menu__title"> ثبت نام</div>
                            </Link>
                        </li>
                        <li>
                            <Link to="main-light-error-page.html" className="menu">
                                <div className="menu__icon"><i data-feather="activity" /></div>
                                <div className="menu__title"> صفحه خطا</div>
                            </Link>
                        </li>
                        <li>
                            <Link to="side-menu-light-update-profile.html" className="menu menu--active">
                                <div className="menu__icon"><i data-feather="activity" /></div>
                                <div className="menu__title"> بروزرسانی پروفایل</div>
                            </Link>
                        </li>
                        <li>
                            <Link to="side-menu-light-change-password.html" className="menu">
                                <div className="menu__icon"><i data-feather="activity" /></div>
                                <div className="menu__title"> تغییر رمزعبور</div>
                            </Link>
                        </li>
                    </ul>
                </li>
                <li className="menu__devider my-6" />
            </ul>
        </div>

    )
}

export default NavSideMb
