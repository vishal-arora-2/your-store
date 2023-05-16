import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import Total from "../components/CartCard/RightTotal";
import {MdShoppingCartCheckout} from 'react-icons/md'
import CartReviewCard from "../components/CartReviewCard/CartReviewCard";

const CartReview = () => {
  const [details, setDetails] = useState([]);
  const data = useSelector((state) => {
    return state.cart;
  });

  useEffect(() => {
    setDetails(data.cartItems);
  }, [data.cartItems]);
  const tot = useSelector(state=>{
    return state.cart.totalQuantity
  })
  var totalAmt = parseFloat(localStorage.getItem("totalAmt")).toFixed(2);
  return (
   
    <>
      <div class="py-5 text-center">
            <h2>Checkout <MdShoppingCartCheckout/></h2>
            
        </div>
        <div class="row g-5" style={{paddingLeft:"50px", paddingRight:"50px"}} >
            <div class="col-md-5 col-lg-4 order-md-last">
            <h4 class="d-flex justify-content-between align-items-center mb-3">
                <span class="text-info">Your cart</span>
                <span class="badge bg-dark rounded-pill">{tot} Items</span>
            </h4>
            <div style={{maxHeight:"80vh", overflowY:"auto"}}>
            {details.map((item) => {
                return <CartReviewCard item={item} />;
              })}
            </div>
              <b style={{textAlign:"center"}}>Total Amount :  <b style={{color:"green"}}>${totalAmt}</b></b>
                 </div>
            <div class="col-md-7 col-lg-8">
                <h4 class="mb-3 text-info">Billing address</h4>
                <form class="needs-validation" novalidate>
                    <div class="row g-3">
                        <div class="col-sm-6">
                            <label for="firstName" class="form-label">First name</label>
                            <input type="text" class="form-control  border" id="firstName" placeholder="" value="" required/>
                            <div class="invalid-feedback">
                                Valid first name is required.
                            </div>
                        </div>
    
                        <div class="col-sm-6">
                            <label for="lastName" class="form-label">Last name</label>
                            <input type="text" class="form-control border" id="lastName" placeholder="" value="" required/>
                            <div class="invalid-feedback">
                                Valid last name is required.
                            </div>
                        </div>
    
    
                        <div class="col-12">
                            <label for="email" class="form-label">Email <span class="text-muted">(Optional)</span></label>
                            <input type="email" class="form-control border" id="email" placeholder="you@example.com"/>
                            <div class="invalid-feedback">
                                Please enter a valid email address for shipping updates.
                            </div>
                        </div>
    
                        <div class="col-12">
                            <label for="address" class="form-label">Address</label>
                            <input type="text" class="form-control border" id="address" placeholder="Plaza street" required/>
                            <div class="invalid-feedback">
                                Please enter your shipping address.
                            </div>
                        </div>
    
                        <div class="col-md-5">
                            <label for="country" class="form-label">Country</label>
                            <select class="form-select" id="country" required>
                                <option value="">Choose...</option>
                                <option>India</option>
                            </select>
                            <div class="invalid-feedback  border border-dark">
                                Please select a valid country.
                            </div>
                        </div>
    
                        <div class="col-md-4">
                            <label for="state" class="form-label">State</label>
                            <select class="form-select" id="state" required>
                                <option value="">Choose...</option>
                                <option>Delhi</option>
                            </select>
                            <div class="invalid-feedback">
                                Please provide a valid state.
                            </div>
                        </div>
    
                        <div class="col-md-3">
                            <label for="zip" class="form-label">Zip</label>
                            <input type="text" class="form-control" id="zip" placeholder="" required/>
                            <div class="invalid-feedback">
                                Zip code required.
                            </div>
                        </div>
                    </div>
    
                    <hr class="my-4"/>
    
                    <div class="form-check">
                        <input type="checkbox" class="form-check-input" id="same-address"/>
                        <label class="form-check-label" for="same-address">Shipping address is the same as my billing address</label>
                    </div>
    
                    <div class="form-check">
                        <input type="checkbox" class="form-check-input" id="save-info"/>
                        <label class="form-check-label" for="save-info">Save this information for next time</label>
                    </div>
                    <hr class="my-4"/>
                    <button class="w-100 btn btn-success btn-md" type="submit">Continue to Payment</button>
                </form>
            </div>
        </div>
    </>
  );
};

export default CartReview;
