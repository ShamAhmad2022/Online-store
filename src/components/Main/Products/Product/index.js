import React from "react";
import "./Product.scss";

function Product({item}) {
  return (
    <>
      <div className="card" >
        <img
          src={item.thumbnail}
          className="card-img-top"
          alt="..."
        />
        <div className="card-body">
          <h5 className="card-title">{item.title}</h5>
          {/* <p className="card-text">{item.description}</p> */}
        </div>
        <div className="card-body">
        <button className="card-link btn btn-primary">Add to cart</button>
          <button className="card-link btn btn-primary">view details</button>
        </div>
      </div>
    </>
  );
}

export default Product;
