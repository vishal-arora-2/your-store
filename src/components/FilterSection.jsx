import React from "react";

const FilterSection = (props) => {
  return (
    <div>
      <h5>Categories</h5>
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
        <label for="customRange1" class="form-label">
          <h5>Price</h5>
          <hr />
        </label>
        <input type="range" class="form-range" id="customRange1"></input>
      </div>
    </div>
  );
};

export default FilterSection;
