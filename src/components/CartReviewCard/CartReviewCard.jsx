import React from "react";
import { BsStarFill } from "react-icons/bs";

const CartReviewCard = (props) => {
  return (
    <div className="mt-3">
      <div class="row justify-content-center mb-3">
        <div class="col-md-12 col-xl-10">
          <div class="shadow-sm card border rounded-3">
            <div class="card-body">
              <div class="row">
                <div class="col-md-12 col-lg-3 col-xl-3 mb-4 mb-lg-0">
                  <div
                    class="bg-image hover-zoom ripple rounded ripple-surface"
                    style={{ textAlign: "center" }}
                  >
                    <img src={props.item.image} width="100px" alt="product" />
                  </div>
                </div>
                <div class="col-md-6 col-lg-6 col-xl-6">
                  <h5>{props.item.title}</h5>
                  <div class="d-flex flex-row">
                    <div class="text-danger mb-4 me-2">
                      <BsStarFill />
                      <BsStarFill />
                      <BsStarFill />
                      <BsStarFill />
                    </div>
                  </div>
                  <p class="text-muted mt-5 text-truncate">
                    "{props.item.description}"
                  </p>
                </div>
                <div class="col-md-6 col-lg-3 col-xl-3 border-sm-start-none border-start">
                  <div class="d-flex flex-row align-items-center mb-1">
                    <h4 class="mb-1 me-1">${props.item.price}</h4>
                  </div>
                  <h6 class="text-success">Free shipping</h6>
                  <div class="d-flex flex-column mt-4">
                    <button class="btn btn-dark btn-sm" type="button">
                      {props.item.quantity}
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartReviewCard;
