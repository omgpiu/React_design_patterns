import { Address } from './enums';

interface INavigation {
  title: string;
  address: Address;
}


export const NAVIGATION: INavigation[] = [
  {
    title: 'Layout',
    address: Address.Layout,
  },
  {
    title: 'Lists',
    address: Address.Lists,
  },
  {
    title: 'Modal',
    address: Address.Modal,
  },
  {
    title: 'Container',
    address: Address.Container,
  },
  {
    title: 'Forms',
    address: Address.Forms,
  },
];

