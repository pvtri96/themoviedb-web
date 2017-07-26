import actionTypes from './actionTypes';

export const INITIAL_STATE = {
  detail: {},
  fetchStatus: ''
};

export const KEY = 'tvshow';

export const selector = state => state[KEY];

const Reducer = (state = INITIAL_STATE, action) => {
  switch(action.type) {
    // tvshow detail
  case actionTypes.TVSHOW_DETAIL_FETCH_REQUESTED :
    return {
      ...state,
      fetchStatus : `Data fetching ... ${(new Date()).toLocaleTimeString()}`
    };

  case actionTypes.TVSHOW_DETAIL_FETCH_FULFILLED :
    return {
      ...state,
      detail: action.payload,
      fetchStatus : `Data fetched success ${(new Date()).toLocaleTimeString()}!`
    };

  case actionTypes.TVSHOW_DETAIL_FETCH_REJECTED :
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
    // images
  case actionTypes.IMAGES_FETCH_REQUESTED :
    return {
      ...state,
      fetchStatus : `Data fetching ... ${(new Date()).toLocaleTimeString()}`
    };

  case actionTypes.IMAGES_FETCH_FULLFILLED :
    return {
      ...state,
      images: action.payload,
      fetchStatus : `Data fetched success ${(new Date()).toLocaleTimeString()}!`
    };

  case actionTypes.IMAGES_FETCH_REJECTED :
    return {
      ...state,
      fetchStatus: `Error: ${action.payload} ${(new Date()).toLocaleTimeString()}`
    };


    // videos
  case actionTypes.VIDEOS_FETCH_REQUESTED :
    return {
      ...state,
      fetchStatus : `Data fetching ... ${(new Date()).toLocaleTimeString()}`
    };

  case actionTypes.VIDEOS_FETCH_FULLFILLED :
    return {
      ...state,
      videos: action.payload,
      fetchStatus : `Data fetched success ${(new Date()).toLocaleTimeString()}!`
    };

  case actionTypes.VIDEOS_FETCH_REJECTED :
    return {
      ...state,
      fetchStatus: `Error: ${action.payload} ${(new Date()).toLocaleTimeString()}`
    };

    // season
  case actionTypes.SEASON_FETCH_REQUESTED :
    return {
      ...state,
      fetchStatus : `Data fetching ... ${(new Date()).toLocaleTimeString()}`
    };

  case actionTypes.SEASON_FETCH_FULLFILLED :
    return {
      ...state,
      season: action.payload,
      fetchStatus : `Data fetched success ${(new Date()).toLocaleTimeString()}!`
    };

  case actionTypes.SEASON_FETCH_REJECTED :
    return {
      ...state,
      fetchStatus: `Error: ${action.payload} ${(new Date()).toLocaleTimeString()}`
    };


  default :
    return state;
  }
};

export default Reducer;
