import React from "react";
import { NavLink } from "react-router-dom";
import { HiOutlineShoppingCart } from "react-icons/hi";
import { BsAsterisk } from "react-icons/bs";
import { useSelector } from "react-redux";
import './eg.css'
const HeaderNavbar = () => {
  const quan = useSelector((state) => {
    return state.cart.totalQuantity;
  });

  return (
    <>
      {/* <section class="bg-dark p-1">
        <nav class="navbar navbar-expand-lg bg-dark w-75 w-100 mx-auto">
          <div class="container-fluid">
            <NavLink
              className="navbar-brand text-light fw-bold w-25 ms-lg-5"
              to="/"
            >
              <i>CARTit</i>
              &nbsp;
            </NavLink>
            <button
              class="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
              <ul class="navbar-nav mb-2 mb-lg-0 ms-auto me-lg-5">
                <li class="nav-item">
                  <NavLink
                    className="nav-link text-light btn btn-outline-danger px-4 fw-semibold border-0"
                    aria-current="page"
                    to="/"
                  >
                    Home
                  </NavLink>
                </li>
                <li class="nav-tem">
                  <NavLink
                    className="nav-link text-light ms-3 btn btn-outline-danger px-4 fw-semibold border-0"
                    to="/productlist"
                  >
                    Products
                  </NavLink>
                </li>
                <li class="nav-item">
                  <NavLink
                    className="nav-link text-light ms-3 btn btn-outline-danger px-4 fw-semibold border-0"
                    to="/about"
                  >
                    About
                  </NavLink>
                </li>
                <li class="nav-item">
                  <NavLink
                    className="nav-link text-light ms-3 btn btn-outline-danger px-4 fw-semibold border-0"
                    to="/contact"
                  >
                    Contact Us
                  </NavLink>
                </li>
                <li class="nav-item">
                  <NavLink
                    className="nav-link text-light ms-3 btn btn-outline-danger px-4 fw-semibold border-0"
                    exact
                    to="/cart"
                  >
                    <HiOutlineShoppingCart />
                    <sup>{quan}</sup>
                  </NavLink>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </section> */}
        <nav class="navbar navbar-expand-lg navbar-light mb-3">
  <div class="container-fluid">
    <a class="navbar-brand name" href="#">Favy.com</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="/">Home</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="/productlist">Products</a>
        </li>
         <li class="nav-item">
          <a class="nav-link" href="/about">About</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="contact">Contact</a>
        </li>
        <li>
        <NavLink
                    className="nav-link ms-6 px-2  border-0"
                    exact
                    to="/cart"
                  >Cart
                           <HiOutlineShoppingCart />
                    <sup>{quan}</sup>
                  </NavLink>
        </li>
      </ul>
      <form class="d-flex  searchitem">
        <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <i class="fa fa-search"></i>
      </form>
    </div>
  </div>
</nav>
    
    </>
  );
};

export default HeaderNavbar;
