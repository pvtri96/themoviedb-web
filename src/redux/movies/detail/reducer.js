import actionTypes from './actionTypes';

export const INITIAL_STATE = {
  detail: {},
  fetchStatus: ''
};

export const KEY = 'movie';

export const selector = state => state[KEY];

const Reducer = (state = INITIAL_STATE, action) => {
  switch(action.type) {
    // movie detail
  case actionTypes.MOVIE_DETAIL_FETCH_REQUESTED :
    return {
      ...state,
      fetchStatus : `Data fetching ... ${(new Date()).toLocaleTimeString()}`
    };

  case actionTypes.MOVIE_DETAIL_FETCH_FULLFILLED :
    return {
      ...state,
      detail: action.payload,
      fetchStatus : `Data fetched success ${(new Date()).toLocaleTimeString()}!`
    };

  case actionTypes.MOVIE_DETAIL_FETCH_REJECTED :
    return {
      ...state,
      fetchStatus: `Error: ${action.payload} ${(new Date()).toLocaleTimeString()}`
    };

    // credits
  case actionTypes.MOVIE_CREDITS_FETCH_REQUESTED :
    return {
      ...state,
      fetchStatus : `Data fetching ... ${(new Date()).toLocaleTimeString()}`
    };

  case actionTypes.MOVIE_CREDITS_FETCH_FULLFILLED :
    return {
      ...state,
      credits: action.payload,
      fetchStatus : `Data fetched success ${(new Date()).toLocaleTimeString()}!`
    };

  case actionTypes.MOVIE_CREDITS_FETCH_REJECTED :
    return {
      ...state,
      fetchStatus: `Error: ${action.payload} ${(new Date()).toLocaleTimeString()}`
    };

    // reviews
  case actionTypes.MOVIE_REVIEWS_FETCH_REQUESTED :
    return {
      ...state,
      fetchStatus : `Data fetching ... ${(new Date()).toLocaleTimeString()}`
    };

  case actionTypes.MOVIE_REVIEWS_FETCH_FULLFILLED :
    return {
      ...state,
      reviews: action.payload,
      fetchStatus : `Data fetched success ${(new Date()).toLocaleTimeString()}!`
    };

  case actionTypes.MOVIE_REVIEWS_FETCH_REJECTED :
    return {
      ...state,
      fetchStatus: `Error: ${action.payload} ${(new Date()).toLocaleTimeString()}`
    };
    // recommendations
  case actionTypes.MOVIE_RECOMMENDATIONS_FETCH_REQUESTED :
    return {
      ...state,
      fetchStatus : `Data fetching ... ${(new Date()).toLocaleTimeString()}`
    };

  case actionTypes.MOVIE_RECOMMENDATIONS_FETCH_FULLFILLED :
    return {
      ...state,
      recommendations: action.payload,
      fetchStatus : `Data fetched success ${(new Date()).toLocaleTimeString()}!`
    };

  case actionTypes.MOVIE_RECOMMENDATIONS_FETCH_REJECTED :
    return {
      ...state,
      fetchStatus: `Error: ${action.payload} ${(new Date()).toLocaleTimeString()}`
    };

    // release dates
  case actionTypes.MOVIE_RELEASE_DATES_FETCH_REQUESTED :
    return {
      ...state,
      fetchStatus : `Data fetching ... ${(new Date()).toLocaleTimeString()}`
    };

  case actionTypes.MOVIE_RELEASE_DATES_FETCH_FULLFILLED :
    return {
      ...state,
      releaseDates: action.payload,
      fetchStatus : `Data fetched success ${(new Date()).toLocaleTimeString()}!`
    };

  case actionTypes.MOVIE_RELEASE_DATES_FETCH_REJECTED :
    return {
      ...state,
      fetchStatus: `Error: ${action.payload} ${(new Date()).toLocaleTimeString()}`
    };

    // keywords
  case actionTypes.MOVIE_KEYWORDS_FETCH_REQUESTED :
    return {
      ...state,
      fetchStatus : `Data fetching ... ${(new Date()).toLocaleTimeString()}`
    };

  case actionTypes.MOVIE_KEYWORDS_FETCH_FULLFILLED :
    return {
      ...state,
      keywords: action.payload,
      fetchStatus : `Data fetched success ${(new Date()).toLocaleTimeString()}!`
    };

  case actionTypes.MOVIE_KEYWORDS_FETCH_REJECTED :
    return {
      ...state,
      fetchStatus: `Error: ${action.payload} ${(new Date()).toLocaleTimeString()}`
    };
    // images
  case actionTypes.MOVIE_IMAGES_FETCH_REQUESTED :
    return {
      ...state,
      fetchStatus : `Data fetching ... ${(new Date()).toLocaleTimeString()}`
    };

  case actionTypes.MOVIE_IMAGES_FETCH_FULLFILLED :
    return {
      ...state,
      images: action.payload,
      fetchStatus : `Data fetched success ${(new Date()).toLocaleTimeString()}!`
    };

  case actionTypes.MOVIE_IMAGES_FETCH_REJECTED :
    return {
      ...state,
      fetchStatus: `Error: ${action.payload} ${(new Date()).toLocaleTimeString()}`
    };


    // videos
  case actionTypes.MOVIE_VIDEOS_FETCH_REQUESTED :
    return {
      ...state,
      fetchStatus : `Data fetching ... ${(new Date()).toLocaleTimeString()}`
    };

  case actionTypes.MOVIE_VIDEOS_FETCH_FULLFILLED :
    return {
      ...state,
      videos: action.payload,
      fetchStatus : `Data fetched success ${(new Date()).toLocaleTimeString()}!`
    };

  case actionTypes.MOVIE_VIDEOS_FETCH_REJECTED :
    return {
      ...state,
      fetchStatus: `Error: ${action.payload} ${(new Date()).toLocaleTimeString()}`
    };


  default :
    return state;
  }
};

export default Reducer;
