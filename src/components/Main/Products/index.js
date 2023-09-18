import React from "react";
import Product from "./Product";
import "./Products.scss";

function Products() {
  return (
    <div className="categories-flex">
      <div className="cat-text">
        <h3>Category</h3>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam, atque
          asperiores culpa reiciendis porro eligendi eos architecto? Dolorum
          assumenda animi, voluptate ut, commodi similique hic alias ratione
          ipsa excepturi unde.
        </p>
      </div>
      <div className="items-flex">
        <Product />
        <Product />
        <Product />
        <Product />
      </div>
    </div>
  );
}

export default Products;
