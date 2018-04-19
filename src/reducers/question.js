import {
    FETCH_DATA_REQUEST,
    FETCH_DATA_SUCCESS,
    FETCH_DATA_ERROR
} from '../actions/question';

const initialState = {
  questions: [],
  correct: 0,
  incorrect: 0,
  loading: false,
  error: null
};

export default function reducer(state = initialState, action) {
    console.log(action);
    if (action.type === FETCH_DATA_REQUEST) {
        return Object.assign({}, state, {
            loading: true,
            error: null
        })
      }
    if (action.type === FETCH_DATA_SUCCESS) {
        return Object.assign({}, state, {
            questions: action.data.questions,
            correct: action.data.correct,
            incorrect: action.data.incorrect,
            loading: false,
            error: null
        });
    } else if (action.type === FETCH_DATA_ERROR) {
        return Object.assign({}, state, {
            loading: true,
            error: action.error
        });
    }
  return state;
}