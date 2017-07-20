import actionTypes from './actionTypes';
// moviedetail
export const movieDetailFetchRequested = () => ({
  type: actionTypes.MOVIE_DETAIL_FETCH_REQUESTED
});

export const movieDetailFetchFullfilled = (payload) => ({
  type: actionTypes.MOVIE_DETAIL_FETCH_FULLFILLED,
  payload
});

export const movieDetailFetchRejected = (err) => ({
  type: actionTypes.MOVIE_DETAIL_FETCH_REJECTED,
  payload: err,
  error: true
});

// credits
export const creditsFetchRequested = () => ({
  type: actionTypes.CREDITS_FETCH_REQUESTED
});

export const creditsFetchFullfilled = (payload) => ({
  type: actionTypes.CREDITS_FETCH_FULLFILLED,
  payload
});

export const creditsFetchRejected = (err) => ({
  type: actionTypes.CREDITS_FETCH_REJECTED,
  payload: err,
  error: true
});

// reviews
export const reviewsFetchRequested = () => ({
  type: actionTypes.REVIEWS_FETCH_REQUESTED
});

export const reviewsFetchFullfilled = (payload) => ({
  type: actionTypes.REVIEWS_FETCH_FULLFILLED,
  payload
});

export const reviewsFetchRejected = (err) => ({
  type: actionTypes.REVIEWS_FETCH_REJECTED,
  payload: err,
  error: true
});

// recommendations
export const recommendationsFetchRequested = () => ({
  type: actionTypes.RECOMMENDATIONS_FETCH_REQUESTED
});

export const recommendationsFetchFullfilled = (payload) => ({
  type: actionTypes.RECOMMENDATIONS_FETCH_FULLFILLED,
  payload
});

export const recommendationsFetchRejected = (err) => ({
  type: actionTypes.RECOMMENDATIONS_FETCH_REJECTED,
  payload: err,
  error: true
});

// release dates
export const releaseDatesFetchRequested = () => ({
  type: actionTypes.RELEASE_DATES_FETCH_REQUESTED
});

export const releaseDatesFetchFullfilled = (payload) => ({
  type: actionTypes.RELEASE_DATES_FETCH_FULLFILLED,
  payload
});

export const releaseDatesFetchRejected = (err) => ({
  type: actionTypes.RELEASE_DATES_FETCH_REJECTED,
  payload: err,
  error: true
});

// keywords
export const keywordsFetchRequested = () => ({
  type: actionTypes.KEYWORDS_FETCH_REQUESTED
});

export const keywordsFetchFullfilled = (payload) => ({
  type: actionTypes.KEYWORDS_FETCH_FULLFILLED,
  payload
});

export const keywordsFetchRejected = (err) => ({
  type: actionTypes.KEYWORDS_FETCH_REJECTED,
  payload: err,
  error: true
});



export default {
  movieDetailFetchRequested,
  movieDetailFetchFullfilled,
  movieDetailFetchRejected,

  creditsFetchRequested,
  creditsFetchFullfilled,
  creditsFetchRejected,

  reviewsFetchRequested,
  reviewsFetchFullfilled,
  reviewsFetchRejected,

  recommendationsFetchRequested,
  recommendationsFetchFullfilled,
  recommendationsFetchRejected,

  releaseDatesFetchRequested,
  releaseDatesFetchFullfilled,
  releaseDatesFetchRejected,

  keywordsFetchRequested,
  keywordsFetchFullfilled,
  keywordsFetchRejected,


};
