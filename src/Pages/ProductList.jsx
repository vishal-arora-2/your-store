import React, { useEffect, useState } from "react";
import Card from "../components/Card";
import axios from "axios";
import FilterSection from "../components/FilterSection";
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
    <div className="container-fluid">
      <div className="row">
        <div className="col-md-2">
          <FilterSection />
          <div className="buttons dflex justift-content-centre mb-5 pb-5">
            <ul>
              <li>
                <button
                  className="btn btn-outline-dark me-2 mb-1"
                  onClick={() => setFilter(data)}
                >
                  All
                </button>
              </li>
              <li>
                <button
                  className="btn btn-outline-dark me-2 mb-1"
                  onClick={() => filterProduct("men's clothing")}
                >
                  Men's Clothing
                </button>
              </li>
              <li>
                <button
                  className="btn btn-outline-dark me-2 mb-1"
                  onClick={() => filterProduct("women's clothing")}
                >
                  Women's Clothing
                </button>
              </li>
              <li>
                <button
                  className="btn btn-outline-dark me-2 mb-1"
                  onClick={() => filterProduct("jewelery")}
                >
                  Jewelery
                </button>
              </li>
              <li>
                <button
                  className="btn btn-outline-dark me-2 mb-1"
                  onClick={() => filterProduct("electronics")}
                >
                  Electronics
                </button>
              </li>
            </ul>
          </div>
        </div>

        <div className="col-md-10">
          {filter.map((items) => {
            return <Card data={items} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default ProductList;
