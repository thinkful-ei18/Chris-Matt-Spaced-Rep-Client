import questionReducer from './question';
import { fetchDataRequest, fetchDataSuccess, fetchDataError } from '../actions/question';

describe('questionReducer', () => {
  const data = {
    questions: 'sample',
    correct: 0,
    incorrect: 0
  };
  const error = 'error';
  it('Should set the initial state when nothing is passed in', () => {
    const state = questionReducer(undefined, {type: '__UNKNOWN'});
    expect(state).toEqual({
      questions: [],
      correct: 0,
      incorrect: 0,
      loading: false,
      error: null
    });
  });

  it('Should return the current state on an unknown action', () => {
    let currentState = {};
    const state = questionReducer(currentState, {type: '__UNKNOWN'});
    expect(state).toBe(currentState);
  });

  describe('fetchDataRequest', () => {
    it('Should set loading to true', () => {
      let state;
      state = questionReducer(state, fetchDataRequest());
      expect(state).toEqual({
        questions: [],
        correct: 0,
        incorrect: 0,
        loading: true,
        error: null
      })
    });
  });

  describe('fetchDataSuccess', () => {
    it('Should set loading to true', () => {
      let state;
      state = questionReducer(state, fetchDataSuccess(data));
      expect(state).toEqual({
        questions: data.questions,
        correct: 0,
        incorrect: 0,
        loading: false,
        error: null
      })
    });
  });

  describe('fetchDataError', () => {
    it('Should set error', () => {
      let state;
      state = questionReducer(state, fetchDataError(error));
      expect(state).toEqual({
        questions: [],
        correct: 0,
        incorrect: 0,
        loading: true,
        error
      })
    });
  });
});