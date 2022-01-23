import { CURRENT_USER, PRODUCTS, USERS } from './data';

export type TParamsType = '/current-user' | `/users` | '/products' | '/product' | `/user`
export type TResourseName = 'user' | 'product'

export const axios = {
    get(params: TParamsType, id = '2'): Promise<any> {
        switch (params) {
            case '/current-user': {
                return new Promise((res, rej) => {
                    setTimeout(() => {
                        res(CURRENT_USER);
                    }, 4000);
                });
            }
            case '/users': {
                return new Promise((res, rej) => {
                    setTimeout(() => {
                        res(USERS);
                    }, 4000);
                });
            }
            case '/user': {
                return new Promise((res, rej) => {
                    const currentUser = USERS.find(user => user.id === id);
                    setTimeout(() => {
                        res(currentUser);
                    }, 4000);
                });
            }
            case '/products': {
                return new Promise((res, rej) => {
                    setTimeout(() => {
                        res(PRODUCTS);
                    }, 4000);
                });
            }
            case '/product': {
                return new Promise((res, rej) => {
                    const currentProduct = PRODUCTS.find(product => product.id === id);
                    setTimeout(() => {
                        res(currentProduct);
                    }, 4000);
                });
            }
            default:
                return Promise.reject('Some error occurred');
        }
    }
};
