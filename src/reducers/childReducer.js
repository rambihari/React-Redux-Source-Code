import React from 'react';
import initialState from './initialState';
import * as types from '../actions/actionTypes';

export default function childReducer(state = initialState.child, action) {
  switch(action.type){
    case types.LOADED_ALL_CHILDREN:
      return action.children;

    case types.SAVED_CHILD:
      return [...state, Object.assign({}, action.child)];

    case types.UPDATED_CHILD:
        return [...state.filter(children => children.id !== action.child.id),
               Object.assign({}, action.child)];

    case types.DELETE_CHILD:
      return [...state.filter(children => children.id !== action.childId)];

    case types.LOADED_SINGLE_CHILD:
        return action.child;

    default:
      return state;
  }
}
