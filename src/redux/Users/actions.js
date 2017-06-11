// action type constants
export const USERS_FETCH = 'USERS_FETCH';
export const USERS_FETCH_CANCEL = 'USERS_FETCH_CANCEL';
export const USERS_FETCH_FULFILLED = 'USERS_FETCH_FULFILLED';
export const USERS_FETCH_REJECTED = 'USERS_FETCH_REJECTED';

export const INITIAL_STATE = {
  list: [],
  fetchStatus: ''
};
export const actionTypes = {
  USERS_FETCH,
  USERS_FETCH_CANCEL,
  USERS_FETCH_FULFILLED,
  USERS_FETCH_REJECTED,
  INITIAL_STATE
};
