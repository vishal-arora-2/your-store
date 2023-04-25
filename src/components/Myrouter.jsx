import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from "./About";
import Cart from "./Cart";
import Home from "./Home";
import Navbar from "./Navbar";

const Myrouter = () => {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};
export default Myrouter;
