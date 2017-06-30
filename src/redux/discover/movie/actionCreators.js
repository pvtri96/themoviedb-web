import actionTypes from './actionTypes.js';

export const moviesFetchRequested = () => ({ type: actionTypes.MOVIES_FETCH_REQUESTED });
export const moviesFetchFulfilled = (movies,sort_by,primary_release_year,with_keywords) => ({
  type: actionTypes.MOVIES_FETCH_FULFILLED,
  payload: movies,
  sort_by: sort_by,
  primary_release_year: primary_release_year,
  with_keywords: with_keywords
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
