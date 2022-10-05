import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { fetchSelectedPokimons } from '../redux/actions';

const PokimonDetails = () => {
  const [hoverImg, setHoverImg] = useState(null);
  const dispatch = useDispatch();
  const { id } = useParams();
  const [loading, setLoading] = useState(true);
  const pokimon = useSelector(
    (state) => state.selectedPokimonReducers.pokemon
  );
  const { sprites, name, abilities, weight, height } = pokimon;

  useEffect(() => {
    dispatch(fetchSelectedPokimons(id, setLoading))
  }, [id]);

  return (
    <>
      {loading ? (
        <>loading</>
      ) : (
          <div className='container'>
          <div className='pokimonCard'>
            <div className='pokimonImage'
            onMouseEnter={() => setHoverImg('currentImg')}
            onMouseLeave={() => setHoverImg(null)}
            >
              <img src={
                  'currentImg' === hoverImg
                    ? sprites.back_default
                    : sprites.front_default
                } alt='productImage' />
            </div>
            <div className='pokimonContent'>
              <p>Name: {name}</p>
              <p>Ability: {abilities[0].ability.name}</p>
              <p>Weight: {weight}</p>
              <p>Height: {height}</p>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default PokimonDetails;
