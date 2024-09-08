import React from 'react'
import NavSideMb from '../components/navSideMb.jsx'
import NavSide from '../components/navSide.jsx'
import ProHeader from '../components/proHeader.jsx'
import { Outlet } from 'react-router-dom'
import UserContextProvider from "../context/UserContext";

function MainLayout() {
    return (
        <>
            <UserContextProvider>
                <NavSideMb />
                <div className="flex">
                    <NavSide />
                    <div className="content">
                        <ProHeader />
                        <Outlet />
                    </div>
                </div>
            </UserContextProvider>
        </>
    )
}

export default MainLayout
