import React from "react";
import Product from "./Product";
import "./Products.scss";

function Products({products ,activeCategory}) {
  return (
    <div className="categories-flex">
      <div className="cat-text">
        <h3>{activeCategory==='' ? 'All Categories' : activeCategory}</h3>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam, atque
          asperiores culpa reiciendis porro eligendi eos architecto? Dolorum
          assumenda animi, voluptate ut, commodi similique hic alias ratione
          ipsa excepturi unde.
        </p>
      </div>
      <div className="items-flex">
        {activeCategory==='' ? products.map(item => <Product item={item} key={item.id}/>) : products.filter(item => item.category === activeCategory).map(item => <Product item={item}/>)}
      </div>
    </div>
  );
}

export default Products;
