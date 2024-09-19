import React from "react";
import {createBrowserRouter, createRoutesFromElements, Route, RouterProvider} from "react-router-dom";

// components:
import AddEditPostForm from "./pages/post_module/addEditPostForm.js";
import MainLayout from './layouts/MainLayout.jsx'
import PostLayout from './layouts/PostLayout.jsx'
import NotFound from "./pages/NotFound404.js";
import Posts from "./pages/post_module/posts.js";
import PostDetail from "./pages/post_module/postDetail";
import Register from "./pages/user_module/register.js";
import Login from "./pages/user_module/login.js";
import {ToastContainer} from "react-toastify";
import ActivateAccount from "./pages/user_module/activate.js";
import {AuthProvider} from "./context/AuthContext";
import UserLayout from "./layouts/UserLayout";
import ProfileLayout from "./layouts/ProfileLayout";
import ForgetPassword from "./pages/user_module/forgetPassword";
import ResetPassword from "./pages/user_module/resetPassword";

function App() {
    const router = createBrowserRouter(
        createRoutesFromElements(
            <Route path='/'>
                <Route path="/admin/" element={<MainLayout/>}>
                    <Route path="posts/" element={<PostLayout/>}>
                        <Route path="" element={<Posts/>}/>
                        <Route path=":id/" element={<PostDetail/>}/>
                        <Route path="add-post/" element={<AddEditPostForm/>}/>
                        <Route path="edit/:id" element={<AddEditPostForm/>}/>
                    </Route>
                </Route>
                <Route path="/user/" element={<UserLayout/>}>
                    <Route path="register/" element={<Register/>}/>
                    <Route path="login/" element={<Login/>}/>
                    <Route path="forget/" element={<ForgetPassword/>}/>
                    <Route path="activate/:code/" element={<ActivateAccount/>}/>
                    <Route path="reset-password/:code/" element={<ResetPassword/>}/>
                </Route>
                <Route path="/profile/" element={<ProfileLayout/>}>

                </Route>
                <Route path="*" element={<NotFound/>}/>
            </Route>
        )
    );

    return (
        <AuthProvider>
            <RouterProvider router={router}>
            </RouterProvider>
            <ToastContainer/>
        </AuthProvider>
    );
}

export default App;