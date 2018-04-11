//This file contains all the Child actions and actionCreators which make ajax calls to the backend Restful API
import * as types from './actionTypes';
import childApi from '../api/mockChildApi';
import axios from 'axios';

export function loadedAllChildren(children) {
  return {type: types.LOADED_ALL_CHILDREN, children};
}

export function saveNewChild(child) {
  return {type: types.SAVED_CHILD, child};
}

export function childUpdated(child) {
  return {type: types.UPDATED_CHILD, child};
}

export function deletedChild(childId) {
  return {type: types.DELETE_CHILD, childId};
}

export function loadedSingleChild(child) {
  return {type: types.LOADED_SINGLE_CHILD, child};
}

export function loadAllChildren() {
  return (dispatch) => {
      return axios.get('http://localhost:8080/root/child')
      .then(children => {
          dispatch(loadedAllChildren(children.data));
      }).catch(error => {throw error;
      });
  };
}

export function loadSingleChild(childId) {
  return (dispatch) => {
      return axios.get('http://localhost:8080/root/child/' + childId)
      .then(children => {
          dispatch(loadedSingleChild(children.data));
      }).catch(error => {throw error;
      });
  };
}


export function addChild(child) {
  return (dispatch) => {
    return  axios.post('http://localhost:8080/root/child', child)
    .then(children => {
      child.id ? dispatch(childUpdated(children.data)) :
      dispatch(saveNewChild(children.data));
    }).catch(error => {
      throw error;
    });
  };
}

export function deletechild(child) {
  return (dispatch) => {
      return axios.delete('http://localhost:8080/root/child', {params: {childId: child.id}})
      .then(childId => {
          dispatch(deletedChild(childId.data));
      }).catch(error => {throw error;
      });
  };
}
