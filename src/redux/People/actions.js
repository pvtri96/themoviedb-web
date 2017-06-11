// action type constants
export const PEOPLE_FETCH = 'PEOPLE_FETCH';
export const PEOPLE_FETCH_CANCEL = 'PEOPLE_FETCH_CANCEL';
export const PEOPLE_FETCH_FULFILLED = 'PEOPLE_FETCH_FULFILLED';
export const PEOPLE_FETCH_REJECTED = 'PEOPLE_FETCH_REJECTED';

export const INITIAL_STATE = {
  listPeople:[],
  fetchStatus:''
};

export const actionTypes = {
  PEOPLE_FETCH,
  PEOPLE_FETCH_CANCEL,
  PEOPLE_FETCH_FULFILLED,
  PEOPLE_FETCH_REJECTED,
  INITIAL_STATE
};
