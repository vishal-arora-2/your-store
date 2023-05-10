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
import Contact from "./Contact";
import Search from "./Search";
const Myrouter = () => {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact/>} />
          <Route path="/productlist" element={<ProductList />} />
          <Route path="/cartreview" element={<CartReview />} />
          <Route path="/product/:id" element={<Products />} />
          <Route path="/search" element={<Search/>}></Route>
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
};
export default Myrouter;
