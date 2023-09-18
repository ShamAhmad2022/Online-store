import React from 'react'
import Products from './Products'
import Categories from './Categories'
import './Main.scss';

function Main() {
  return (
    <main>
        <h2 className='main-header'>Browse our categories</h2>
        <Categories />
        <Products />
    </main>
  )
}

export default Main