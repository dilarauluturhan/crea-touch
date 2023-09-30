import { useState } from 'react';
import Header from '../components/header/Header';
import Sorting from '../components/home/Sorting';
import Category from '../components/home/Category';
import Products from '../components/home/Products';

function Home() {
  const [sort, setSort] = useState('');
  const [category, setCategory] = useState('');

  return (
    <div>
      <Header />
      <Sorting setSort={setSort} />
      <div className='flex container mx-auto gap-x-14'>
        <Category setCategory={setCategory} />
        <Products category={category} sort={sort}/>
      </div>
    </div>
  )
}

export default Home;