import { Route, Routes,  Navigate} from "react-router-dom";

import React from "react";
import Homepage from "../Pages/Homepage";
import ProductPage from "../Pages/ProductPage";
import SingleProductPage from "../Pages/SingleProductPage";
import PageNotFound from "../Pages/PageNotFound";
import Register from "../Pages/Register";
import Login from "../Pages/Login";
import Cart from "../Pages/Cart";
import Payment from "../Pages/Payment";
import Checkout from "../Pages/Checkout";

const AllRoutes = () => {
  const user = true;
  return (
    <>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route
          path="/register"
          element={user ? <Navigate to="/" /> : <Register />}
        />
        <Route path="/login" element={user ? <Navigate to="/" /> : <Login />} />
        <Route path="/products" element={<ProductPage />} />
        <Route path="/products/:category" element={<ProductPage />} />
        <Route path="/products/:id" element={<SingleProductPage />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/Payment" element={<Payment />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </>
  );
};

export default AllRoutes;
