import actionTypes from './actionTypes';

export const KEY = 'details';

export const INITIAL_STATE = {
  detail: {},
  fetchStatus: ''
};

export const selector = (state) => ({
  list: state[KEY].list,
  fetchStatus:state[KEY].fetchStatus
});

export default (state = INITIAL_STATE, action) {
  switch (action.type) {
  case actionTypes.DETAIL_FETCH:
    return {
      ...state,
      fetchStatus: `fetching ... ${(new Date()).toLocaleDateString()}`,
    }
  case actionTypes.DETAIL_FETCH_FULFILLED:
    return {
      ...state,
      detail: action.payload,
      fetchStatus: `results from ... ${(new Date()).toLocaleDateString()}`
    }
  case actionTypes.DETAIL_FETCH_REJECTED:
    return {
      ...state,
      fetchStatus: `errored: ${action.payload}`
    }
  default: return state;
  }
};
