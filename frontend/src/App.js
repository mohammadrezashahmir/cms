import React,{useEffect} from "react";
import { Route, Routes } from "react-router-dom";
import AddPostForm from "./components/posts/AddPostForm";
function App() {

  return (
    <>
        <Routes>
          <Route path="/admin/posts/add-post/" element={<AddPostForm />} />
          {/* <Route path="*" element={<div>Not found</div>}/> */}
        </Routes>
    </>
  );
}

export default App;
