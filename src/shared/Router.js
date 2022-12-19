import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from '../components/Layout';

import Register from "../pages/Register"
import Home from "../pages/Home"
import Login from "../pages/Login"
import PostCreate from "../pages/PostCreate"
import PostDetail from "../pages/PostDetail"
import PostUpdate from "../pages/PostUpdate"

const Router = () => {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/create" element={<PostCreate />} />
          <Route path="/detail/:id" element={<PostDetail />} />
          {/* <Route path="/update/:id" element={<PostUpdate/> } /> */}
        </Routes>
      </Layout>
    </BrowserRouter>
  );
};

export default Router;
