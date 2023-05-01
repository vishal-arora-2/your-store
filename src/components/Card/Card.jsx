import React, { useEffect } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { cartActions } from "../../slice/cartSlice";
import { useDispatch } from "react-redux";
const CardComponent = (props) => {
  const { id, title, image, price } = props.data;
  const dispatch = useDispatch();
  const AddToCart = () => {
    dispatch(
      cartActions.addItem(props.data)
    );
  };

  return (
    <div className="m-4" style={{ display: "inline-block" }}>
      <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src={image} style={{ height: "18rem" }} />
        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <Card.Text>{`$${price}`}</Card.Text>
          <Button onClick={AddToCart} variant="warning">
            Add to cart
          </Button>
        </Card.Body>
      </Card>
    </div>
  );
};

export default CardComponent;
