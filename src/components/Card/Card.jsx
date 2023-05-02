import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { NavLink } from "react-router-dom";
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
   <NavLink to={`/product/${id}`}> <div className="m-4" style={{ display: "inline-block" }}>
      <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src={image} style={{ height: "18rem" }} />

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
    </NavLink> 
  );
};

export default CardComponent;
