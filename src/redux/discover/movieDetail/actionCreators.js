import actionTypes from './actionTypes';

export const movieDetailFetch = (id) => ({
   type: actionTypes.MOVIE_DETAIL_FETCH,
   payload: id
  });
export const movieDetailFetchCancel = () => ({type: actionTypes.MOVIE_DETAIL_FETCH_CANCEL});
export const movieDetailFetchFulfilled = (detail) => ({
  type: actionTypes.MOVIE_DETAIL_FETCH_FULFILLED,
  payload: detail
})
export const movieDetailFetchRejected = (err) => ({
  type: actionTypes.MOVIE_DETAIL_FETCH_REJECTED,
  payload: err,
  error: true
})

export default {
  movieDetailFetch,
  movieDetailFetchCancel,
  movieDetailFetchFulfilled,
  movieDetailFetchRejected
};
