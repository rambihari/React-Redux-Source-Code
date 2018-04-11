import {combineReducers} from 'redux';
import children from './childReducer';
import initialState from './initialState';
import profile from './profileReducer';

const rootReducer = combineReducers({
  children,
  profile,
  initialState
});

export default rootReducer;
