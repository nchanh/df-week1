import { combineReducers } from 'redux';

import cartReducer from './cart/cartReducers';
import productReducer from './product/productReducers';

const staticReducers = {
  product: productReducer,
  cart: cartReducer,
};

export const createReducer = (asyncReducers = {}) =>
  combineReducers({
    ...staticReducers,
    ...asyncReducers,
  });

export default createReducer;
