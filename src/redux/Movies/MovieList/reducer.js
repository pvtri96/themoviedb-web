import {
  INITIAL_STATE,
  POPULAR,
  TOP_RATED,
  UPCOMING,
  NOW_PLAYING,

  MOVIES_FETCH,
  MOVIES_FETCH_FULLFILLED,
  MOVIES_FETCH_CANCEL,
  MOVIES_FETCH_REJECTED
} from './actions.js';

const Reducer = (state = INITIAL_STATE, action) => {
  switch(action.type) {
    case MOVIES_FETCH :
      return {
        ...state,
        fetchStatus : `Data fetching ... ${(new Date()).toLocaleDateString()}`
      };

    case MOVIES_FETCH_FULLFILLED :
      return {
        ...state,
        movies: action.payload,
        fetchStatus : 'Data fetched success !'
      };

    case MOVIES_FETCH_CANCEL :
      return {
        ...state,
        fetchStatus: 'Data Fetching cancelled !'
      };

    case MOVIES_FETCH_REJECTED :
      return {
        ...state,
        fetchStatus: `Error: ${action.payload}`
      };
    default :
      return state;
  }
}

export default Reducer;
