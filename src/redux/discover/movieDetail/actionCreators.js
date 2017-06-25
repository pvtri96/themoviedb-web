import actionTypes from './actionTypes';

export const movieDetailFetchRequested = () => ({
  type: actionTypes.MOVIE_DETAIL_FETCH_REQUESTED,
});
export const movieDetailFetchFulfilled = (detail) => ({
  type: actionTypes.MOVIE_DETAIL_FETCH_FULFILLED,
  payload: detail
});
export const movieDetailFetchRejected = (err) => ({
  type: actionTypes.MOVIE_DETAIL_FETCH_REJECTED,
  payload: err,
  error: true
});

export default {
  movieDetailFetchRequested,
  movieDetailFetchFulfilled,
  movieDetailFetchRejected
};
