import actionTypes from './actionTypes';

export const moviesFetch = () => ({ type: actionTypes.MOVIE_FETCH });
export const moviesFetchCancel = () => ({ type: actionTypes.MOVIE_FETCH_CANCEL });
export const moviesFetchFulfilled = ( movies ) => ({
  type: actionTypes.MOVIE_FETCH_FULFILLED,
  payload: movies
});

export const moviesFetchRejected = ( err ) => ({
  type: actionTypes.MOVIE_FETCH_REJECTED,
  payload: err,
  error: true
});

export default {
  moviesFetch,
  moviesFetchCancel,
  moviesFetchFulfilled,
  moviesFetchRejected
};
