import actionTypes from './actionTypes';

export default function reducer (state = actionTypes.initialState, action) {
  switch(action.type) {
    case actionTypes.MOVIE_FETCH:
      return {
        ...state,
        fetchStatus: `fetching... ${(new Date()).toLocaleDateString()}`,
        list: []
      }
    case actionTypes.MOVIE_FETCH_FULFILLED:
      return {
        ...state,
        list: action.payload,
        fetchStatus: `result from... ${(new Date()).toLocaleDateString()}`,
      }
    case actionTypes.MOVIE_FETCH_REJECTED:
      return {
        ...state,
        fetchStatus: `errored: ${action.payload}`
      }
    case actionTypes.MOVIE_FETCH_CANCEL:
      return {
        ...state,
        fetchStatus: `movie cancelled`
      }
    default: return state;
  }
}
