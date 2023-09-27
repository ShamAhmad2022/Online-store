import React from "react";
import Product from "./Product";
import "./Products.scss";
import { useSelector } from "react-redux";

function Products() {

  const state = useSelector(state => state.reducer1);

  return (
    <div className="categories-flex">
      <div className="cat-text">
        <h3>{state.activeCategory==='' ? 'All Categories' : state.activeCategory}</h3>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam, atque
          asperiores culpa reiciendis porro eligendi eos architecto? Dolorum
          assumenda animi, voluptate ut, commodi similique hic alias ratione
          ipsa excepturi unde.
        </p>
      </div>
      <div className="items-flex">
        {state.activeCategory==='' ? state.products.map(item => <Product item={item} key={item.id}/>) : state.products.filter(item => item.category === state.activeCategory).map(item => <Product item={item}/>)}
      </div>
    </div>
  );
}

export default Products;
