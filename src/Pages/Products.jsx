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
  Faprotect,
} from "react-icons/fa";
import { BsShieldCheck } from "react-icons/bs";
import "./SingleProduct.scss";
import HomeCard from "../components/HomeCard/HomeCard";

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
     
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getProducts();
  }, []);
  var cat = data.category;

  return (
    <>
      <div className="single-product-main-content">
        <div className="layout">
          <div className="single-product-page">
            <div className="left">
              <img src={data.image} alt="product" />
            </div>
            <div className="right">
              <span className="newname">{data.title}</span>
              <span className="specialP"> Special price</span>

              <span className="price">
                ${data.price}{" "}
                <span className="assured">
                  <BsShieldCheck size={20} /> CartIt Assured
                </span>
              </span>
              <span className="desc">{data.description}</span>

              <div className="cart-buttons">
                {!quantity ? (
                  <button
                    onClick={addToCart}
                    className="add-to-cart-button"
                    data-testid="addtocartbtn"
                  >
                    <FaCartPlus size={20} />
                    ADD TO CART
                  </button>
                ) : (
                  <div className="quantity-buttons">
                    <span onClick={minusHandeler}>-</span>
                    <span data-testid="quant">{quantity}</span>
                    <span onClick={plusHandeler}>+</span>
                  </div>
                )}{" "}
              </div>

              <span className="divider" />
              <div className="info-item">
                <span className="text-bold">
                  Category  &nbsp;:  
                  <span>  &nbsp;{data.category}</span>
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

      <h3 className="text-center text-decoration-underline">
        Similar Products
      </h3>
      <HomeCard name={cat} />
    </>
  );
};

export default Products;
