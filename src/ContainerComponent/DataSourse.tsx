import { Children, cloneElement, isValidElement, useEffect, useState } from 'react';

interface IProps {
  children: any;
  resourceName: any;
  id?: any;
  getData: any;
}

const DataSource = ({getData, resourceName, children}: IProps) => {
  const [state, setState] = useState(null);
  useEffect(() => {
    (async () => {
      const data = await getData();
      setState(data);
    })();
  }, [getData]);

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
export default DataSource;
