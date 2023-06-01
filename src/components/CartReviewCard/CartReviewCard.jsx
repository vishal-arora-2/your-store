import React from "react";
const CartReviewCard = (props) => {
 
  return (
    <>
        
      <ul class="list-group mb-3 ">
        <li class="list-group-item d-flex justify-content-between lh-sm bg-light">
          <div>
            <h6 class="my-0">{props.item.title}</h6>
            <small class="text-muted">{props.item.category}</small>

          </div>
          &nbsp;&nbsp;&nbsp;&nbsp;

          <span class="text-danger" style={{fontSize:"13px",textDecoration:""}}>${props.item.price}<h6 style={{fontSize:"10px"}}>x{props.item.quantity}</h6></span>
          {/* <span class="text-success">{props.item.quantity}</span> */}
        </li>

      </ul>
    
              
         
    
</>
  );
};

export default CartReviewCard;
