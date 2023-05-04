import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { NavLink } from "react-router-dom";
import { cartActions } from "../../slice/cartSlice";
import { useDispatch, useSelector } from "react-redux";
import { BsFillBagPlusFill } from "react-icons/bs";
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
    <>
      <NavLink to={`/product/${id}`}>
        <div className="m-4" style={{ display: "inline-block" }}>
          <Card
            className="shadow p-3 mb-5 bg-body rounded"
            style={{ width: "14rem" }}
          >
            <Card.Img
              variant="top"
              src={image}
              style={{ height: "13rem", padding: "18px" }}
            />

            <Card.Body>
              <Card.Title className="font-weight-normal mb-1 text-truncate">
                {title}
              </Card.Title>
              <Card.Text className="font-weight-bold">{`$${price}`}</Card.Text>
              {!quantity ? (
                <div>
                  <Button onClick={addToCart} className="btn btn-outline-dark">
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
    </>
  );
};

export default CardComponent;
