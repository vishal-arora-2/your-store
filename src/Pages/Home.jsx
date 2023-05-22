// import React from "react";
import Carousel from "../components/Carousel";
import { Link } from "react-router-dom";
import './eg.css';
// import HomeCard from "../components/HomeCard/HomeCard";

// const Home = () => {
//   var prodlist=[
//     "men's clothing",
//     "jewelery",
//     "electronics",
//     "women's clothing"
//   ]

//   return(
//     <div>
//     <Carousel/>
//  {prodlist.map((items) => {
//         return <HomeCard name={items} />;
//       })}  </div>
//   )
// };

// export default Home;
import React from 'react'
import HeaderNavbar from "./Navbar";

const Home = () => {
  return (
    <div className="body1">
        {/* <HeaderNavbar/> */}
        {/* <Carousel/> */}
        
        <div>
        {/* <Link to="/productlist"><lottie-player src="https://assets8.lottiefiles.com/packages/lf20_IcvJ1B.json"  background="transparent"  speed="1"  style={{width: "1200px", height: "400px"}}  loop  autoplay></lottie-player></Link> */}
       <lottie-player src="https://assets5.lottiefiles.com/packages/lf20_q6wsiidu.json"  background="transparent" style={{width: "1300px", height: "300px"}}   speed="1"   hover loop  autoplay></lottie-player>
        </div>

      <div class="d-flex justify-content-center mt-3">
        <button
          className="btn rounded-pill"
          style={{ backgroundColor: "#63389c", color: "white" }}
        >
          Fill your Cart Now...
        </button>
      </div>

      <div class="row mt-2 g-4 pb-5">
        <div class="col-md-3 ">
          <div class="card cardhome p-1 mx-2">
            <Link
              to="productlist"
              style={{ textDecoration: "none", color: "black" }}
            >
              <div class="d-flex justify-content-between align-items-center p-2">
                <div class="flex-column lh-1 imagename">
                  <span>Electronic</span> <span>Items</span>
                </div>
                <img
                  src="https://i.imgur.com/b9zkoz0.jpg"
                  height="100"
                  width="100"
                  alt="electronic items"
                />
              </div>
            </Link>
          </div>
        </div>

        <div class="col-md-3">
          <div class="card cardhome p-2">
            <Link
              to="productlist"
              style={{ textDecoration: "none", color: "black" }}
            >
              <div class="d-flex justify-content-between align-items-center p-2">
                <div class="flex-column lh-1 imagename">
                  <span>Mens</span> <span>Clothing</span>
                </div>
                <div>
                  <img
                    src={clothing_m}
                    height="100"
                    width="100"
                    alt="mens clothing"
                  />
                </div>
              </div>
            </Link>
          </div>
        </div>

        <div class="col-md-3">
          <div class="card cardhome p-2">
            <Link
              to="productlist"
              style={{ textDecoration: "none", color: "black" }}
            >
              <div class="d-flex justify-content-between align-items-center p-2">
                <div class="flex-column lh-1 imagename">
                  <span>Womens</span> <span>Clothing</span>
                </div>
                <div>
                  <img
                    src={clothing_w}
                    height="90"
                    width="70"
                    alt="womens clothing"
                  />
                </div>
              </div>
            </Link>
          </div>
        </div>

        <div className="col-md-3">
          <div className="card cardhome p-2 mx-2">
            <Link
              to="productlist"
              style={{ textDecoration: "none", color: "black" }}
            >
              <div className="d-flex justify-content-between align-items-center p-2">
                <div className="flex-column lh-1 imagename">
                  <span>Jewelery</span> <span>Items</span>
                </div>
            </div>
        </div>
        <div class="col-md-3">
            <div class="card cardhome p-2">
                <div class="d-flex justify-content-between align-items-center p-2">
                    <div class="flex-column lh-1 imagename"> <span>Smart</span> <span>Televisions</span> </div>
                    <div> <img src=" https://i.imgur.com/Zq8VigZ.png" height="100" width="100" /> </div>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </div>

      <div class="d-flex justify-content-center mt-3">
        <button
          className="btn rounded-pill"
          style={{ backgroundColor: "#63389c", color: "white" }}
        >
          Buy Products Now at Just One Click!
        </button>
      </div>
      <HomeCard name="women's clothing" />
    </div>
  );
};

export default Home;
