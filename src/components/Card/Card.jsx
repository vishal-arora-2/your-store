import React, { useState } from "react";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";
import { cartActions } from "../../slice/cartSlice";
import { useDispatch, useSelector } from "react-redux";
import "../../Pages/eg.css";

const CardComponent = (props) => {
  const [quantity, setQuantity] = useState(0);

  const { id, title, image, price } = props.data;
  const dispatch = useDispatch();
  const minusHandeler = () => {
    setQuantity(quantity - 1);
    dispatch(cartActions.decreaseCart(props.data, quantity));
  };
  const addToCart = () => {
    setQuantity(quantity + 1);
    dispatch(cartActions.addItem(props.data, quantity));
    console.log(props.data);
  };
  const cart = useSelector((state) => {
    return state.cart;
  });
  const plusHandeler = () => {
    addToCart();
  };
  return (
    <div className="m-2" style={{ display: "inline-block" }}>
      <Card
        style={{ width: "13rem", borderRadius: "15px" }}
        className="m-3 card1"
      >
        <Link to={`/product/${id}`}>
          <Card.Img
            variant="top"
            src={image}
            style={{ height: "13rem", padding: "36px" }}
          />
        </Link>

        <Card.Body>
          <Card.Title
            style={{ fontFamily: "sans-serif" }}
            className="font-weight-normal mb-1 text-truncate"
          >
            {title}
          </Card.Title>
          <Card.Text className="font-weight-bold">{`$${price}`}</Card.Text>
          {!quantity ? (
            <div className="newp">
              <button
                className="effect1"
                onClick={addToCart}
                style={{
                  borderRadius: "5px",
                  backgroundColor: "white",
                  borderColor: "white",
                }}
              >
                Add to Cart
                <span className="bg"></span>
              </button>
            </div>
          ) : (
            <div className="d-flex mb-4" style={{ maxWidth: "300px" }}>
              <button
                className="btn btn-outline-dark px-3 ms-2"
                style={{ height: "40px" }}
                onClick={minusHandeler}
              >
                <i className="fas fa-minus"></i>
              </button>
              <div>
                <button className="btn btn-dark mx-2">{quantity}</button>
              </div>
              <button
                className="btn btn-outline-dark px-3"
                style={{ height: "40px" }}
                onClick={plusHandeler}
              >
                <i className="fas fa-plus"></i>
              </button>
            </div>
          )}
        </Card.Body>
      </Card>
    </div>
  );
};

export default CardComponent;
