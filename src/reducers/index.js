import {combineReducers} from 'redux';
import children from './childReducer';
import initialState from './initialState';

const rootReducer = combineReducers({
  children,
  initialState
});

export default rootReducer;
