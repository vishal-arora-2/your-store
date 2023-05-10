// import React from "react";
import Carousel from "../components/Carousel";
import './eg.css'
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
    <div>
        {/* <HeaderNavbar/> */}
        {/* <Carousel/> */}
        <div class="d-flex justify-content-center align-items-center mt-5"> <button class="homebtn btn btn-dark">OUR CATEGORIES</button>
    </div>
    <div class="d-flex justify-content-center mt-3"> <span class="text text-center">Finding Best Products Now<br/> in Your Fingertips</span>
    </div>
    <div class="row mt-2 g-4 pb-5">
        <div class="col-md-3 ">
            <div class="card cardhome p-1 mx-2">
                <div class="d-flex justify-content-between align-items-center p-2">
                    <div class="flex-column lh-1 imagename"> <span>Electronic</span> <span>Items</span> </div>
                    <div> <img src="https://i.imgur.com/b9zkoz0.jpg" height="100" width="100" /> </div>
                </div>
            </div>
        </div>
        <div class="col-md-3">
            <div class="card cardhome p-2">
                <div class="d-flex justify-content-between align-items-center p-2">
                    <div class="flex-column lh-1 imagename"> <span>Head</span> <span>Phones</span> </div>
                    <div> <img src="https://media.istockphoto.com/id/504742864/photo/stylish-business-clothing-for-businessman.jpg?s=612x612&w=0&k=20&c=AsGrhEMNkmpwqaJPBSACPthMuBsmsDIecRkdFXKSnl0=" height="100" width="100" /> </div>
                </div>
            </div>
        </div>
        <div class="col-md-3">
            <div class="card cardhome p-2">
                <div class="d-flex justify-content-between align-items-center p-2">
                    <div class="flex-column lh-1 imagename"> <span>Smart</span> <span>Watches</span> </div>
                    <div> <img src=" https://i.imgur.com/Ya0OXCv.png" height="100" width="100" /> </div>
                </div>
            </div>
        </div>
        <div class="col-md-3">
            <div class="card cardhome p-2 mx-2">
                <div class="d-flex justify-content-between align-items-center p-2">
                    <div class="flex-column lh-1 imagename"> <span>Air</span> <span>Purifiers</span> </div>
                    <div> <img src="https://i.imgur.com/2gvGwbh.png" height="100" width="100" /> </div>
                </div>
            </div>
        </div>
        {/* <div class="col-md-3">
            <div class="card cardhome p-2tr5">
                <div class="d-flex justify-content-between align-items-center p-2">
                    <div class="flex-column lh-1 imagename"> <span>Vacuum</span> <span>Cleaners</span> </div>
                    <div> <img src="https://i.imgur.com/UMQJpSG.png" height="100" width="100" /> </div>
                </div>
            </div>
        </div>
        <div class="col-md-3">
            <div class="card cardhome p-2">
                <div class="d-flex justify-content-between align-items-center p-2">
                    <div class="flex-column lh-1 imagename"> <span>Washing</span> <span>Machines</span> </div>
                    <div> <img src="https://i.imgur.com/e9CyhXR.png" height="100" width="100" /> </div>
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
        </div>
        <div class="col-md-3">
            <div class="card cardhome p-2">
                <div class="d-flex justify-content-between align-items-center p-2">
                    <div class="flex-column lh-1 imagename"> <span>Laptops</span> </div>
                    <div> <img src="https://i.imgur.com/6pK5oZl.jpg" height="100" width="100" /> </div>
                </div>
            </div>
        </div> */}
    </div>
    </div>

  )
}

export default Home
