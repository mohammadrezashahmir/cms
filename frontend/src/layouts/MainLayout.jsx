import React from 'react'
import NavSideMb from '../components/page_section/navSideMb.jsx'
import NavSide from '../components/page_section/navSide.jsx'
import ProHeader from '../components/page_section/proHeader.jsx'
import {Outlet} from 'react-router-dom'
import {ProtectedRoute} from "../components/user_module/protectRoute";


function MainLayout() {
    return (
        <ProtectedRoute>
            <NavSideMb/>
            <div className="flex admin-body">
                <NavSide/>
                <div className="content">
                    <ProHeader/>
                    <Outlet/>
                </div>
            </div>
        </ProtectedRoute>
    )
}

export default MainLayout
