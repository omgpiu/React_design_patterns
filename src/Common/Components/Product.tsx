import { IProduct } from '../API/data';
import { CardStyles } from './styles';
import Spinner from '../Spiner/Spinner';

interface IProps {
  product?: IProduct;
}

const Product = ({product}: IProps) => {
  console.log('product hook');
  const {name, price, rating, description} = product || {};
  return (<CardStyles>
    <div className='front main_front'>
      {product ? <div className='content'>
        <h3>{name}</h3>
        <p>Rating: {rating} </p>
        <p>Description</p>
        <p>{description}</p>
      </div> : <Spinner />}
      <div className='front second_front'>
        <h2>{price}</h2>
      </div>
    </div>

  </CardStyles>);
};
export default Product;
