import actionTypes from './actionTypes.js';

export const moviesFetchRequested = () => ({ type: actionTypes.MOVIES_FETCH_REQUESTED });
export const moviesFetchFulfilled = (movies) => ({
  type: actionTypes.MOVIES_FETCH_FULFILLED,
  payload: movies
});
export const moviesFetchRejected = (err) => ({
  type: actionTypes.MOVIES_FETCH_REJECTED,
  payload: err,
  error: true
});

export default {
  moviesFetchRequested,
  moviesFetchFulfilled,
  moviesFetchRejected
};
