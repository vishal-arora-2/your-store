import React, { useEffect, useState } from "react";
import Card from "../components/Card";
import axios from "axios";
import FilterSection from "../components/FilterSection";
const ProductList = () => {
  const [data, setData] = useState([]);
  const [filter, setFilter] = useState(data);
  const [priceFilter, setPriceFilter] = useState(data);
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
  const filterPrice = (cost) => {
    const updateprice = data.filter((x) => x.price <= cost);

    setFilter(updateprice);
  };
  const filterProduct = (cat) => {
    const updateList = data.filter((x) => x.category === cat);
    setFilter(updateList);
  };
  return (
    <div className="container-fluid">
      HELLO
      <div className="row">
        <div className="col-md-2">
          <FilterSection
            filterPrice={filterPrice}
            filterProduct={filterProduct}
            data={data}
            setFilter={setFilter}
          />
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
