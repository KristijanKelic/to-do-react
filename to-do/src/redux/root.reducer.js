import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import tasksReducer from './tasks/tasks.reducer';

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['tasks']
};

const rootReducer = combineReducers({
  tasks: tasksReducer
});

export default persistReducer(persistConfig, rootReducer);
