import * as types from './actionTypes';
import axios from 'axios';

export function loadedProfile(profile) {
  return {type: types.LOADED_PROFILE, profile}
}

export function savedProfile(profile) {
  return {type: types.SAVED_PROFILE, profile}
}

export function loadProfile(childId) {
  return (dispatch) => {
    return axios.get('http://localhost:8080/root/child/' + childId +'/profile')
      .then(profile => {
      dispatch(loadedProfile(profile.data));
    }).catch(error => {
      throw error;
    });
  };
}

export function saveProfile(profile , childId) {
  return (dispatch) => {
    return axios.post('http://localhost:8080/root/child/' + childId + '/profile', profile)
      .then(profile => {
      dispatch(savedProfile(profile.data));
    }).catch(error => {
      throw error;
    });
  };
}
