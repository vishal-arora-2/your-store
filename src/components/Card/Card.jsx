import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

const CardComponent = () => {
  return (
    <div className="m-4" style={{ display: "inline-block" }}>
      <Card style={{ width: "18rem" }}>
        <Card.Img
          variant="top"
          src="https://rukminim1.flixcart.com/image/416/416/ktketu80/mobile/f/o/s/iphone-13-mlpf3hn-a-apple-original-imag6vzzemfy9nse.jpeg?q=70"
        />
        <Card.Body>
          <Card.Title>APPLE iPhone 13 (Midnight, 128 GB)</Card.Title>
          <Card.Text>
            iPhone 13. boasts an advanced dual-camera system that allows you to
            click mesmerising pictures with immaculate clarity. Furthermore, the
            lightning-fast A15 Bionic chip allows for seamless multitasking,
            elevating your performance to a new dimension.
          </Card.Text>
          <Button variant="warning">Add to cart</Button>
        </Card.Body>
      </Card>
    </div>
  );
};

export default CardComponent;
