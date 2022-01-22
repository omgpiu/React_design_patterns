import { IProduct, IUser, PRODUCTS, USERS } from '../../Common/API/data';
import { RegularList } from './RegularList';



import { ProductInfo, UserInfo } from '../../Common/Components';


const Lists = () => {
  return (
    <div>
      <RegularList<IUser>
        items={USERS}
        resourceName='user'
        itemComponent={UserInfo}
      />
      <RegularList<IProduct>
        items={PRODUCTS}
        resourceName='product'
        itemComponent={ProductInfo}
      />
    </div>
  );
};

export default Lists;

