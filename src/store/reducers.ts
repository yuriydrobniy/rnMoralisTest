import {combineReducers} from '@reduxjs/toolkit';
import counterReducer from './slice/counterSlice';
import accountReducer from './slice/accountSlice';

export default combineReducers({
  counter: counterReducer,
  account: accountReducer,
});
