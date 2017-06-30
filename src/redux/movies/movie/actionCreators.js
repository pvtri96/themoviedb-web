import actionTypes from './actionTypes';

export const movieDetailFetchRequested = () => ({
  type: actionTypes.MOVIE_DETAIL_FETCH_REQUESTED
});

export const movieDetailFetchFullfilled = (detail, crew, cast, reviews,
  recommendations, releaseDates, keywords) => ({
  type: actionTypes.MOVIE_DETAIL_FETCH_FULLFILLED,
  detail,
  crew,
  cast,
  reviews,
  recommendations,
  releaseDates,
  keywords,
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
