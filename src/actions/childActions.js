import * as types from './actionTypes';
import childApi from '../api/mockChildApi';

export function loadedAllChildren(children) {
  return {type: types.LOADED_ALL_CHILDREN, children};
}

export function saveNewChild(child) {
  return {type: types.SAVED_CHILD, child};
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
    return childApi.savechild(child).then(child => {
      dispatch(saveNewChild(child));
    }).catch(error => {
      throw error;
    });
  };
}
