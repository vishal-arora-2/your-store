// import { Link, NavLink } from "react-router-dom";
import "./eg.css";
import React from "react";
import HomeCard from "../components/HomeCard/HomeCard";
import clothing_m from "../assets/clothing_m.png";
import clothing_w from "../assets/clothing_w.png";
import jewellery from "../assets/jewellery.png";

const Home = () => {
  return (
    <div className="body1">
      <div>
        <lottie-player
          src="https://assets5.lottiefiles.com/packages/lf20_q6wsiidu.json"
          background="transparent"
          style={{ width: "1300px", height: "300px" }}
          speed="1"
          hover
          loop
          autoplay
        ></lottie-player>
      </div>
      <div class="letter-image">
	<div className="animated-mail">
    <h6 style={{color:"white",marginLeft:"68px",marginTop:"20px"}}>open me !</h6>
		<div class="back-fold"></div>
		<div class="letter">
	> You're Special to us...
			<div class="letter-border"></div>
			<div class="letter-title"></div>
			<div class="letter-context"></div>
			> use Coupon code 'first' to get 60% Off...
      <br></br>
      <h6 style={{textAlign:"right",fontSize:"small"}}>Regards</h6>
      <h6 style={{textAlign:"right",fontSize:"small"}}>YOURstore</h6>

			<div class="letter-stamp">
				<div class="letter-stamp-inner"></div>
			</div>
		</div>
		<div class="top-fold"></div>
		
		<div class="bodyy"></div>
		<div class="left-fold"></div>
	</div>
	<div class="shadoww"></div>
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
            {/* <Link
              to="productlist"
              style={{ textDecoration: "none", color: "black" }}
            > */}
              <div class="d-flex justify-content-between align-items-center p-2" data-testid="card1">
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
            {/* </Link> */}
          </div>
        </div>

        <div class="col-md-3">
          <div class="card cardhome p-2">
            {/* <Link
              to="productlist"
              style={{ textDecoration: "none", color: "black" }}
            > */}
              <div class="d-flex justify-content-between align-items-center p-2" data-testid="card2">
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
            {/* </Link> */}
          </div>
        </div>

        <div class="col-md-3">
          <div class="card cardhome p-2">
            {/* <Link
              to="productlist"
              style={{ textDecoration: "none", color: "black" }}
            > */}
              <div class="d-flex justify-content-between align-items-center p-2" data-testid="card3">
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
            {/* </Link> */}
          </div>
        </div>

        <div class="col-md-3">
          <div class="card cardhome p-2 mx-2">
            {/* <Link
              to="productlist"
              style={{ textDecoration: "none", color: "black" }}
            > */}
              <div class="d-flex justify-content-between align-items-center p-2" data-testid="card4">
                <div class="flex-column lh-1 imagename">
                  <span>Jewelery</span> <span>Items</span>
                </div>
                <div>
                  <img src={jewellery} height="90" width="80" alt="jewellery" />
                </div>
              </div>
            {/* </Link> */}
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
      <HomeCard name="women's clothing"/>
    </div>
  );
};

export default Home;
