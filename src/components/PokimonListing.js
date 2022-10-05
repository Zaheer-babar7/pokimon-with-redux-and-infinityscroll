import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fetchPokimons } from '../redux/actions';
import PokimonCard from './PokimonCard'

const PokimonListing = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchPokimons());
  }, []);

  return (
    <div className='grid-container'>
      <PokimonCard />
    </div>
  );
};

export default PokimonListing;
