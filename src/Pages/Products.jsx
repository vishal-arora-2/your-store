// import React from 'react'
// import { useParams } from 'react-router-dom'
// import axios from 'axios';
// import { useEffect, useState } from 'react';
// import Button from "react-bootstrap/Button";
// import { useDispatch, useSelector } from "react-redux";
// import { cartActions } from '../slice/cartSlice';

// const Products = () => {
//   const [quantity, setQuantity] = useState(0);
//   const id = useParams();
//   const [data, setData] = useState([]);
//   const dispatch = useDispatch();
//   const minusHandeler = () => {
//     setQuantity(quantity - 1);
//     dispatch(cartActions.decreaseCart(data, quantity));
//   };
//   const addToCart = () => {
//     setQuantity(quantity + 1);
//     dispatch(cartActions.addItem(data, quantity));
//     console.log(data);
//   };
//   const cart = useSelector((state) => {
//     return state.cart;
//   });
//   const plusHandeler = () => {
//     addToCart();
//   };

//   const getProducts = async () => {
//     try {
//       const response = await axios.get("https://fakestoreapi.com/products/"+id.id);
//       setData(response.data);
//       console.log(data)
    
//     } catch (error) {
//       console.log(error);
//     }
//   };
//   useEffect(() => {
//     getProducts();
//   }, []);
//   return (
//     <div className ="container mt-5 mb-5">
//     <div class="card mb-3 mx-auto shadow p-3 mb-5 bg-white rounded" style={{maxWidth: "900px"}}>
//       <div class="row no-gutters">
//         <div class="col-md-4">
//           <img src={data.image}  class="card-img" alt="..."/>
          
//         </div>
//         <div class="col-md-8">
//           <div class="card-body">
//             <h3 class="card-title">{data.title}</h3>
//             <h4 style={{color: "red"}} > ${data.price}</h4>
//             <p class="card-text">{data.description}</p>
//             {/* <p class="card-text"><small class="text-muted">{data.rating.count} ,</small></p> */}
            
//             {!quantity ? (
//             <div>
//               <Button onClick={addToCart} variant="warning">
//                 Add to cart
//               </Button>
//             </div>
//           ) : (
//             <div>
//               <Button onClick={minusHandeler}>-</Button>
//               {quantity}
//               <Button onClick={plusHandeler}>+</Button>
//             </div>
//           )}
//           </div>
//         </div>
//       </div>
//     </div>
//         </div>
//   )
// }

// export default Products
import React from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { cartActions } from "../slice/cartSlice";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
  FaPinterest,
  FaCartPlus,
} from "react-icons/fa";
import "./SingleProduct.scss";

const Products = () => {
  const [quantity, setQuantity] = useState(0);
  const id = useParams();
  const [data, setData] = useState([]);
  const dispatch = useDispatch();
    const minusHandeler = () => {
      setQuantity(quantity - 1);
      dispatch(cartActions.decreaseCart(data, quantity));
    };
    const addToCart = () => {
      setQuantity(quantity + 1);
      dispatch(cartActions.addItem(data, quantity));
      console.log(data);
    };
    const cart = useSelector((state) => {
      return state.cart;
    });
    const plusHandeler = () => {
      addToCart();
    };

  const getProducts = async () => {
    try {
      const response = await axios.get(
        "https://fakestoreapi.com/products/" + id.id
      );
      setData(response.data);
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getProducts();
  }, []);
  return (
    <div className="single-product-main-content">
      <div className="layout">
        <div className="single-product-page">
          <div className="left">
            <img src={data.image} alt="product" />
          </div>
          <div className="right">
            <span className="name">{data.title}</span>
            <span className="price">${data.price}</span>
            <span className="desc">{data.description}</span>
                   <div className="cart-buttons"> 
                   {!quantity ? (
                   <button onClick={addToCart} className="add-to-cart-button" data-testid="addtocart">
                     <FaCartPlus size={20} />
                     ADD TO CART
                   </button> 
                   ) : (
                   <div className="quantity-buttons">
                     <span onClick={minusHandeler}>-</span>
                     <span>{quantity}</span>
                     <span  onClick={plusHandeler}>+</span>
                   </div>
               
                   )}  </div>
            <span className="divider" />
            <div className="info-item">
              <span className="text-bold">
                Category:
                <span>{data.category}</span>
              </span>
              <span className="text-bold">
                Share:
                <span className="social-icons">
                  <FaFacebookF size={16} />
                  <FaTwitter size={16} />
                  <FaInstagram size={16} />
                  <FaLinkedinIn size={16} />
                  <FaPinterest size={16} />
                </span>
              </span>
            </div>
          </div>
        </div>
     
      </div>
    </div>
  );
};

export default Products;
