import actionTypes from './actionTypes';

// tvshow detail
export const tvshowDetailFetchRequested = () => ({
  type: actionTypes.TVSHOW_DETAIL_FETCH_REQUESTED
});

export const tvshowDetailFetchFullfiled = (payload) => ({
  type: actionTypes.TVSHOW_DETAIL_FETCH_FULFILLED,
  payload
});

export const tvshowDetailFetchRejected = (err) => ({
  type: actionTypes.TVSHOW_DETAIL_FETCH_REJECTED,
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

// images
export const imagesFetchRequested = () => ({
  type: actionTypes.IMAGES_FETCH_REQUESTED
});

export const imagesFetchFullfilled = (payload) => ({
  type: actionTypes.IMAGES_FETCH_FULLFILLED,
  payload
});

export const imagesFetchRejected = (err) => ({
  type: actionTypes.IMAGES_FETCH_REJECTED,
  payload: err,
  error: true
});
// videos
export const videosFetchRequested = () => ({
  type: actionTypes.VIDEOS_FETCH_REQUESTED
});

export const videosFetchFullfilled = (payload) => ({
  type: actionTypes.VIDEOS_FETCH_FULLFILLED,
  payload
});

export const videosFetchRejected = (err) => ({
  type: actionTypes.VIDEOS_FETCH_REJECTED,
  payload: err,
  error: true
});

export default {
  tvshowDetailFetchRequested,
  tvshowDetailFetchFullfiled,
  tvshowDetailFetchRejected,

  creditsFetchRequested,
  creditsFetchFullfilled,
  creditsFetchRejected,

  reviewsFetchRequested,
  reviewsFetchFullfilled,
  reviewsFetchRejected,

  recommendationsFetchRequested,
  recommendationsFetchFullfilled,
  recommendationsFetchRejected,

  keywordsFetchRequested,
  keywordsFetchFullfilled,
  keywordsFetchRejected,

  imagesFetchRequested,
  imagesFetchFullfilled,
  imagesFetchRejected,

  videosFetchRequested,
  videosFetchFullfilled,
  videosFetchRejected,

};
