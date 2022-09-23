import { legacy_createStore as createStore } from 'redux';
import { combineReducers } from 'redux';
import cartReducer from './cart/cartReducers';
import productReducer from './product/productReducers';

const rootReducer = combineReducers({
  product: productReducer,
  cart: cartReducer,
});

const store = createStore(rootReducer);

export default store;
