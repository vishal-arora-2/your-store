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
                        <span class="text-success">${props.item.price}</span> X
                        <span class="text-success">{props.item.quantity}</span>
                    </li>
                    
                </ul>
    
              
         
    
</>
  );
};

export default CartReviewCard;
