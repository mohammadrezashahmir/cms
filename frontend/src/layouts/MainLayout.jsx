import React from 'react'
import NavSideMb from '../components/navSideMb'
import NavSide from '../components/navSide'
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
