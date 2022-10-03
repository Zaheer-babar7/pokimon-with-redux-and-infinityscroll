import React, { useEffect } from 'react';
import ProductCard from './ProductCard';
import { useDispatch } from 'react-redux';
import { fetchProducts } from '../redux/actions';

const ProductListing = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchProducts());
  }, []);

  return (
    <div className='list'>
      <ProductCard />
    </div>
  );
};

export default ProductListing;
