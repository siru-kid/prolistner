import React from 'react';
import { useSelector } from 'react-redux';
import ProductList from './ProductList';

const HomePage = () => {
  const products =useSelector(state=>state.products);
  return (
    <div>
      <h1>Product Catalog</h1>
      <ProductList products={products}/>
    </div>
  )
}

export default HomePage