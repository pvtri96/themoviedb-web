import actionTypes from './actionTypes';

export const KEY = 'movies';
export const INITIAL_STATE = {
  list: [],
  fecthStatus: ''
};

export const sort_by = {
  popularity_asc: 'popularity.asc',
  popularity_desc: 'popularity.desc',
  release_date_desc: 'release_date_desc',
  release_date_asc: 'release_date_asc'
};
export const selector = (state) => state[KEY];
export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case actionTypes.MOVIES_FETCH_REQUESTED:
    return{
      ...state,
      fecthStatus: `fetching...`,
    };
  case actionTypes.MOVIES_FETCH_REJECTED:
    return{
      ...state,
      fecthStatus: `errored: ${action.payload}`
    };
  case actionTypes.MOVIES_FETCH_FULFILLED:
    return{
      ...state,
      fecthStatus: `suscess`,
      list: action.payload
    };
  default:
    return state;
  }
};
