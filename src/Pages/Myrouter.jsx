import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from "./About";
import Cart from "./Cart";
import Home from "./Home";
import Navbar from "./Navbar";
import Footer from "../components/Footer/Footer";
import ProductList from "./ProductList";
import CartReview from "./CartReview";
import Products from "./Products";

const Myrouter = () => {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cart" element={<CartReview />} />
          <Route path="/about" element={<About />} />
          <Route path="/productlist" element={<ProductList />} />
          <Route path="/cartreview" element={<CartReview />} />
          <Route path="/product/:id" element={<Products />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
};
export default Myrouter;
