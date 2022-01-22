export interface IUser {
  id: string;
  name: string;
  age: number;
  hairColor: string;
  hobbies: string[];
}

export interface IProduct {
  id: string
  name: string
  price: string
  description: string,
  rating: number,
}

export const CURRENT_USER: IUser = {
  id: '1',
  name: 'John Doe',
  age: 54,
  hairColor: 'brown',
  hobbies: ['swimming', 'bicycling', 'video games'],
};
export const USERS: IUser[] = [{
  id: '1',
  name: 'John Doe',
  age: 54,
  hairColor: 'brown',
  hobbies: ['swimming', 'bicycling', 'video games'],
}, {
  id: '2',
  name: 'Brenda Smith',
  age: 33,
  hairColor: 'black',
  hobbies: ['golf', 'mathematics'],
}, {
  id: '3',
  name: 'Jane Garcia',
  age: 27,
  hairColor: 'blonde',
  hobbies: ['biology', 'medicine', 'gymnastics'],
}];

export const PRODUCTS: IProduct[] = [{
  id: '1',
  name: 'Flat-Screen TV',
  price: '$300',
  description: 'Huge LCD screen, a great deal',
  rating: 4.5,
}, {
  id: '2',
  name: 'Basketball',
  price: '$10',
  description: 'Just like the pros use',
  rating: 3.8,
}, {
  id: '3',
  name: 'Running Shoes',
  price: '$120',
  description: 'State-of-the-art technology for optimum running',
  rating: 4.2,
}];
