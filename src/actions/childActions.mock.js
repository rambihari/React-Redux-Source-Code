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

export function deletedChild(child) {
  return {type: types.DELETE_CHILD, child};
}

export function loadAllChildren() {
  return (dispatch) => {
      return childApi.getAllchilds().then(children => {
          dispatch(loadedAllChildren(children));
      }).catch(error => {throw error;
      });
  };
}

export function addChild(child) {
  return (dispatch) => {
    return childApi.savechild(child).then(children => {
      child.id ? dispatch(childUpdated(children)) :
      dispatch(saveNewChild(children));
    }).catch(error => {
      throw error;
    });
  };
}

export function deletechild(child) {
  return (dispatch) => {
      return childApi.deletechild(child)
          .then(children => {
          dispatch(deletedChild(children));
      }).catch(error => {throw error;
      });
  };
}
