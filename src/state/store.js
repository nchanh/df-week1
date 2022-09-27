import { legacy_createStore as createStore } from 'redux';
import { combineReducers } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

import cartReducer from './cart/cartReducers';
import productReducer from './product/productReducers';
import authReducer from './auth/authReducers';

const rootReducer = combineReducers({
  product: productReducer,
  cart: cartReducer,
  auth: authReducer,
});

const store = createStore(
  rootReducer,
  composeWithDevTools()
  // applyMiddleware(...middleware)
  // other store enhancers if any
);

export default store;
