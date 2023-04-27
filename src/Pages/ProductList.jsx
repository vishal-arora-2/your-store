import React, { useEffect, useState } from "react";
import Card from "../components/Card";
import axios from "axios";
// const data = [
//   {
//     id: 1,
//     title: "Samsung",
//     image:
//       "https://rukminim1.flixcart.com/image/416/416/ktketu80/mobile/f/o/s/iphone-13-mlpf3hn-a-apple-original-imag6vzzemfy9nse.jpeg?q=70",
//     price: 6000,
//   },
// ];

const ProductList = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    axios({
      method: "get",
      url: "https://fakestoreapi.com/products",
    }).then(
      (req) => {
        setData(req.data);
        console.log(req.data);
      },
      (err) => {
        console.log("Error:", err);
      }
    );
  }, []);
  return (
    <div>
      {data.map((items) => {
        return <Card data={items} />;
      })}
    </div>
  );
};

export default ProductList;
