import { axios, TParamsType } from '../Common/API/API';
import ResourceLoader from './ResourseLoader';
import User from '../Common/Components/User';

import { useEffect, useState } from 'react';
import DataSource from './DataSourse';

import PixelButton from '../Common/Buttons/PixelButton';
import { Product } from '../Common/Components';


const Containers = () => {

    const [count, setCount] = useState(0);

    // const productList = useResourceLoader('/products', 'product', Product);

    useEffect(() => {
        localStorage.setItem('message', 'Hello');
    }, []);

    const getData = (url: TParamsType) => async () => {
        return await axios.get(url);
    };

    const getLocalStorageData = (key: string) => () => {
        return localStorage.getItem(key);
    };


    return (<>
        <PixelButton onClick={ () => setCount(prev => prev + 1) }>{ count }</PixelButton>
        <ResourceLoader resourceName="product" resourceUrl="/product">
            <Product/>
        </ResourceLoader>
        <DataSource resourceName="user" getData={ getData('/current-user') }>
            <User/>
        </DataSource>
        {/*<DataSource resourceName="message" getData={ getLocalStorageData('message') }>*/ }
        {/*    <TextComponent/>*/ }
        {/*</DataSource>*/ }
    </>);


};


export default Containers;
;
