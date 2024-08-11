import React from 'react'

function NavSide() {
    return (
        <nav class="side-nav">
            <a href="" class="intro-x flex items-center pr-5 pt-4">
                <img alt="Rubick Tailwind HTML Admin Template" class="w-6" src="/static/dist/images/logo.svg"/>
                    <span class="hidden xl:block text-white text-lg mr-3">رو<span class="font-medium">بیک</span> </span>
            </a>
            <div class="side-nav__devider my-6"></div>
            <ul>
                <li>
                    <a href="{% url 'admin_dashboard_page' %}" class="side-menu">
                        <div class="side-menu__icon"><i data-feather="home"></i></div>
                        <div class="side-menu__title">
                            دشبرد
                        </div>
                    </a>
                </li>
                <li>
                    <a href="{% url 'add_post_page' %}" class="side-menu">
                        <div class="side-menu__icon"><i data-feather="file-text"></i></div>
                        <div class="side-menu__title"> پست</div>
                    </a>
                </li>
                <li class="side-nav__devider my-6"></li>
                <li>
                    <a href="javascript:;" class="side-menu">
                        <div class="side-menu__icon"><i data-feather="edit"></i></div>
                        <div class="side-menu__title">
                            کراد
                            <div class="side-menu__sub-icon "><i data-feather="chevron-down"></i></div>
                        </div>
                    </a>
                    <ul class="">
                        <li>
                            <a href="{% url 'product_list_page' %}" class="side-menu">
                                <div class="side-menu__icon"><i data-feather="activity"></i></div>
                                <div class="side-menu__title"> لیست محصولات</div>
                            </a>
                        </li>
                    </ul>
                </li>
                <li>
                    <a href="javascript:;" class="side-menu">
                        <div class="side-menu__icon"><i data-feather="users"></i></div>
                        <div class="side-menu__title">
                            کاربران
                            <div class="side-menu__sub-icon "><i data-feather="chevron-down"></i></div>
                        </div>
                    </a>
                    <ul class="">
                        <li>
                            <a href="side-menu-light-users-layout-1.html" class="side-menu">
                                <div class="side-menu__icon"><i data-feather="activity"></i></div>
                                <div class="side-menu__title"> چینش 1</div>
                            </a>
                        </li>
                    </ul>
                </li>
                <li>
                    <a href="{% url 'admin_dashboard_page' %}" class="side-menu">
                        <div class="side-menu__icon"><i data-feather="trello"></i></div>
                        <div class="side-menu__title">
                            پروفایل
                        </div>
                    </a>
                </li>
            </ul>
        </nav>
    )
}

export default NavSide
