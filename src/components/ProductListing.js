import axios from 'axios';
import React, { useEffect } from 'react';
import ProductCard from './ProductCard';
import { useDispatch } from 'react-redux';
import { getAllProducts } from '../redux/actions';

const ProductListing = () => {
  const dispatch = useDispatch();

  const fetchProducts = async () => {
    const response = await axios
      .get('https://fakestoreapi.com/products')
      .catch((err) => {
        console.log('err', err);
      });
    dispatch(getAllProducts(response.data));
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <div className='list'>
      <ProductCard />
    </div>
  );
};

export default ProductListing;
