import React, { useEffect } from "react";
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider, Routes } from "react-router-dom";
import AddPostForm from "./components/posts/AddPostForm";
import MainLayout from './layouts/MainLayout'
function App() {
  const router = createBrowserRouter(createRoutesFromElements(
    <Route path="/admin/" element={<MainLayout />}>
      <Route path="posts/add-post/" />
    </Route>
  ))
  return (
    <RouterProvider router={router}>
    </RouterProvider>
  );
}

export default App;
