import actionTypes from './actionTypes';

export const KEY = 'users';

export const INITIAL_STATE = {
  list: [],
  fetchStatus: ''
};

export const selector = (state) => state[KEY];

export default (state = INITIAL_STATE, action) => {
  switch(action.type) {
  case actionTypes.USERS_FETCH_REQUESTED:
    return {
      ...state,
      fetchStatus: `fetching... ${(new Date()).toLocaleString()}`,
    };
  case actionTypes.USERS_FETCH_FULFILLED:
    return {
      ...state,
      list: action.payload,
      fetchStatus: `Results from ${(new Date()).toLocaleString()}`
    };
  case actionTypes.USERS_FETCH_REJECTED:
    return {
      ...state,
      fetchStatus: `errored: ${action.payload}`
    };
  default:
    return state;
  }
};
