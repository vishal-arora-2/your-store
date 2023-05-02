import React from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios';
import { useEffect, useState } from 'react';


const Products = () => {
 
  const id = useParams();
  const [data, setData] = useState([]);

  const getProducts = async () => {
    try {
      const response = await axios.get("https://fakestoreapi.com/products/"+id.id);
      setData(response.data);
      console.log(data)
    
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getProducts();
  }, []);
  return (
    <div className ="container mt-5 mb-5">
    <div class="card mb-3 mx-auto shadow p-3 mb-5 bg-white rounded" style={{maxWidth: "900px"}}>
      <div class="row no-gutters">
        <div class="col-md-4">
          <img src={data.image}  class="card-img" alt="..."/>
          
        </div>
        <div class="col-md-8">
          <div class="card-body">
            <h3 class="card-title">{data.title}</h3>
            <h4 style={{color: "red"}} > ${data.price}</h4>
            <p class="card-text">{data.description}</p>
            {/* <p class="card-text"><small class="text-muted">{data.rating.count} ,</small></p> */}
            
            <button type="button" class="btn btn-secondary">Add to Cart</button>
             <button type="button" class="btn btn-light">Light</button>
          </div>
        </div>
      </div>
    </div>
        </div>
  )
}

export default Products