import { Children, cloneElement, isValidElement, ReactElement, useEffect, useState } from 'react';
import { IUser } from '../Common/API/data';
import { axios, TParamsType } from '../Common/API/API';

interface IProps {
  children: ReactElement<{ user: IUser | null }>;
  resourceUrl: TParamsType;
  resourceName: string;
  id?: string;
}

const ResourceLoader = ({resourceUrl, resourceName, id, children}: IProps) => {
  const [state, setState] = useState(null);
  useEffect(() => {
    (async () => {
      const data = await axios.get(resourceUrl, id);
      setState(data);
    })();
  }, [resourceUrl]);

  return (
    <>
      {Children.map(children, child => {
        if (isValidElement(child)) {
          return cloneElement(child, {[resourceName]: state});
        }
        return child;
      })}

    </>

  );
};
export default ResourceLoader;
