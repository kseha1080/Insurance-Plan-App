import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import { composeWithDevTools } from 'redux-devtools-extension';
import { persistStore } from 'redux-persist';

import { persistedReducer } from './persistConfig';

const middlewares = applyMiddleware(thunk, logger);

const composedMiddleware = composeWithDevTools(middlewares);

export const store = createStore(persistedReducer, composedMiddleware);

export const persistedStore = persistStore(store);
