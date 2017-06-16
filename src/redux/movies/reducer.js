import actionTypes from './actionTypes';

export const KEY = 'movies';

const INITIAL_STATE = {
  list: [],
  fetchStatus: ''
};

export const selector = (state) => ({
  list: state[KEY].list,
  fetchStatus:state[KEY].fetchStatus
});

export default (state = INITIAL_STATE,action) => {
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
  default: return state;
  }
};

