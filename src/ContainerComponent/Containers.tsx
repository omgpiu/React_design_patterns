import { axios, TParamsType } from '../Common/API/API';
import ResourceLoader from './ResourseLoader';
import User from '../Common/Components/User';

import { useEffect, useState } from 'react';
import DataSource from './DataSourse';
import TextComponent from '../Common/Components/TextComponent';

import PixelButton from '../Common/Buttons/PixelButton';


const Containers = () => {

  const [count, setCount] = useState(0);

  // const productList = useResourceLoader('/products', 'product', Product);

  useEffect(() => {
    localStorage.setItem('message', 'Hello');
  }, []);

  const getData = (url: TParamsType) => async () => {
    const response = await axios.get(url);
    return response;
  };

  const getLocalStorageData = (key: string) => () => {
    return localStorage.getItem(key);
  };


  return (<>
    <PixelButton onClick={() => setCount(prev => prev + 1)}>{count}</PixelButton>
    <ResourceLoader resourceName='user' resourceUrl='/current-user'>
      <User />
    </ResourceLoader>
    <DataSource resourceName='user' getData={getData('/current-user')}>
      <User />
    </DataSource>
    <DataSource resourceName='message' getData={getLocalStorageData('message')}>
      <TextComponent />
    </DataSource>
  </>);


};


export default Containers;
;
