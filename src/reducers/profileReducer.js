import React from 'react';
import initialState from './initialState';
import * as types from '../actions/actionTypes';

export default function profileReducer(state = initialState.profile, action) {
  switch(action.type){
    case types.LOADED_PROFILE:
      return action.profile;

    case types.SAVED_PROFILE:
      return action.profile;

    default:
      return state;
  }
}
