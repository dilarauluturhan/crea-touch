import React from 'react';
import Header from '../components/header/Header';
import Sorting from '../components/home/Sorting';
import Category from '../components/home/Category';
import Products from '../components/home/Products';

function Home() {
  return (
    <div>
      <Header />
      <Sorting />
      <div className='flex container mx-auto gap-4'>
        <Category />
        <Products />
      </div>
    </div>
  )
}

export default Home;