import React from 'react';
import Categories from '../components/Categories';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import Products from '../components/Products';
import Slider from '../HomepageComponents/Slider';

const Homepage = () => {
  return (
    <div>
      <Navbar/>
      <Slider/>
      <Categories />
      <Products />
      <Footer/>
    </div>
  )
}

export default Homepage