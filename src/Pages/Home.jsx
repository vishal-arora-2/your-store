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

        <div className="d-flex justify-content-center align-items-center mt-5"> <button className="homebtn btn btn-dark">OUR CATEGORIES</button>
    </div>
    <div className="d-flex justify-content-center mt-3" data-testid="find"> <span className="text text-center">Finding Best Products Now<br/> in Your Fingertips</span>
    </div>
    <div className="row mt-2 g-4 pb-5">
        <div className="col-md-3 ">
            <div className="card cardhome p-1 mx-2" data-testid="card1">
                <div className="d-flex justify-content-between align-items-center p-2">
                    <div className="flex-column lh-1 imagename"> <span>Electronic</span> <span>Items</span> </div>
                    <a href="/productlist"> <img src="https://i.imgur.com/b9zkoz0.jpg" height="100" width="100" /> </a>
                </div>
            </div>
        </div>
        <div className="col-md-3">
            <div className="card cardhome p-2">
                <div className="d-flex justify-content-between align-items-center p-2" data-testid="card2">
                    <div className="flex-column lh-1 imagename"> <span>Mens</span> <span>Clothing</span> </div>
                    <div> <img src="https://media.istockphoto.com/id/504742864/photo/stylish-business-clothing-for-businessman.jpg?s=612x612&w=0&k=20&c=AsGrhEMNkmpwqaJPBSACPthMuBsmsDIecRkdFXKSnl0=" height="100" width="100" /> </div>
                </div>
            </div>
        </div>
        <div className="col-md-3">
            <div className="card cardhome p-2">
                <div className="d-flex justify-content-between align-items-center p-2" data-testid="card3">
                    <div className="flex-column lh-1 imagename"> <span>Womens</span> <span>Clothing</span> </div>
                    <div> <img src=" https://images.unsplash.com/photo-1445205170230-053b83016050?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fGZhc2hpb258ZW58MHx8MHx8&w=1000&q=80" height="100" width="100" /> </div>
                </div>
            </div>
        </div>
        <div className="col-md-3">
            <div className="card cardhome p-2 mx-2">
                <div className="d-flex justify-content-between align-items-center p-2" data-testid="card4">
                    <div className="flex-column lh-1 imagename"> <span>Jewelery</span> <span>Items</span> </div>
                    <div> <img src="data:image/jpeg;base64,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" height="100" width="100" /> </div>
                </div>
            </div>
        </div>
        {/* <div className="col-md-3">
            <div className="card cardhome p-2tr5">
                <div className="d-flex justify-content-between align-items-center p-2">
                    <div className="flex-column lh-1 imagename"> <span>Vacuum</span> <span>Cleaners</span> </div>
                    <div> <img src="https://i.imgur.com/UMQJpSG.png" height="100" width="100" /> </div>
                </div>
            </div>
        </div>
        <div className="col-md-3">
            <div className="card cardhome p-2">
                <div className="d-flex justify-content-between align-items-center p-2">
                    <div className="flex-column lh-1 imagename"> <span>Washing</span> <span>Machines</span> </div>
                    <div> <img src="https://i.imgur.com/e9CyhXR.png" height="100" width="100" /> </div>
                </div>
            </div>
        </div>
        <div className="col-md-3">
            <div className="card cardhome p-2">
                <div className="d-flex justify-content-between align-items-center p-2">
                    <div className="flex-column lh-1 imagename"> <span>Smart</span> <span>Televisions</span> </div>
                    <div> <img src=" https://i.imgur.com/Zq8VigZ.png" height="100" width="100" /> </div>
                </div>
            </div>
        </div>
        <div className="col-md-3">
            <div className="card cardhome p-2">
                <div className="d-flex justify-content-between align-items-center p-2">
                    <div className="flex-column lh-1 imagename"> <span>Laptops</span> </div>
                    <div> <img src="https://i.imgur.com/6pK5oZl.jpg" height="100" width="100" /> </div>
                </div>
            </div>
        </div> */}
    </div>
    </div>

  )
}

export default Home
