import actionTypes from './actionTypes';

export const INITIAL_STATE = {
  list: [],
  genres: [],
  current: {},
  fetchStatus :''
};

export const filter = {
  popular: 'popular',
  top_rated: 'top_rated',
  upcoming: 'upcoming',
  now_playing: 'now_playing',
};

export const KEY = 'movies';

export const selector = (state) => state[KEY];


const Reducer = (state = INITIAL_STATE, action) => {
  switch(action.type) {
    // movies
  case actionTypes.MOVIES_FETCH_REQUESTED :
    return {
      ...state,
      fetchStatus : `Data fetching ... ${(new Date()).toLocaleTimeString()}`
    };

  case actionTypes.MOVIES_FETCH_FULLFILLED :
    return {
      ...state,
      list: action.payload,
      fetchStatus : `Data fetched success ${(new Date()).toLocaleTimeString()}!`
    };

  case actionTypes.MOVIES_FETCH_REJECTED :
    return {
      ...state,
      fetchStatus: `Error: ${action.payload} ${(new Date()).toLocaleTimeString()}`
    };

    // current
  case actionTypes.CURRENT_FETCH_REQUESTED :
    return {
      ...state,
      fetchStatus : `Data fetching ... ${(new Date()).toLocaleTimeString()}`
    };

  case actionTypes.CURRENT_FETCH_FULLFILLED :
    return {
      ...state,
      current: action.payload,
      fetchStatus : `Data fetched success ${(new Date()).toLocaleTimeString()}!`
    };

  case actionTypes.CURRENT_FETCH_REJECTED :
    return {
      ...state,
      fetchStatus: `Error: ${action.payload} ${(new Date()).toLocaleTimeString()}`
    };

    // genres
  case actionTypes.GENRES_FETCH_REQUESTED :
    return {
      ...state,
      fetchStatus : `Data fetching ... ${(new Date()).toLocaleTimeString()}`
    };

  case actionTypes.GENRES_FETCH_FULLFILLED :
    return {
      ...state,
      genres: action.payload,
      fetchStatus : `Data fetched success ${(new Date()).toLocaleTimeString()}!`
    };

  case actionTypes.GENRES_FETCH_REJECTED :
    return {
      ...state,
      fetchStatus: `Error: ${action.payload} ${(new Date()).toLocaleTimeString()}`
    };
  default :
    return state;
  }
};


export default Reducer;
