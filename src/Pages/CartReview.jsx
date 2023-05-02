import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import Total from "../components/CartCard/RightTotal";
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
    <section className="h-100 gradient-custom">
      <div className="container py-5">
        <div className="row d-flex justify-content-center my-4">
          <div className="col-md-8">
            <div className="card mb-4">
              <div className="card-header py-3">
                <h5 className="mb-0">Cart Review</h5>
              </div>
              {details.map((item) => {
                return <CartReviewCard item={item} />;
              })}
              <div class="card-body">
                <button type="button" class="btn btn-warning btn-block btn-lg">
                  Proceed to Pay
                </button>
              </div>
            </div>
          </div>
          <Total condition={"1"} />
        </div>
      </div>
    </section>
  );
};

export default CartReview;
