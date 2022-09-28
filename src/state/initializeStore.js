import { createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

import createReducer from './rootReducer';

const initializeStore = (initialState = {}) => {
  const store = createStore(
    createReducer(),
    initialState,
    composeWithDevTools()
  );

  store.asyncReducers = {};
  store.injectReducer = (key, reducer) => {
    store.asyncReducers[key] = reducer;
    store.replaceReducer(createReducer(store.asyncReducers));

    return store;
  };

  store.rejectReducer = (key) => {
    if (store.asyncReducers[key]) {
      delete store.asyncReducers[key];
    }

    store.replaceReducer(createReducer(store.asyncReducers));

    return store;
  };

  return store;
};

export default initializeStore;
