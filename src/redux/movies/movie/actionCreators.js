import actionTypes from './actionTypes';

export const movieDetailFetchRequested = () => ({
  type: actionTypes.MOVIE_DETAIL_FETCH_REQUESTED
});

export const movieDetailFetchFullfilled = (movie) => ({
  type: actionTypes.MOVIE_DETAIL_FETCH_FULLFILLED,
  payload: movie
});

export const movieDetailFetchRejected = (err) => ({
  type: actionTypes.MOVIE_DETAIL_FETCH_REJECTED,
  payload: err,
  error: true
});

export default {
  movieDetailFetchRequested,
  movieDetailFetchFullfilled,
  movieDetailFetchRejected
};
