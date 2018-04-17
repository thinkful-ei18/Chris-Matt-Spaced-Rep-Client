import {API_BASE_URL} from '../config';
import {normalizeResponseErrors} from './utils';

export const FETCH_DATA_SUCCESS = 'FETCH_DATA_SUCCESS';
export const fetchDataSuccess = question => ({
    type: FETCH_DATA_SUCCESS,
    question
});

export const FETCH_DATA_ERROR = 'FETCH_DATA_ERROR';
export const fetchDataError = error => ({
    type: FETCH_DATA_ERROR,
    error
});

export const fetchData = (id) => dispatch => {
  // console.log('ID from fetch', id);
  // const authToken = getState().auth.authToken;
  fetch(`${API_BASE_URL}/users/${id}`)
      .then(res => {
        if (!res.ok) {
          return Promise.reject(res.statusText);
        }
        // console.log('RES IS:');
        // console.log(res.json());
        return res.json();
      })
      .then(question => {
        dispatch(fetchDataSuccess(question));
      });
};
