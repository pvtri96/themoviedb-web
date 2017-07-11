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
  case actionTypes.CREDITS_FETCH_REQUESTED :
    return {
      ...state,
      fetchStatus : `Data fetching ... ${(new Date()).toLocaleTimeString()}`
    };

  case actionTypes.CREDITS_FETCH_FULLFILLED :
    return {
      ...state,
      credits: action.payload,
      fetchStatus : `Data fetched success ${(new Date()).toLocaleTimeString()}!`
    };

  case actionTypes.CREDITS_FETCH_REJECTED :
    return {
      ...state,
      fetchStatus: `Error: ${action.payload} ${(new Date()).toLocaleTimeString()}`
    };

    // reviews
  case actionTypes.REVIEWS_FETCH_REQUESTED :
    return {
      ...state,
      fetchStatus : `Data fetching ... ${(new Date()).toLocaleTimeString()}`
    };

  case actionTypes.REVIEWS_FETCH_FULLFILLED :
    return {
      ...state,
      reviews: action.payload,
      fetchStatus : `Data fetched success ${(new Date()).toLocaleTimeString()}!`
    };

  case actionTypes.REVIEWS_FETCH_REJECTED :
    return {
      ...state,
      fetchStatus: `Error: ${action.payload} ${(new Date()).toLocaleTimeString()}`
    };
    // recommendations
  case actionTypes.RECOMMENDATIONS_FETCH_REQUESTED :
    return {
      ...state,
      fetchStatus : `Data fetching ... ${(new Date()).toLocaleTimeString()}`
    };

  case actionTypes.RECOMMENDATIONS_FETCH_FULLFILLED :
    return {
      ...state,
      recommendations: action.payload,
      fetchStatus : `Data fetched success ${(new Date()).toLocaleTimeString()}!`
    };

  case actionTypes.RECOMMENDATIONS_FETCH_REJECTED :
    return {
      ...state,
      fetchStatus: `Error: ${action.payload} ${(new Date()).toLocaleTimeString()}`
    };

    // release dates
  case actionTypes.RELEASE_DATES_FETCH_REQUESTED :
    return {
      ...state,
      fetchStatus : `Data fetching ... ${(new Date()).toLocaleTimeString()}`
    };

  case actionTypes.RELEASE_DATES_FETCH_FULLFILLED :
    return {
      ...state,
      releaseDates: action.payload,
      fetchStatus : `Data fetched success ${(new Date()).toLocaleTimeString()}!`
    };

  case actionTypes.RELEASE_DATES_FETCH_REJECTED :
    return {
      ...state,
      fetchStatus: `Error: ${action.payload} ${(new Date()).toLocaleTimeString()}`
    };

    // keywords
  case actionTypes.KEYWORDS_FETCH_REQUESTED :
    return {
      ...state,
      fetchStatus : `Data fetching ... ${(new Date()).toLocaleTimeString()}`
    };

  case actionTypes.KEYWORDS_FETCH_FULLFILLED :
    return {
      ...state,
      keywords: action.payload,
      fetchStatus : `Data fetched success ${(new Date()).toLocaleTimeString()}!`
    };

  case actionTypes.KEYWORDS_FETCH_REJECTED :
    return {
      ...state,
      fetchStatus: `Error: ${action.payload} ${(new Date()).toLocaleTimeString()}`
    };


  default :
    return state;
  }
};

export default Reducer;
