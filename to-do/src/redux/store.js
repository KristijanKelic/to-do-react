import { createStore, applyMiddleware } from 'redux';
import { persistStore } from 'redux-persist';
import logger from 'redux-logger';

const middlewares = [];

if (process.env.NODE_ENV === 'development') {
  middlewares.push(logger);
}

import rootReducer from './root.reducer';

export const store = createStore(rootReducer, applyMiddleware(...middlewares));

export const persistor = persistStore(store);
