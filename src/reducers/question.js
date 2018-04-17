import {
  FETCH_DATA_SUCCESS,
  FETCH_DATA_ERROR
} from '../actions/question';

const initialState = {
  questions: null,
  error: null
};

export default function reducer(state = initialState, action) {
  if (action.type === FETCH_DATA_SUCCESS) {
      return Object.assign({}, state, {
          questions: action.question.questions,
          error: null
      });
  } else if (action.type === FETCH_DATA_ERROR) {
      return Object.assign({}, state, {
          error: action.error
      });
  }
  return state;
}