import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import { composeWithDevTools } from 'redux-devtools-extension';
import { persistStore } from 'redux-persist';

import { persistedReducer } from './persistConfig';

let middleware = [thunk]

const getMiddleware = () => {
  if(process.env.NODE_ENV !== 'production') {
    const allMiddlewares = applyMiddleware(...middleware, logger);
    return composeWithDevTools(allMiddlewares);
  }

  return applyMiddleware(...middleware)
}

export const store = createStore(persistedReducer, getMiddleware());

export const persistedStore = persistStore(store);
