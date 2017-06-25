import actionTypes from './actionTypes.js';

export const moviesFetchRequested = () => ({ type: actionTypes.MOVIES_FETCH_REQUESTED });
export const moviesFetchFulfilled = (movies,sort_by,year) => ({
  type: actionTypes.MOVIES_FETCH_FULFILLED,
  payload: movies,
  sort_by: sort_by,
  year: year
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
