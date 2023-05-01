import React from 'react'
import { useSelector } from 'react-redux';
import { useState, useEffect } from 'react';
import { FaShippingFast } from 'react-icons/fa';
import { useDispatch} from 'react-redux';
import { cartActions } from '../../slice/cartSlice';
const Total = () => {
  const dispatch= useDispatch();
    const [details, setdetails] = useState([])
    var [total, settotal]= useState();
    const data=useSelector(state=>{
      return state.cart.cartItems;
    })
    useEffect(()=>{
      setdetails(data);
      let sum=0;
      details?.map((item)=>{
          sum= sum+(item.price*item.quantity)
      })
      settotal(sum.toFixed(2))
    })
    const removeallfromcart=()=>{
      dispatch(cartActions.removeAllFromcart())
    }
  
  return (
    <div class="col-md-4">
    <div class="card mb-4">
      <div class="card-header py-3">
        <h5 class="mb-0">Summary</h5>
      </div>
      <div class="card-body">
        <ul class="list-group list-group-flush">
          <li
            class="list-group-item d-flex justify-content-between align-items-center border-0 px-0 pb-0">
            Subtotal
            <span>${total}</span>
          </li>
          <li class="list-group-item d-flex justify-content-between align-items-center px-0">
            Shipping
            <span>Free shipping <FaShippingFast/></span>
          </li>
          <li
            class="list-group-item d-flex justify-content-between align-items-center border-0 px-0 mb-3">
            <div>
              <strong>Total amount</strong>
              <strong>
                <p class="mb-0">(including GST)</p>
              </strong>
            </div>
            <span><strong>${total}</strong></span>
          </li>
        </ul>

        <button type="button" class="btn btn-primary btn-lg btn-block">
          Go to checkout
        </button>
        <button type="button" class="btn btn-warning btn-lg btn-block" onClick={removeallfromcart}>
          Clear Cart
        </button>
      </div>
    </div>
  </div>

  )
}

export default Total