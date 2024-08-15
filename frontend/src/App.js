import React from "react";
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from "react-router-dom";

// components:
import AddPostForm from "./components/addPostForm.js";
import MainLayout from './layouts/MainLayout.jsx'
import NotFound from "./pages/NotFound404.js";
import Posts from "./components/posts.js";

function App() {
    const router = createBrowserRouter(
        createRoutesFromElements(
            <Route path='/'>
                <Route path="/admin/" element={<MainLayout />}>
                    <Route path="posts/" element={<Posts />} />
                    <Route path="posts/add-post/" element={<AddPostForm />} />
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

