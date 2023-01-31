import { Route, Routes } from "react-router-dom";

import React from "react";
import Homepage from "../Pages/Homepage";
import ProductPage from "../Pages/ProductPage";
import SingleProductPage from "../Pages/SingleProductPage";
import PageNotFound from "../Pages/PageNotFound";

const AllRoutes = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/products" element={<ProductPage />} />
        <Route path="/products/:id" element={<SingleProductPage />} />
        <Route path="*" element={<PageNotFound/>} />  
      </Routes>
    </>
  );
};

export default AllRoutes;
