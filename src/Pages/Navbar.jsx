import React from "react";
import { NavLink } from "react-router-dom";

const HeaderNavbar = () => {
  return (
    <nav className="navbar navbar-expand-sm bg-dark navbar-dark">
      <div className="container-fluid">
        <NavLink className="navbar-brand" to="/">
          Cartit
        </NavLink>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#collapsibleNavbar"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="collapsibleNavbar">
          <ul className="navbar-nav">
            <li className="nav-item">
              <li className="nav-item">
                <NavLink className="nav-link" to="/">
                  Home
                </NavLink>
              </li>
            </li>
            <li className="nav-item">
              <li className="nav-item">
                <NavLink className="nav-link" to="/">
                  Products
                </NavLink>
              </li>
            </li>
            <li className="nav-item">
              <li className="nav-item">
                <NavLink className="nav-link" to="/about">
                  About
                </NavLink>
              </li>
            </li>
          </ul>

          <form style={{ marginLeft: "67vw" }} className="d-flex">
            <NavLink className="btn btn-outline-light" exact to="/cart">
              Cart
            </NavLink>
          </form>
        </div>
      </div>
    </nav>
  );
};

export default HeaderNavbar;
