import React from 'react'
import { Link } from 'react-router-dom'
function NavSide() {
    return (
        <nav className="side-nav">
            <Link to className="intro-x flex items-center pr-5 pt-4">
                <img alt="Rubick Tailwind HTML Admin Template" className="w-6" src="/static/dist/images/logo.svg" />
                <span className="hidden xl:block text-white text-lg mr-3">رو<span className="font-medium">بیک</span> </span>
            </Link>
            <div className="side-nav__devider my-6" />
            <ul>
                <li>
                    <Link to="{% url 'admin_dashboard_page' %}" className="side-menu">
                        <div className="side-menu__icon"><i data-feather="home" /></div>
                        <div className="side-menu__title">
                            دشبرد
                        </div>
                    </Link>
                </li>
                <li>
                    <Link to="{% url 'add_post_page' %}" className="side-menu">
                        <div className="side-menu__icon"><i data-feather="file-text" /></div>
                        <div className="side-menu__title"> پست</div>
                    </Link>
                </li>
                <li className="side-nav__devider my-6" />
                <li>
                    <Link to="javascript:;" className="side-menu">
                        <div className="side-menu__icon"><i data-feather="edit" /></div>
                        <div className="side-menu__title">
                            کراد
                            <div className="side-menu__sub-icon "><i data-feather="chevron-down" /></div>
                        </div>
                    </Link>
                    <ul className>
                        <li>
                            <Link to="{% url 'product_list_page' %}" className="side-menu">
                                <div className="side-menu__icon"><i data-feather="activity" /></div>
                                <div className="side-menu__title"> لیست محصولات</div>
                            </Link>
                        </li>
                    </ul>
                </li>
                <li>
                    <Link to="javascript:;" className="side-menu">
                        <div className="side-menu__icon"><i data-feather="users" /></div>
                        <div className="side-menu__title">
                            کاربران
                            <div className="side-menu__sub-icon "><i data-feather="chevron-down" /></div>
                        </div>
                    </Link>
                    <ul className>
                        <li>
                            <Link to="side-menu-light-users-layout-1.html" className="side-menu">
                                <div className="side-menu__icon"><i data-feather="activity" /></div>
                                <div className="side-menu__title"> چینش 1</div>
                            </Link>
                        </li>
                    </ul>
                </li>
                <li>
                    <Link to="{% url 'admin_dashboard_page' %}" className="side-menu">
                        <div className="side-menu__icon"><i data-feather="trello" /></div>
                        <div className="side-menu__title">
                            پروفایل
                        </div>
                    </Link>
                </li>
            </ul>
        </nav>

    )
}

export default NavSide
