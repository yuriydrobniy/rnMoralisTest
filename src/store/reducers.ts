import {combineReducers} from '@reduxjs/toolkit';
import counterReducer from './slice/counterSlice';
import accountReducer from './slice/accountSlice';
import contentReducer from './slice/contentSlice';

export default combineReducers({
  counter: counterReducer,
  account: accountReducer,
  content: contentReducer,
});
