import actionTypes from './actionTypes';

// action creators
export const usersFetchRequested = () => ({ type: actionTypes.USERS_FETCH_REQUESTED });
export const usersFetchFulfilled = (users) => ({
  type: actionTypes.USERS_FETCH_FULFILLED,
  payload: users
});
export const usersFetchRejected = (err) => ({
  type: actionTypes.USERS_FETCH_REJECTED,
  payload: err,
  error: true
});

export default {
  usersFetchRequested,
  usersFetchFulfilled,
  usersFetchRejected
};
