import actionTypes from './actionTypes';

export const moviesFetchRequested = () => ({ type: actionTypes.MOVIE_FETCH_REQUESTED });
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
  moviesFetchRequested,
  moviesFetchFulfilled,
  moviesFetchRejected
};
