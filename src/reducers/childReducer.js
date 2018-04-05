import React from 'react';
import initialState from './initialState';
import * as types from '../actions/actionTypes';

export default function childReducer(state = initialState.child, action) {
  switch(action.type){
    case types.LOADED_ALL_CHILDREN:
      return action.children;

    case types.SAVED_CHILD:
      return [...state, Object.assign({}, action.child)];
    default:
      return state;
  }
}
