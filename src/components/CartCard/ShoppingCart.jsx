import React from "react";
import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import TestCard from "./LeftCartCard";
import Total from "./RightTotal";
import { MdOutlineRemoveShoppingCart } from "react-icons/md";
import { Link } from "react-router-dom";
import { useDispatch} from 'react-redux';
import { cartActions } from '../../slice/cartSlice';

const CartCard = (props) => {
  
  const [details, setdetails] = useState([]);
  const data = useSelector((state) => {
    return state.cart.cartItems;
  });

  useEffect(() => {
    setdetails(data);
  }, [data]);


  var q = details.quantity;
  var a = details;
    const dispatch= useDispatch();

    const handleRemoveFromCart = (a)=>{
      dispatch(cartActions.removeFromCart(a));
    }
    const minusHandler = (a) =>{
      dispatch(cartActions.decreaseCart(a));
    }
  



    const removeallfromcart = () => {
      dispatch(cartActions.removeAllFromcart());
    }



  

  return(
    <>
      {details.length === 0 ? (
        <>
          <div style={{ textAlign: "center" }}>
            <MdOutlineRemoveShoppingCart style={{ fontSize: "10rem" }} />
            <h2>Your Cart is Company</h2>
            <Link to="/productlist">
              <button className="btn btn-success">Explore Products</button>
            </Link>
          </div>
        </>
      ) : (
        <section className="h-100 gradient-custom">
          <div className="container py-5">
            <div className="row d-flex justify-content-center my-4">
              <div className="col-md-8" style={{maxHeight:"77vh", overflowY:"auto"}}>
                <div className="card mb-4">
                  <div className="card-header py-3">
                    <h5 className="mb-0 display-6" style={{fontSize:"30px"}}>Shopping Cart</h5>
                  </div>
                  {details.map((b) => {
                    return <TestCard b={b} data2={minusHandler} data3={handleRemoveFromCart}/>;
                  })}
                </div>
              </div>
              <Total condition={"2"} removeallfromcart={removeallfromcart}/>
            </div>
          </div>
        </section>
      )}
    </>
  );
};

export default CartCard;
