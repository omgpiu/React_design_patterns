import Modal from './Modal';

import { PRODUCTS } from '../../Common/API/data';
import { ProductInfo } from '../../Common/Components';


const ModalsExample = () => {
  return <>
    <Modal>
      <ProductInfo product={PRODUCTS[0]} />
    </Modal>
  </>;
};

export default ModalsExample;
