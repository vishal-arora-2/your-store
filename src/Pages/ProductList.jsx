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
// axios({
//     method: "get",
//     url: "https://fakestoreapi.com/products",
//   }).then(
//     (req) => {
//       setData(req.data);
//       console.log(req.data);
//     },
//     (err) => {
//       console.log("Error:", err);
//     }
//   );
const ProductList = () => {
  const [data, setData] = useState([]);
  const [filter, setFilter] = useState(data);
  const getProducts = async () => {
    try {
      const response = await axios.get("https://fakestoreapi.com/products");
      setData(response.data);
      setFilter(response.data);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getProducts();
  }, []);
  const filterProduct = (cat) => {
    const updateList = data.filter((x) => x.category === cat);
    setFilter(updateList);
  };
  return (
    <>
      <div className="container">
        <div className="buttons dflex justift-content-centre mb-5 pb-5">
          <button
            className="btn btn-outline-dark me-2"
            onClick={() => setFilter(data)}
          >
            All
          </button>
          <button
            className="btn btn-outline-dark me-2"
            onClick={() => filterProduct("men's clothing")}
          >
            Men's Clothing
          </button>
          <button
            className="btn btn-outline-dark me-2"
            onClick={() => filterProduct("women's clothing")}
          >
            Women's Clothing
          </button>
          <button
            className="btn btn-outline-dark me-2"
            onClick={() => filterProduct("jewelery")}
          >
            Jewelery
          </button>
          <button
            className="btn btn-outline-dark me-2"
            onClick={() => filterProduct("electronics")}
          >
            Electronics
          </button>
        </div>
      </div>
      <div>
        {filter.map((items) => {
          return <Card data={items} />;
        })}
      </div>
    </>
  );
};

export default ProductList;
