import React from "react";
import Carousel from "../components/Carousel";
import HomeCard from "../components/HomeCard/HomeCard";

const Home = () => {
  var prodlist=[
    "men's clothing",
    "jewelery",
    "electronics",
    "women's clothing"
  ]

  return(
    <div>
    <Carousel/>
 {prodlist.map((items) => {
        return <HomeCard name={items} />;
      })}  </div>
  )
};

export default Home;
