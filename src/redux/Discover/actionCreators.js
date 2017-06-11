import {
  MOVIES_FETCH,
  MOVIES_FETCH_CANCEL,
  MOVIES_FETCH_FULFILLED,
  MOVIES_FETCH_REJECTED
} from './actions.js';

export const moviesFetch = () => ({ type: MOVIES_FETCH });
export const moviesFetchCancel = () => ({ type: MOVIES_FETCH_CANCEL });
export const moviesFetchFulfilled = (movies) => ({
  type: MOVIES_FETCH_FULFILLED,
  payload: movies
});
export const moviesFetchRejected = (err) => ({
  type: MOVIES_FETCH_REJECTED,
  payload: err,
  error: true
});

export default {
  moviesFetch,
  moviesFetchCancel,
  moviesFetchFulfilled,
  moviesFetchRejected
};
