import {React ,useState,useEffect} from "react";
import { NavLink } from "react-router-dom";
import { HiOutlineShoppingCart } from "react-icons/hi";
import { BsAsterisk } from "react-icons/bs";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { useSearchParams } from "react-router-dom";
import './eg.css'
const HeaderNavbar = () => {
  const quan = useSelector((state) => {
    return state.cart.totalQuantity;
  });

  const [searchText, setSearchText] = useState("")
  const [query, setQuery] = useSearchParams();

  useEffect(() => {
    setSearchText(query.get('q'))
  }, [query.get('q')])

  var nav = useNavigate();

  function getText(e) {
    setSearchText(e.target.value);
    // setdata(query.get("q"))
  }
  function searchUpdate(e) {
    e.preventDefault();
    nav(`/search?q=${searchText}`);

  }
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
        <nav class="navbar navbar-expand-lg navbar-light mb-3v body1">
  <div class="container-fluid">
    <a class="navbar-brand name text-light" href="/">CARTit</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <a class="nav-link active an" style={{color:"white"}} aria-current="page" href="/"><span> Home</span></a>
        </li>
        <li class="nav-item">
          <a class="nav-link an" href="/productlist">Products</a>
        </li>
         <li class="nav-item">
          <a class="nav-link an" href="/about">About</a>
        </li>
        <li class="nav-item">
          <a class="nav-link an" href="contact">Contact</a>
        </li>
        <li className="" style={{marginLeft:"380px"}}>
        <NavLink
                    className="nav-link ms-6 px-2 border-0"
                    exact
                    to="/cart"
                  >Cart
                           <HiOutlineShoppingCart />
                    <sup>{quan}</sup>
                  </NavLink>
        </li>
      </ul>
      <form class="d-flex  searchitem">
        <input class="form-control me-2" type="search" placeholder="Search"  onChange={getText}
                value={searchText} aria-label="Search"/>
        <i type="button" onClick={searchUpdate} class="fa fa-search"></i>
      </form>
    </div>
  </div>
</nav>
    
    </>
  );
};

export default HeaderNavbar;
