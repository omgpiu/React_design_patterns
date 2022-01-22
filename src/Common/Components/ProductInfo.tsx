import { IProduct } from '../API/data';
import { CardStyles } from './styles';

interface IProps {
  product: IProduct;
}

const ProductInfo = ({product}: IProps) => {
  const {name, price, rating, description} = product;
  return <CardStyles>
    <div className='front main_front'>
      <div className='content'>
        <h3>{name}</h3>
        <p>Rating: {rating} </p>
        <p>Description</p>
        <p>{description}</p>
      </div>
      <div className='front second_front'>
        <h2>{price}</h2>
      </div>
    </div>

  </CardStyles>;
};
export default ProductInfo;
