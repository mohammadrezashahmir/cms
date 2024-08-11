import React from 'react'
import { Link } from 'react-router-dom'
function Aside() {
    return (
        <nav className="side-nav">
            <Link to className="intro-x flex items-center pr-5 pt-4">
                <img alt="Rubick Tailwind HTML Admin Template" className="w-6" src="dist/images/logo.svg" />
                <span className="hidden xl:block text-white text-lg mr-3">رو<span className="font-medium">بیک</span> </span>
            </Link>
            <div className="side-nav__devider my-6" />
            <ul>
                <li>
                    <Link to="javascript:;" className="side-menu side-menu--active">
                        <div className="side-menu__icon"> <i data-feather="home" /> </div>
                        <div className="side-menu__title">
                            دشبرد
                            <div className="side-menu__sub-icon transform rotate-180"> <i data-feather="chevron-down" /> </div>
                        </div>
                    </Link>
                    <ul className="side-menu__sub-open">
                        <li>
                            <Link to="index.html" className="side-menu side-menu--active">
                                <div className="side-menu__icon"> <i data-feather="activity" /> </div>
                                <div className="side-menu__title"> نمای کل 1 </div>
                            </Link>
                        </li>
                        <li>
                            <Link to="side-menu-light-dashboard-overview-2.html" className="side-menu">
                                <div className="side-menu__icon"> <i data-feather="activity" /> </div>
                                <div className="side-menu__title"> نمای کل 2 </div>
                            </Link>
                        </li>
                        <li>
                            <Link to="side-menu-light-dashboard-overview-3.html" className="side-menu">
                                <div className="side-menu__icon"> <i data-feather="activity" /> </div>
                                <div className="side-menu__title"> نمای کل 3 </div>
                            </Link>
                        </li>
                    </ul>
                </li>
                <li>
                    <Link to="javascript:;" className="side-menu">
                        <div className="side-menu__icon"> <i data-feather="box" /> </div>
                        <div className="side-menu__title">
                            چینش منو
                            <div className="side-menu__sub-icon "> <i data-feather="chevron-down" /> </div>
                        </div>
                    </Link>
                    <ul className>
                        <li>
                            <Link to="index.html" className="side-menu">
                                <div className="side-menu__icon"> <i data-feather="activity" /> </div>
                                <div className="side-menu__title"> منو کنار </div>
                            </Link>
                        </li>
                        <li>
                            <Link to="simple-menu-light-dashboard-overview-1.html" className="side-menu">
                                <div className="side-menu__icon"> <i data-feather="activity" /> </div>
                                <div className="side-menu__title"> منو ساده </div>
                            </Link>
                        </li>
                        <li>
                            <Link to="top-menu-light-dashboard-overview-1.html" className="side-menu">
                                <div className="side-menu__icon"> <i data-feather="activity" /> </div>
                                <div className="side-menu__title"> منو بالا </div>
                            </Link>
                        </li>
                    </ul>
                </li>
                <li>
                    <Link to="side-menu-light-inbox.html" className="side-menu">
                        <div className="side-menu__icon"> <i data-feather="inbox" /> </div>
                        <div className="side-menu__title"> صندوق ورودی </div>
                    </Link>
                </li>
                <li>
                    <Link to="side-menu-light-file-manager.html" className="side-menu">
                        <div className="side-menu__icon"> <i data-feather="hard-drive" /> </div>
                        <div className="side-menu__title"> مدیریت فایل </div>
                    </Link>
                </li>
                <li>
                    <Link to="side-menu-light-point-of-sale.html" className="side-menu">
                        <div className="side-menu__icon"> <i data-feather="credit-card" /> </div>
                        <div className="side-menu__title"> نمای فروش </div>
                    </Link>
                </li>
                <li>
                    <Link to="side-menu-light-chat.html" className="side-menu">
                        <div className="side-menu__icon"> <i data-feather="message-square" /> </div>
                        <div className="side-menu__title"> چت </div>
                    </Link>
                </li>
                <li>
                    <Link to="side-menu-light-post.html" className="side-menu">
                        <div className="side-menu__icon"> <i data-feather="file-text" /> </div>
                        <div className="side-menu__title"> پست </div>
                    </Link>
                </li>
                <li>
                    <Link to="side-menu-light-calendar.html" className="side-menu">
                        <div className="side-menu__icon"> <i data-feather="calendar" /> </div>
                        <div className="side-menu__title"> تقویم </div>
                    </Link>
                </li>
                <li className="side-nav__devider my-6" />
                <li>
                    <Link to="javascript:;" className="side-menu">
                        <div className="side-menu__icon"> <i data-feather="edit" /> </div>
                        <div className="side-menu__title">
                            کراد
                            <div className="side-menu__sub-icon "> <i data-feather="chevron-down" /> </div>
                        </div>
                    </Link>
                    <ul className>
                        <li>
                            <Link to="side-menu-light-crud-data-list.html" className="side-menu">
                                <div className="side-menu__icon"> <i data-feather="activity" /> </div>
                                <div className="side-menu__title"> لیست داده </div>
                            </Link>
                        </li>
                        <li>
                            <Link to="side-menu-light-crud-form.html" className="side-menu">
                                <div className="side-menu__icon"> <i data-feather="activity" /> </div>
                                <div className="side-menu__title"> فرم </div>
                            </Link>
                        </li>
                    </ul>
                </li>
            </ul>
        </nav>
    )
}

export default Aside
