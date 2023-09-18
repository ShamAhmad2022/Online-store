import React from "react";
import "./Product.scss";

function Product() {
  return (
    <>
      <div class="card">
        <img
          src="https://images.unsplash.com/photo-1517336714731-489689fd1ca8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bWFjYm9va3xlbnwwfHwwfHx8MA%3D%3D&w=1000&q=80"
          class="card-img-top"
          alt="..."
        />
        <div class="card-body">
          <h5 class="card-title">Card title</h5>
          <p class="card-text">
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </p>
        </div>
        <div class="card-body">
        <button class="card-link btn btn-primary">Add to cart</button>
          <button class="card-link btn btn-primary">view details</button>
        </div>
      </div>
    </>
  );
}

export default Product;
