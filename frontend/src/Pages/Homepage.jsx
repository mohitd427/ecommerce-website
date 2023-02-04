import React from 'react';
import Categories from '../components/Categories';
import Products from '../components/Products';
import Slider from '../HomepageComponents/Slider';

const Homepage = () => {
  return (
    <div>
      <Slider/>
      <Categories />
      <Products/>
    </div>
  )
}

export default Homepage