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

export const fetchData = () => dispatch => {
  // const authToken = getState().auth.authToken;
  fetch(`${API_BASE_URL}/questions`)
      .then(res => {
        if (!res.ok) {
          return Promise.reject(res.statusText);
        }
        return res.json();
      })
      .then(question => {
        dispatch(fetchDataSuccess(question));
      });
};
