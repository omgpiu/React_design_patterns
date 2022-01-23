import { Children, cloneElement, isValidElement, useEffect, useState } from 'react';

interface IProps {
    children: any;
    resourceName: any;
    id?: any;
    getData: any;
}

const DataSource = ({ getData, resourceName, children }: IProps) => {
    const [state, setState] = useState<any>(null);
    console.log(state)
    useEffect(() => {
        (async () => {
            const data = await getData();
            setState(data);
        })();
    }, [getData, setState]);

    return (
        <>
            {Children.map(children, child => {
                if (isValidElement(child)) {
                    return cloneElement(child, { [resourceName]: state });
                }
                return child;
            }) }

        </>

    );
};
export default DataSource;
