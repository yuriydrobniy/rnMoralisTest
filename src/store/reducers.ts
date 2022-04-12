import {combineReducers} from 'redux';
import counterReducer from './slice/counterSlice';

export default combineReducers({
  counter: counterReducer,
});
