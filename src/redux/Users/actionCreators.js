import {
  USERS_FETCH,
  USERS_FETCH_CANCEL,
  USERS_FETCH_FULFILLED,
  USERS_FETCH_REJECTED
} from './actions';

// action creators
export const usersFetch = () => ({ type: USERS_FETCH });
export const usersFetchCancel = () => ({ type: USERS_FETCH_CANCEL });
export const usersFetchFulfilled = (users) => ({
  type: USERS_FETCH_FULFILLED,
  payload: users
});
export const usersFetchRejected = (err) => ({
  type: USERS_FETCH_REJECTED,
  payload: err,
  error: true
});

export default {
  usersFetch,
  usersFetchCancel,
  usersFetchFulfilled,
  usersFetchRejected
};
