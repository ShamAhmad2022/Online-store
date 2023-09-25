import React from 'react';
import './Categories.scss';
import { setActiveCategory } from '../../../store/reducers/actions';
import { useDispatch, useSelector } from 'react-redux';

function Categories() {

  const state = useSelector(state => state.reducer);
  const dispatch = useDispatch();

  const allcategories = [...new Set(state.category)];

  const changeActiveCategory = (item)=>{
    // dispatch({type: actionTypes.SET_ACTIVECATEGORY, payload: item});
    dispatch(setActiveCategory(item));
  }

  return (
    <div className='categories-container'>
        {allcategories.map(item => <button onClick={() => changeActiveCategory(item)}>{item}</button>)}
    </div>
  )
}

export default Categories