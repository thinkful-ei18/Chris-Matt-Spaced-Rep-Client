import {API_BASE_URL} from '../config';

export const FETCH_DATA_REQUEST = 'FETCH_DATA_REQUEST'; 
export const fetchDataRequest = () => ({
  type: FETCH_DATA_REQUEST,
});

export const FETCH_DATA_SUCCESS = 'FETCH_DATA_SUCCESS';
export const fetchDataSuccess = data => ({
    type: FETCH_DATA_SUCCESS,
    data
});

export const FETCH_DATA_ERROR = 'FETCH_DATA_ERROR';
export const fetchDataError = error => ({
    type: FETCH_DATA_ERROR,
    error
});

export const fetchData = id => (dispatch, getState) => {
  const authToken = getState().auth.authToken;
  dispatch(fetchDataRequest());
  return fetch(`${API_BASE_URL}/users/${id}`, {
    method: 'GET',
    headers: {
        // Provide our auth token as credentials
        Authorization: `Bearer ${authToken}`
    }
  })
    .then(res => {
      return res.json();
    })
    .then(data => {
      dispatch(fetchDataSuccess(data));
    })
    .catch(err => {dispatch(fetchDataError(err))});
}