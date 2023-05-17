import React from "react";
import { useSelector } from "react-redux";
import { useState, useEffect } from "react";
import { FaShippingFast } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { cartActions } from "../../slice/cartSlice";
import { NavLink } from "react-router-dom";
import {MdOutlineShoppingCartCheckout} from 'react-icons/md'
import {BsMinecartLoaded} from 'react-icons/bs'


const Total = (props) => {

  const dispatch = useDispatch();
  const [details, setdetails] = useState([]);
  var [flag, setFlag] = useState(false);
  var [f1, setf1] = useState();
  var [f2, setf2] = useState();
  var [cross,setCross] = useState(true)
  var [total, settotal] = useState();
  var [distotal, setdistotal] = useState();
  const data = useSelector((state) => {
    return state.cart.cartItems;
  });
  useEffect(() => {
    setdetails(data);
    let sum = 0;

    details?.map((item) => {
      sum = sum + item.price * item.quantity;
    });
    localStorage.setItem("totalAmt", sum);
    settotal(sum.toFixed(2));

    if (flag) {
      var showTotal = localStorage.getItem("totalAmt")
      var redPrice = (showTotal * 5) / 100
      showTotal -= redPrice
      setdistotal(showTotal.toFixed(2));
      localStorage.setItem("totalAmt", showTotal)
    }
  });
  const removeallfromcart = () => {
    dispatch(cartActions.removeAllFromcart());
  }

  const [message, setMessage] = useState('');
  const handleChange = event => {
    setMessage(event.target.value);
  };

  const discount = () => {
    if (message === "FIRST" || message === "first") {
      var showTotal = localStorage.getItem("totalAmt")
      var redPrice = (showTotal * 5) / 100
      showTotal -= redPrice
      setdistotal(showTotal.toFixed(2));
      localStorage.setItem("totalAmt", showTotal);
      setFlag(true);
      setf1(false);
      setf2(true)
      setCross(true)
    }
    else {
      setf1(true);
    }
  }
  
  const removeDiscount=()=>{
    setCross(false);
  } 
 
  return (
    <div class="col-md-4">
      <div class="card mb-4">
        <div class="card-header py-3">
          <h5 class="mb-0  mx-5 display-6" style={{fontSize:"28px"}}>Summary</h5>
        </div>
        <div class="card-body">
          {
            cross ? (<>

              <ul class="list-group list-group-flush">

                {props.condition === "1" ? (
                  <>
                  </>
                ) : (
                  <>
                    {flag ? <li class="list-group-item d-flex justify-content-between align-items-center border-0 px-0 pb-0">
                      Subtotal
                      <s style={{ color: "red" }}><span style={{ marginLeft: "110px" }}>${total}</span></s>
                      <span style={{ fontWeight: "bold", color: "green" }}>${distotal}</span>
                    </li> :
                      <li class="list-group-item d-flex justify-content-between align-items-center border-0 px-0 pb-0">
                        Subtotal
                        <span>${total}</span>
                      </li>}
                    <li class="list-group-item d-flex justify-content-between align-items-center px-0">
                      Shipping
                      <span>
                        Free shipping <FaShippingFast />
                      </span>
                    </li>
                    <li class="list-group-item d-flex justify-content-between align-items-center border-0 px-0 mb-3">
                      <div>
                        <strong>Total amount</strong>
                        <strong>
                          <p class="mb-0">(including GST)</p>
                        </strong>
                      </div>
                      {flag ? <span >
                        <strong>${distotal}</strong>
                      </span> : <> <span>
                        <strong>${total}</strong>
                      </span>
                      </>}
                    </li>
                    {
                      f2 ? <>
                        <div class="alert alert-success" role="alert">
                          Congratulations {message} has been applied..!!
                          <button onClick={removeDiscount}>X</button>
                        </div>              </> : <></>
                    }
                <form class="card p-2 m-2">
                  <div class="input-group">
                    <input type="text" class="form-control" placeholder="Promo code" onChange={handleChange} />
                    <div class="input-group-append">
                      <button type="button" class="btn btn-success" onClick={discount}>Redeem</button>
                    </div>
                  </div>
                  {
                    f1 ? (<span style={{ color: "red" }}>Invalid coupon</span>) : (<> </>)
                  }
              
                </form>
              </>
            )}
         
          </ul>
            
            </>) : (<>
            
              <ul class="list-group list-group-flush">
            
            {props.condition === "1" ? (
              <>
              </>
            ) : (
              <>
                {flag ? <li class="list-group-item d-flex justify-content-between align-items-center border-0 px-0 pb-0">
                  Subtotal
                  <span style={{ marginLeft: "110px" }}>${total}</span>
                </li> :
                  <li class="list-group-item d-flex justify-content-between align-items-center border-0 px-0 pb-0">
                    Subtotal
                    <span>${total}</span>
                  </li>}
                <li class="list-group-item d-flex justify-content-between align-items-center px-0">
                  Shipping
                  <span>
                    Free shipping <FaShippingFast />
                  </span>
                </li>
                <li class="list-group-item d-flex justify-content-between align-items-center border-0 px-0 mb-3">
                  <div>
                    <strong>Total amount</strong>
                    <strong>
                      <p class="mb-0">(including GST)</p>
                    </strong>
                  </div>
                 <strong>${total}</strong>
                </li>
                <form class="card p-2 m-2">
                  <div class="input-group">
                    <input type="text" class="form-control" placeholder="Promo code" onChange={handleChange} />
                    <div class="input-group-append">
                      <button type="button" class="btn btn-secondary" onClick={discount}>Redeem</button>
                    </div>
                  </div>
                  {
                    f1 ? (<span style={{ color: "red" }}>Invalid coupon</span>) : (<> </>)
                  }
              
                </form>
              </>
            )}
         
          </ul>

            
            </>)
          }

          {props.condition === "1" ? (
            <>
            </>
          ) : (
            <>
                <NavLink to="/cartreview" style={{ textDecoration: "none" }}>
                 <div className="a">
                    <span>Checkout <MdOutlineShoppingCartCheckout /></span>
                    <div class="liquid"></div>
                  </div>
                </NavLink>
                
              <button onClick={removeallfromcart} style={{backgroundColor:"white",border:"0px"}}>
                 <div className="b" style={{ marginTop: "10px" }}>
                    <span>Clear cart  <BsMinecartLoaded/></span>
                    <div class="liquid"></div>
                  </div>
                </button>
            </>
          )}
        </div>
      </div>
    </div>
  );
};
export default Total;
