import React from "react";
import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import TestCard from "./LeftCartCard";
import Total from "./RightTotal";
import { MdOutlineRemoveShoppingCart } from "react-icons/md";
import { Link } from "react-router-dom";

const CartCard = () => {
  const [details, setdetails] = useState([]);
  const data = useSelector((state) => {
    return state.cart.cartItems;
  });

  useEffect(() => {
    setdetails(data);
  }, [data]);

  return(
    <>
      {details.length === 0 ? (
        <>
          <div style={{ textAlign: "center" }}>
            <MdOutlineRemoveShoppingCart style={{ fontSize: "10rem" }} />
            <h2>Your Cart is Company</h2>
            <Link to="/productlist">
              <button className="btn btn-success">Explore Products</button>
            </Link>
          </div>
        </>
      ) : (
        <section className="h-100 gradient-custom">
          <div className="container py-5">
            <div className="row d-flex justify-content-center my-4">
              <div className="col-md-8" style={{maxHeight:"77vh",overflowY:"auto"}}>
                <div className="card mb-4">
                  <div className="card-header py-3">
                    <h5 className="mb-0 display-6" style={{fontSize:"30px"}}>Shopping Cart</h5>
                  </div>
                  {details.map((b) => {
                    return <TestCard b={b} />;
                  })}
                </div>
              </div>
              <Total condition={"2"} />
            </div>
          </div>
        </section>
      )}
    </>
  );
};

export default CartCard;
