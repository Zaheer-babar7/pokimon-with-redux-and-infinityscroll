import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { loadMore } from '../redux/actions';
import InfiniteScroll from 'react-infinite-scroll-component';
import { useState } from 'react';

const ProductCard = () => {
  const [hoverImg, setHoverImg] = useState(null);
  const dispatch = useDispatch();
  const data = useSelector((state) => state.pokimonReducers.pokemon);
  const url = useSelector((state) => state.pokimonReducers.next);
  const renderList = data.map((value, ind) => {
    const { id, name, sprites } = value.data;
    return (
      <div className='grid-item' key={id}>
        <Link to={`PokimonDetails/${id}`}>
          <div className='card'>
            <div
              className='image'
              onMouseEnter={() => setHoverImg(ind)}
              onMouseLeave={() => setHoverImg(null)}
            >
              <img
                src={
                  ind === hoverImg
                    ? sprites.back_default
                    : sprites.front_default
                }
                alt=''
              />
            </div>
            <div className='content'>
              <h1>{name}</h1>
              {/* <p>$ {price}</p> */}
            </div>
          </div>
        </Link>
      </div>
    );
  });
  return (
    <InfiniteScroll
      dataLength={data.length}
      next={() => dispatch(loadMore(url))}
      className = "grid"
       //To put endMessage and loader to the top.
      // inverse={true}
      hasMore={true}
      loader={<h4>Loading...</h4>}
      endMessage={
        <p style={{ textAlign: 'center' }}>
          <b>Yay! You have seen it all</b>
        </p>
      }
      // below props only if you need pull down functionality
      // refreshFunction={this.refresh}
      // pullDownToRefresh
      // pullDownToRefreshThreshold={50}
      // pullDownToRefreshContent={
      //   <h3 style={{ textAlign: 'center' }}>&#8595; Pull down to refresh</h3>
      // }
      // releaseToRefreshContent={
      //   <h3 style={{ textAlign: 'center' }}>&#8593; Release to refresh</h3>
      // }
    >
      <>{renderList}</>;
    </InfiniteScroll>
  );
};

export default ProductCard;
