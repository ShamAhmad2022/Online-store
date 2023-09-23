import React, { useEffect, useReducer } from 'react'
import Products from './Products'
import Categories from './Categories'
import './Main.scss';
import axios from 'axios';
import { initialState, reducer, setProducts, setCategory, setActiveCategory } from '../../store/reducers/reducer';
import { actionTypes } from '../../store/reducers/actionTypes';
import { connect } from 'react-redux';

function Main(props) {

  // const [state, dispatch] = useReducer(reducer, initialState);
  // console.log(props,'---------------------------------------');

  useEffect(() => {
    // the old API: https://fakestoreapi.com/products/
    axios.get('https://dummyjson.com/products')  
    .then(response => {
      // dispatch({type: actionTypes.SET_PRODUCTS, payload: response.data.products});
      props.setProducts(response.data.products);
    })
    .catch(error => {
      console.log(error);
    })
  }, []);

  useEffect(()=>{
    let categories = props.reducer1.products.map(item => item.category);
    // dispatch({type: actionTypes.SET_CATEGORY, payload: cat});
    props.setCategory(categories);
  },[props.reducer1.products])
  
  return (
    <main>
        <h2 className='main-header'>Browse our categories</h2>
        <Categories categories={props.reducer1.category} setActiveCategory={props.setActiveCategory}/>
        <Products products={props.reducer1.products} activeCategory={props.reducer1.activeCategory}/>
    </main>
  )
}

const mapStateToProps = (state) => ({
  reducer1 : state.reducer
})

const mapDispatchToProps = {
  setProducts,
  setCategory,
  setActiveCategory
}

export default connect(mapStateToProps, mapDispatchToProps)(Main)