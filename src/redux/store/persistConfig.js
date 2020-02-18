import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import { rootReducer } from '../reducers';

const persistConfig = {
  key: 'stateStorage',
  storage,
};

export const persistedReducer = persistReducer(persistConfig, rootReducer);
