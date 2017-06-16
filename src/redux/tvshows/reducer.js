import actionTypes from './actionTypes';

export const KEY = 'tvshows';

const INITIAL_STATE = {
  list: [],
  fetchStatus: ''
};

export const selector = (state) => state[KEY];

export default (state = INITIAL_STATE,action) => {
  switch(action.type) {
  case actionTypes.TVSHOWS_FETCH_REQUESTED:
    return {
      ...state,
      fetchStatus: `fetching... ${(new Date()).toLocaleDateString()}`,
      list: []
    }
  case actionTypes.TVSHOWS_FETCH_FULFILLED:
    return {
      ...state,
      list: action.payload,
      fetchStatus: `result from... ${(new Date()).toLocaleDateString()}`,
    }
  case actionTypes.TVSHOWS_FETCH_REJECTED:
    return {
      ...state,
      fetchStatus: `errored: ${action.payload}`
    }
  default: return state;
  }
};

