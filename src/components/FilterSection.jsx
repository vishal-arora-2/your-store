import React, { useState } from "react";

const FilterSection = (props) => {
  const [price, setPrice] = useState(0);
  const updatePrice = (e) => {
    const value = e.target.value;
    setPrice(value);
    props.filterPrice(value);
  };
  const clearfilters = () => {
    setPrice(0);
    props.setFilter(props.data);
  };
  return (
    <div className="mt-4">
      <h6>Categories</h6>
      <hr />
      <div className="buttons dflex justift-content-centre mb-5 pb-5 ">
        <ul>
          <button
            className="btn btn-light"
            onClick={() => props.setFilter(props.data)}
          >
            All
          </button>
          <hr />
          <button
            className="btn btn-light"
            onClick={() => props.filterProduct("men's clothing")}
          >
            Men's Clothing
          </button>
          <hr />
          <button
            className="btn btn-light"
            onClick={() => props.filterProduct("women's clothing")}
          >
            Women's Clothing
          </button>
          <hr />
          <button
            className="btn btn-light"
            onClick={() => props.filterProduct("jewelery")}
          >
            Jewelery
          </button>
          <hr />
          <button
            className="btn btn-light"
            onClick={() => props.filterProduct("electronics")}
          >
            Electronics
          </button>
        </ul>
        <h6>Price</h6>
        <hr />
        <ul>
          <p className="m-0">${price}</p>
          <input
            name="price"
            type="range"
            min={0}
            max={1000}
            value={price}
            onChange={updatePrice}
          ></input>
        </ul>
        <div className="mt-5" align="center">
          <button className="btn btn-danger" onClick={clearfilters}>
            Clear Filters
          </button>
        </div>
      </div>
    </div>
  );
};

export default FilterSection;
