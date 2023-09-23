import React from 'react';
import './Categories.scss';
import { actionTypes } from '../../../store/reducers/actionTypes';

function Categories({categories, dispatch, setActiveCategory}) {

  const allcategories = [...new Set(categories)];

  const changeActiveCategory = (item)=>{
    // dispatch({type: actionTypes.SET_ACTIVECATEGORY, payload: item});
    setActiveCategory(item);
  }

  return (
    <div className='categories-container'>
        {allcategories.map(item => <button onClick={() => changeActiveCategory(item)}>{item}</button>)}
    </div>
  )
}

export default Categories