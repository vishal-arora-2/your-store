import React from 'react'
import { useSelector } from "react-redux";
import swal from 'sweetalert2';
import { useState, useEffect } from "react";
import { FaShippingFast ,FaDollarSign, FaCreditCard } from "react-icons/fa";
import { BsCashCoin } from "react-icons/bs";
import { useDispatch } from "react-redux";
import { render } from '@testing-library/react';
import ReactConfetti from 'react-confetti';
import { cartActions } from '../slice/cartSlice';
import { useNavigate } from 'react-router';


const Payment = (props) => {
  const [windowDimension , setDimension] = useState({width: window.innerWidth, height:window.innerHeight});
  const detectsize =()=>{
    setDimension({width: window.innerWidth, height:window.innerHeight});
  }
  useEffect(()=>{ 
    window.addEventListener('resize', detectsize);
    return ()=>{
      window.removeEventListener('resize', detectsize);
    }
  }, [windowDimension]);
    const dispatch = useDispatch();
    const Navigate = useNavigate();
    const[Btn , setBtn] = useState(false);
    const [details, setdetails] = useState([]);
     const [one ,setone] = useState();
     const [two ,settwo] = useState();
    // var [flag, setFlag] = useState(false);
    // var [f1, setf1] = useState();
    // var [f2, setf2] = useState();
    // var [cross,setCross] = useState(true)
    // var [total, settotal] = useState();
    // var [distotal, setdistotal] = useState();
    // const data = useSelector((state) => {
    //   return state.cart.cartItems;
    // });
    // useEffect(() => {
    //   setdetails(data);
    //   let sum = 0;
  
    //   details?.map((item) => {
    //     sum = sum + item.price * item.quantity;
    //   });
    //   localStorage.setItem("totalAmt", sum);
    //   settotal(sum.toFixed(2));
  
    //   if (flag) {
    //     var showTotal = localStorage.getItem("totalAmt")
    //     var redPrice = (showTotal * 5) / 100
    //     showTotal -= redPrice
    //     setdistotal(showTotal.toFixed(2));
    //     localStorage.setItem("totalAmt", showTotal)
    //   }
    // });
  
      const fire =() => {
      setone(true);
      };
      const confirm =() => {
        dispatch(cartActions.removeAllFromcart());
        settwo(true);
       new swal({
        title: "Congratulations!",
        text: "Your Order Has been placed!",
        icon: "success",
        buttons: {
          confirm: {
            text: "Confirm Me",
            value: true,
            visible: true,
            className: "btn btn-success",
            closeModal: true
          }
          // ,Navigate('/'),
        } 
      });
    
        };
        var showTotal = localStorage.getItem("totalAmt")

    return (
      <>
    <div className='row'>
      {/* card */}
      <div class="col-md-4 mt-4 ml-4">
        <div class="card mb-5  shadow p-3 mb-5 bg-white rounded" >
          <div class="card-header py-3">
            <h5 class="mb-0"><FaDollarSign/> Payment Options</h5>
          <div className='mt-4 mb-2 shadow p-3 mb-5 bg-white rounded'>  <input type="radio" value="card" disabled  /> &nbsp;&nbsp;<FaCreditCard/> &nbsp;&nbsp; Debit/Credit</div>
          <div  className='mb-2 shadow p-3 mb-5 bg-white rounded'>  <input type="radio" value="cartit" disabled  /> CartIT Credits</div>
          <div  className='shadow p-3 mb-5 bg-white rounded'>  <input type="radio" onChange= {fire} value="cod"/> &nbsp;&nbsp;<BsCashCoin/> &nbsp;&nbsp;Cash On Delivery </div>
          { !one ? (
            
                   <button  className="add-to-cart-button"/>
                   ) : (
                   <button  className="btn btn-success" onClick={confirm}>Confirm
                   {
                    two? (
                         <ReactConfetti
                        width ={windowDimension.width}
                        height= {windowDimension.height}
                        tweenDuration={1000}
                        />
                    ):(
                      <button/>
                    )
                   }
                   </button>
           
                   )}
          </div>
          <div class="card-body">
          </div>
      </div>
      </div>
            

    {/* summary card */}
      <div class="col-md-4 mt-4 ml-4  ">
        <div class="card mb-5  shadow p-3 mb-5 bg-white rounded">
          <div class="card-header py-3">
            <h5 class="mb-0">Summary</h5>
          </div>
          <div class="card-body">
  
              <ul class="list-group list-group-flush">
              
             <li class="list-group-item d-flex justify-content-between align-items-center border-0 px-0 pb-0">
                   
                    {/* <li class="list-group-item d-flex justify-content-between align-items-center border-0 px-0 pb-0">
                      Subtotal
                      <span>$</span>
                    </li> */}
                  {/* <li class="list-group-item d-flex justify-content-between align-items-center px-0">
                    
                    <span>
                      Free shipping <FaShippingFast />
                    </span>
                  </li> */}
                  {/* <li class="list-group-item d-flex justify-content-between align-items-center border-0 px-0 mb-3">
                    <div>
                      <strong>Total amount</strong>
                      <strong>
                        <p class="mb-0">(including GST)</p>
                      </strong>
                    </div>
                  
                  </li> */}
                  </li>
           
            </ul>
                <ul class="list-group list-group-flush">
              
             <li class="list-group-item d-flex justify-content-between align-items-center border-0 px-0 pb-0">
                    Subtotal
                    <span style={{ marginLeft: "110px" }}>${showTotal}</span>
                  </li> 
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
                   <strong>${showTotal}</strong>
                  </li>
               
  
            </ul>
  
          </div>
        </div>
      </div>
      </div>
      </>
    );
}

export default Payment