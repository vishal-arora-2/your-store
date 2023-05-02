import React from "react";
import { NavLink } from "react-router-dom";
import { HiOutlineShoppingCart } from "react-icons/hi";
import { BsAsterisk } from "react-icons/bs";
import { useSelector } from "react-redux";

const HeaderNavbar = () => {
  const quan =useSelector(state=>{
    return state.cart.totalQuantity;
  })

  return (
    <>
      <section class="bg-dark py-2 mb-4">
        <nav class="navbar navbar-expand-lg bg-dark w-75 w-100 mx-auto">
          <div class="container-fluid">
            <NavLink
              className="navbar-brand text-light fw-semibold w-25 ms-lg-5"
              to="/"
            >
              <i>CartIt</i>
              &nbsp;
              <sup>
                <BsAsterisk />
              </sup>
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
      </section>
    </>
  );
};

export default HeaderNavbar;
