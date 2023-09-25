import React, { useEffect, useReducer } from 'react'
import Products from './Products'
import Categories from './Categories'
import './Main.scss';
import axios from 'axios';
import { initialState, reducer } from '../../store/reducers/reducer';
import { setProducts, setCategory, setActiveCategory, addToCart } from '../../store/reducers/actions';
import { actionTypes } from '../../store/reducers/actionTypes';
import { connect, useDispatch, useSelector } from 'react-redux';

/*
//first i used useState
//then i used a redducer
//then i used Redux with mapState/DispatchToProps
//then i used Redux with useSelector and useDispatch and thunk
*/
function Main() {

  // const [state, dispatch] = useReducer(reducer, initialState);
  
  const state = useSelector(state => state.reducer);
  const dispatch = useDispatch();

  useEffect(() => {
    // the old API: https://fakestoreapi.com/products/
    axios.get('https://dummyjson.com/products')  
    .then(response => {
      // dispatch({type: actionTypes.SET_PRODUCTS, payload: response.data.products});
      dispatch(setProducts(response.data.products));
    })
    .catch(error => {
      console.log(error);
    })
  }, []);

  useEffect(()=>{
    let categories = state.products.map(item => item.category);
    // dispatch({type: actionTypes.SET_CATEGORY, payload: cat});
    dispatch(setCategory(categories));
  },[state.products])
  
  return (
    <main>
        <h2 className='main-header'>Browse our categories</h2>
        <Categories />
        <Products />
    </main>
  )
}

// const mapStateToProps = (state) => {
//   return {
//     reducer1 : state.reducer
//   };
// }

// const mapDispatchToProps = {
//   setProducts,
//   setCategory,
//   setActiveCategory
// }

// export default connect(mapStateToProps, mapDispatchToProps)(Main)

export default Main