import actionTypes from './actionTypes';

export const movieDetailFetchRequested = () => ({
  type: actionTypes.MOVIE_DETAIL_FETCH_REQUESTED
});

export const movieDetailFetchFullfilled = (detail, credits, reviews,
  recommendations, releaseDates, genres,test) => ({
  type: actionTypes.MOVIE_DETAIL_FETCH_FULLFILLED,
  payload: detail,
  credits,
  reviews,
  recommendations,
  releaseDates,
  genres,
  test
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