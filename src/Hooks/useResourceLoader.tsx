import { useEffect, useState } from 'react';
import { axios, TParamsType, TResourseName } from '../Common/API/API';
import Spinner from '../Common/Spiner/Spinner';

interface IProps {
  itemComponent: any;
  resourceUrl: TParamsType;
  resourceName: TResourseName;
  id?: string;
}

const useResourceLoader = (resourceUrl: TParamsType, resourceName: TResourseName, ItemComponent: any, id?: string) => {
  const [state, setState] = useState<any>(null);
  useEffect(() => {
    (async () => {
      const data = await axios.get(resourceUrl, id);
      setState(data);
    })();
  }, [resourceUrl]);
  // const result = useMemo(() => {
  //   return <>{state && state.map((item: any, idx: number) => <ItemComponent
  //     key={idx} {...{[resourceName]: item}} />)}</>;
  // }, [state]);
  return (
    <div style={{display: 'flex'}}>
      {state ? state && state.map((item: any, idx: number) => <ItemComponent
        key={idx} {...{[resourceName]: item}} />) : <Spinner />}
    </div>

  );
};
export default useResourceLoader;
