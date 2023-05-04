import React from "react";
import { useSelector } from "react-redux";
import { useState, useEffect } from "react";
import { FaShippingFast } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { cartActions } from "../../slice/cartSlice";
import { NavLink } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Total = (props) => {

  const dispatch = useDispatch();
  const [details, setdetails] = useState([]);
  var [flag, setFlag] = useState(false);
  var [f1, setf1] = useState();
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
      toast("Discount applied!", {
        position: toast.POSITION.BOTTOM_RIGHT
      })
    }
    else {
      setf1(true);
    }
  }
  return (
    <div class="col-md-4">
      <div class="card mb-4">
        <div class="card-header py-3">
          <h5 class="mb-0">Summary</h5>
        </div>
        <div class="card-body">
          <ul class="list-group list-group-flush">
            {props.condition === "1" ? (
              <>
              </>
            ) : (
              <>
                {flag ? <li class="list-group-item d-flex justify-content-between align-items-center border-0 px-0 pb-0">
                  Subtotal
                  <s style={{color:"red"}}><span style={{ marginLeft: "110px" }}>${total}</span></s>
                  <span style={{ fontWeight: "bold", color:"green" }}>${distotal}</span>
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
                  <ToastContainer />
                  {flag ? <span >
                    <strong>${distotal}</strong>
                  </span> :<> <span>
                    <strong>${total}</strong>
                  </span>
                </> }
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
          {props.condition === "1" ? (
            <>
            </>
          ) : (
            <>
              <NavLink to="/cartreview" style={{ textDecoration: "none" }}>
                <button type="button" class="btn btn-dark btn-lg btn-block">
                  Go to checkout
                </button>
              </NavLink>
              <button
                type="button"
                class="btn btn-danger btn-lg btn-block"
                style={{ marginTop: "10px" }}
                onClick={removeallfromcart}
              >
                Clear Cart
              </button>
            </>
          )}
        </div>
      </div>
    </div>
  );
};
export default Total;
