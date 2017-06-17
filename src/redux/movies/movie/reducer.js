import actionTypes from './actionTypes';

export const INITIAL_STATE = {
  detail: {},
  fetchStatus: ''
};

export const KEY = 'movie';

export const selector = state => state[KEY];

const Reducer = (state = INITIAL_STATE, action) => {
  switch(action.type) {
  case actionTypes.MOVIE_DETAIL_FETCH_REQUESTED :
    return {
      ...state,
      fetchStatus: `Data fetch ${(new Date()).toLocaleTimeString()}`
    };
  case actionTypes.MOVIE_DETAIL_FETCH_FULLFILLED :
    return {
      ...state,
      detail: action.payload,
      fetchStatus: `Date fetch success ${(new Date()).toLocaleTimeString()}`
    };

  case actionTypes.MOVIE_DETAIL_FETCH_REJECTED :
    return {
      ...state,
      fetchStatus: `Error : ${action.payload} ${(new Date()).toLocaleTimeString()}`
    };

  default :
    return state;
  }
};

export default Reducer;
