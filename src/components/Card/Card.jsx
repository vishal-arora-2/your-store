import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { cartActions } from "../../slice/cartSlice";
import { useDispatch, useSelector } from "react-redux";
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
    <div className="col-md-4 mb-4" style={{ display: "inline-block" }}>
      <Card
        className="card h-100 text-left p-4 shadow p-3 mb-5 bg-white rounded"
        style={{ width: "18rem" }}
      >
        <Card.Img variant="top" src={image} style={{ height: "200px" }} />
        <Card.Body>
          <Card.Title className="font-weight-normal mb-1 text-truncate">
            {title}
          </Card.Title>
          <Card.Text className="font-weight-bold">{`$${price}`}</Card.Text>
          {!quantity ? (
            <div>
              <Button onClick={addToCart} variant="warning">
                Add to cart
              </Button>
            </div>
          ) : (
            <div>
              <Button onClick={minusHandeler}>-</Button>
              {quantity}
              <Button onClick={plusHandeler}>+</Button>
            </div>
          )}
        </Card.Body>
      </Card>
    </div>
  );
};

export default CardComponent;
