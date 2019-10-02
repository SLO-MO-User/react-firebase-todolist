import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import todoReducer from './todo/todo.reducer';
import nightModeReducer from './night-mode/night-mode.reducer';

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['todo', 'nightMode'],
};

const rootReducer = combineReducers({
  todo: todoReducer,
  nightMode: nightModeReducer,
});

export default persistReducer(persistConfig, rootReducer);
