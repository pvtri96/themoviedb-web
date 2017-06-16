import actionTypes from './actionTypes.js';

export const moviesFetch = () => ({ type: actionTypes.MOVIES_FETCH });
export const moviesFetchCancel = () => ({ type: actionTypes.MOVIES_FETCH_CANCEL });
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
  moviesFetch,
  moviesFetchCancel,
  moviesFetchFulfilled,
  moviesFetchRejected
};
