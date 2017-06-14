import {
  MOVIE_FETCH,
  MOVIE_FETCH_CANCEL,
  MOVIE_FETCH_FULFILLED,
  MOVIE_FETCH_REJECTED
} from './Actions';

const initialState = {
  list: [],
  fetchStatus: ''
};

export default function reducer (state = initialState, action) {
  switch(action.type) {
    case MOVIE_FETCH:
      return {
        ...state,
        fetchStatus: `fetching... ${(new Date()).toLocaleDateString()}`,
        list: []
      }
    case MOVIE_FETCH_FULFILLED:
      return {
        ...state,
        list: action.payload,
        fetchStatus: `result from... ${(new Date()).toLocaleDateString()}`,
      }
    case MOVIE_FETCH_REJECTED:
      return {
        ...state,
        fetchStatus: `errored: ${action.payload}`
      }
    case MOVIE_FETCH_CANCEL:
      return {
        ...state,
        fetchStatus: `movie cancelled`
      }
    default: return state;
  }
}
