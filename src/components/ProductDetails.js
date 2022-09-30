import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { getProductById } from '../redux/actions';
import axios from 'axios';

const ProductDetails = () => {
  const dispatch = useDispatch();
  const { id } = useParams();
  const [loading, setLoading] = useState(true);
  const product = useSelector(
    (state) => state.selectedproductReducers.products
  );
  const { image, title, price, category, description } = product;
  const fetchSelectedProduct = async () => {
    setLoading(true);
    const response = await axios
      .get(`https://fakestoreapi.com/products/${id}`)
      .catch((err) => {
        console.log('err', err);
      });
    dispatch(getProductById(response.data));
    setLoading(false);
  };

  useEffect(() => {
    fetchSelectedProduct();
  }, [id]);

  return (
    <>
      {loading ? (
        <>loading</>
      ) : (
        <>
          <div className='productCard'>
            <div className='productImage'>
              <img src={image} alt='productImage' />
            </div>
            <div className='productContent'>
              <h1>{title}</h1>
              <h2>price: $ {price}</h2>
              <h2>category: {category}</h2>
              <h2>description: {description}</h2>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default ProductDetails;
