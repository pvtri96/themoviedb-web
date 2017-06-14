import actionTypes from './actionTypes';

export const movieDetailFetch = (id) => ({
  type: actionTypes.MOVIE_DETAIL_FETCH,
  payload: id
});

export const movieDetailFetchCancel = () => ({
  type: actionTypes.MOVIE_DETAIL_FETCH_CANCEL,
});

export const movieDetailFetchFullfilled = (movie) => ({
  type: actionTypes.MOVIE_DETAIL_FETCH_FULLFILLED,
  payload: movie
});

export const movieDetailFetchReject = (err) => ({
  type: actionTypes.MOVIE_DETAIL_FETCH_REJECTED,
  payload: err,
  error: true
});

export default {
  movieDetailFetch,
  movieDetailFetchCancel,
  movieDetailFetchFullfilled,
  movieDetailFetchReject
}
