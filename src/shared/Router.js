import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
// import Login from "../pages/Login";
import Register from "../pages/Register"

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Register />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
