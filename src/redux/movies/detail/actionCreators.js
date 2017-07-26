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
export const movieCreditsFetchRequested = () => ({
  type: actionTypes.MOVIE_CREDITS_FETCH_REQUESTED
});

export const movieCreditsFetchFullfilled = (payload) => ({
  type: actionTypes.MOVIE_CREDITS_FETCH_FULLFILLED,
  payload
});

export const movieCreditsFetchRejected = (err) => ({
  type: actionTypes.MOVIE_CREDITS_FETCH_REJECTED,
  payload: err,
  error: true
});

// reviews
export const movieReviewsFetchRequested = () => ({
  type: actionTypes.MOVIE_REVIEWS_FETCH_REQUESTED
});

export const movieReviewsFetchFullfilled = (payload) => ({
  type: actionTypes.MOVIE_REVIEWS_FETCH_FULLFILLED,
  payload
});

export const movieReviewsFetchRejected = (err) => ({
  type: actionTypes.MOVIE_REVIEWS_FETCH_REJECTED,
  payload: err,
  error: true
});

// recommendations
export const movieRecommendationsFetchRequested = () => ({
  type: actionTypes.MOVIE_RECOMMENDATIONS_FETCH_REQUESTED
});

export const movieRecommendationsFetchFullfilled = (payload) => ({
  type: actionTypes.MOVIE_RECOMMENDATIONS_FETCH_FULLFILLED,
  payload
});

export const movieRecommendationsFetchRejected = (err) => ({
  type: actionTypes.MOVIE_RECOMMENDATIONS_FETCH_REJECTED,
  payload: err,
  error: true
});

// release dates
export const movieReleaseDatesFetchRequested = () => ({
  type: actionTypes.MOVIE_RELEASE_DATES_FETCH_REQUESTED
});

export const movieReleaseDatesFetchFullfilled = (payload) => ({
  type: actionTypes.MOVIE_RELEASE_DATES_FETCH_FULLFILLED,
  payload
});

export const movieReleaseDatesFetchRejected = (err) => ({
  type: actionTypes.MOVIE_RELEASE_DATES_FETCH_REJECTED,
  payload: err,
  error: true
});

// keywords
export const movieKeywordsFetchRequested = () => ({
  type: actionTypes.MOVIE_KEYWORDS_FETCH_REQUESTED
});

export const movieKeywordsFetchFullfilled = (payload) => ({
  type: actionTypes.MOVIE_KEYWORDS_FETCH_FULLFILLED,
  payload
});

export const movieKeywordsFetchRejected = (err) => ({
  type: actionTypes.MOVIE_KEYWORDS_FETCH_REJECTED,
  payload: err,
  error: true
});

// images
export const movieImagesFetchRequested = () => ({
  type: actionTypes.MOVIE_IMAGES_FETCH_REQUESTED
});

export const movieImagesFetchFullfilled = (payload) => ({
  type: actionTypes.MOVIE_IMAGES_FETCH_FULLFILLED,
  payload
});

export const movieImagesFetchRejected = (err) => ({
  type: actionTypes.MOVIE_IMAGES_FETCH_REJECTED,
  payload: err,
  error: true
});
// videos
export const movieVideosFetchRequested = () => ({
  type: actionTypes.MOVIE_VIDEOS_FETCH_REQUESTED
});

export const movieVideosFetchFullfilled = (payload) => ({
  type: actionTypes.MOVIE_VIDEOS_FETCH_FULLFILLED,
  payload
});

export const movieVideosFetchRejected = (err) => ({
  type: actionTypes.MOVIE_VIDEOS_FETCH_REJECTED,
  payload: err,
  error: true
});



export default {
  movieDetailFetchRequested,
  movieDetailFetchFullfilled,
  movieDetailFetchRejected,

  movieCreditsFetchRequested,
  movieCreditsFetchFullfilled,
  movieCreditsFetchRejected,

  movieReviewsFetchRequested,
  movieReviewsFetchFullfilled,
  movieReviewsFetchRejected,

  movieRecommendationsFetchRequested,
  movieRecommendationsFetchFullfilled,
  movieRecommendationsFetchRejected,

  movieReleaseDatesFetchRequested,
  movieReleaseDatesFetchFullfilled,
  movieReleaseDatesFetchRejected,

  movieKeywordsFetchRequested,
  movieKeywordsFetchFullfilled,
  movieKeywordsFetchRejected,

  movieImagesFetchRequested,
  movieImagesFetchFullfilled,
  movieImagesFetchRejected,

  movieVideosFetchRequested,
  movieVideosFetchFullfilled,
  movieVideosFetchRejected,
};
