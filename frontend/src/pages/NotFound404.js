import React from 'react'

function NotFound() {
    return (
        <div className="container">
            <div className="error-page flex flex-col lg:flex-row items-center justify-center h-screen text-center lg:text-right">
                <div className="-intro-x lg:ml-20">
                    <img alt="Rubick Tailwind HTML Admin Template" className="h-48 lg:h-auto" src="/static/dist/images/error-illustration.svg" />
                </div>
                <div className="text-white mt-10 lg:mt-0">
                    <div className="intro-x text-8xl font-medium">404</div>
                    <div className="intro-x text-xl lg:text-3xl font-medium mt-5">اوه، این صفحه گمشده است.</div>
                    <div className="intro-x text-lg mt-3">ممکنه آدرس رو اشتباه وارد کرده باشید یا این صفحه جا به جا شده باشه.</div>
                    <button className="intro-x btn py-3 px-4 text-white border-white dark:border-dark-5 dark:text-gray-300 mt-10">برگشت به خانه</button>
                </div>
            </div>
        </div>
    )
}

export default NotFound
