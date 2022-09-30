import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const ProductCard = () => {
  const products = useSelector((state) => state.productReducers.products);
  const renderList = products.map((value) => {
    const { id, image, title, price } = value;
    return (
      <div key={id}>
        <Link to={`productDetails/${id}`}>
        <div className='card'>
          <div className='image'>
            <img src={image} alt="productimage"/>
          </div>
          <div className='content'>
            <h1>{title}</h1>
            <p>$ {price}</p>
          </div>
        </div>
        </Link>
      </div>
    );
  });
  return <>{renderList}</>;
};

export default ProductCard;
