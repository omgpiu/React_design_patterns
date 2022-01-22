import { ListStyles } from './styles';
import { ElementType } from 'react';
import Spinner from '../../Common/Spiner/Spinner';

interface IRegularList<T> {
  resourceName: string;
  items: T[];
  itemComponent: ElementType;
}

export const RegularList = <T extends { id: string }>({
                                                        items,
                                                        resourceName,
                                                        itemComponent: ItemComponent
                                                      }: IRegularList<T>) => {
  return (
    <ListStyles>
      {items.map((item: T) => item ? <ItemComponent key={item.id} {...{[resourceName]: item}} /> : <Spinner />)}
    </ListStyles>

  );
};
