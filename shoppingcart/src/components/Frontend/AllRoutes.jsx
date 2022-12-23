import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./Home";
import Cart from "./Cart";
import Signup from "./Signup";
import Products from "./Products";
const AllRoutes = ({
  cartdata,
  items,
  handleCart,
  clearCart,
  handleIncrement,
  handleDecrement,
}) => {
  return (
    <Routes>
      <Route path="/home" element={<Home />}></Route>
      <Route
        path="/products"
        element={<Products items={items} handleCart={handleCart} />}
      ></Route>
      <Route
        path="/cart"
        element={
          <Cart
            cartdata={cartdata}
            clearCart={clearCart}
            handleIncrement={handleIncrement}
            handleDecrement={ handleDecrement}
          />
        }
      ></Route>
      <Route path="/signup" element={<Signup />}></Route>
    </Routes>
  );
};
export default AllRoutes;
