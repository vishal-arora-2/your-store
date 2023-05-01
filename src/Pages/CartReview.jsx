import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import CartReviewCard from "../components/CartReviewCard/CartReviewCard";

const CartReview = () => {
  const [details, setDetails] = useState([]);
  const data = useSelector((state) => {
    return state.cart;
  });

  useEffect(() => {
    setDetails(data.cartItems);
  }, [data.cartItems]);

  return (
    <section class="h-100" style={{ backgroundColor: "#eee" }}>
      <div class="container h-100 py-5">
        <div class="row d-flex justify-content-center align-items-center h-100">
          <div class="col-10">
            <div class="d-flex justify-content-between align-items-center mb-4">
              <h3 class="fw-normal mb-0 text-black">Cart Review</h3>
            </div>
            <div>
              {details.map((item) => {
                return <CartReviewCard item={item} />;
              })}
            </div>
            <div class="card">
              <div class="card-body">
                <button type="button" class="btn btn-warning btn-block btn-lg">
                  Proceed to Pay
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CartReview;
