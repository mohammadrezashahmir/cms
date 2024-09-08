import React from "react";
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from "react-router-dom";

// components:
import AddPostForm from "./components/addPostForm.js";
import MainLayout from './layouts/MainLayout.jsx'
import PostLayout from './layouts/PostLayout.jsx'
import NotFound from "./pages/NotFound404.js";
import Posts from "./components/posts.js";
import PostDetail from "@/components/postDetail";

function App() {
    const router = createBrowserRouter(
        createRoutesFromElements(
            <Route path='/'>
                <Route path="/admin/" element={<MainLayout />}>
                    <Route path="posts/" element={<PostLayout />} >
                        <Route path="" element={<Posts />} />
                        <Route path=":id/" element={<PostDetail/>} />
                        <Route path="add-post/" element={<AddPostForm />} />
                        <Route path="edit/:id" element={<AddPostForm  />} /> 
                    </Route>
                </Route>
                <Route path="*" element={<NotFound />} />
            </Route>
        )
    );

    return (
        <RouterProvider router={router}>
        </RouterProvider>
    );
}

export default App;

