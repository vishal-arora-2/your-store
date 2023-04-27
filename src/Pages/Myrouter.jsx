import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from "./About";
import Cart from "./Cart";
import Home from "./Home";
import Navbar from "./Navbar";
import Footer from "../components/Footer/Footer";
import Products from "./Products";
import ProductList from "./ProductList";

const Myrouter = () => {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/about" element={<About />} />
          <Route path="/products" element={<Products />} />
          <Route path="/productlist" element={<ProductList />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
};
export default Myrouter;
