import actionTypes from './actionTypes';

export const KEY = 'users';

const initialState = {
  list: [],
  fetchStatus: ''
};

export const selector = (state) => state[KEY];

export default (state = initialState, action) => {
  switch(action.type) {
  case actionTypes.USERS_FETCH:
    return {
      ...state,
      fetchStatus: `fetching... ${(new Date()).toLocaleString()}`,
      list: []
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
