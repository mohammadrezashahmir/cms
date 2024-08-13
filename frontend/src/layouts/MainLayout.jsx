import React from 'react'
import NavSideMb from '../components/navSideMb.jsx'
import NavSide from '../components/navSide.jsx'
import { Outlet } from 'react-router-dom'
function MainLayout() {
    return (
        <>
            <NavSideMb />
            <div className="flex">
                <NavSide />
                <div className="content">
                    <Outlet />
                </div>
            </div>
        </>
    )
}

export default MainLayout
