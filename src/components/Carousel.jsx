import React from 'react'
import product1 from "../assets/product1.PNG"
import product2 from "../assets/product2.PNG"
import product3 from "../assets/product3.PNG"




const Carousel = () => {
  return (
    <div>
        <div id="demo" class="carousel slide" data-bs-ride="carousel">

<div class="carousel-indicators">
  <button type="button" data-bs-target="#demo" data-bs-slide-to="0" class="active"></button>
  <button type="button" data-bs-target="#demo" data-bs-slide-to="1"></button>
  <button type="button" data-bs-target="#demo" data-bs-slide-to="2"></button>
</div>

<div class="carousel-inner">
  <div class="carousel-item active">
    <img src={product1} alt="Los Angeles" class="d-block w-100"/>
  </div>
  <div class="carousel-item">
    <img src={product2} alt="Chicago" class="d-block w-100"/>
  </div>
  <div class="carousel-item">
    <img src={product3} alt="New York" class="d-block w-100"/>
  </div>
</div>

<button class="carousel-control-prev" type="button" data-bs-target="#demo" data-bs-slide="prev">
  <span class="carousel-control-prev-icon bg-dark"></span>
</button>
<button class="carousel-control-next" type="button" data-bs-target="#demo" data-bs-slide="next">
  <span class="carousel-control-next-icon bg-dark"></span>
</button>
</div>

    </div>
  )
}

export default Carousel