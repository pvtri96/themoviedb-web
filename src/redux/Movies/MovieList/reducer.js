import actionTypes from './actionTypes';

export const INITIAL_STATE = {
  list: [],
  genres: [],
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
  case actionTypes.MOVIES_FETCH_REQUESTED :
    return {
      ...state,
      fetchStatus : `Data fetching ... ${(new Date()).toLocaleTimeString()}`
    };

  case actionTypes.MOVIES_FETCH_FULLFILLED :
    return {
      ...state,
      list: action.payload,
      genres: action.genres,
      fetchStatus : `Data fetched success ${(new Date()).toLocaleTimeString()}!`
    };

  case actionTypes.MOVIES_FETCH_REJECTED :
    return {
      ...state,
      fetchStatus: `Error: ${action.payload} ${(new Date()).toLocaleTimeString()}`
    };
  default :
    return state;
  }
};


export default Reducer;
