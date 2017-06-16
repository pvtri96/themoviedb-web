import actionTypes from './actionTypes';

export const KEY = 'movies';
const initialState = {
  list: [],
  fecthStatus: ''
};

export const selector = (state) => state[KEY];
export default (state = initialState, action) => {
  switch (action.type) {
  case actionTypes.MOVIES_FETCH_REQUESTED:
    return{
      ...state,
      fecthStatus: `fetching...`,
    };
  case actionTypes.MOVIES_FETCH_CANCEL:
    return{
      ...state,
      fecthStatus: `cancelled`
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
