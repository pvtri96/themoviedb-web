import actionTypes from './actionTypes';

export const KEY = 'movieDetail';
export const INITIAL_STATE = {
  detail: {},
  fetchStatus: ''
};

export const selector = (state) =>state[KEY];

export default (state = INITIAL_STATE, action) =>{
  switch (action.type) {
  case actionTypes.MOVIE_DETAIL_FETCH:
    return {
      ...state,
      fetchStatus: 'fetching...',
    };
  case actionTypes.MOVIE_DETAIL_FETCH_FULFILLED:
    return {
      ...state,
      fetchStatus: 'success',
      detail: action.payload
    };
  case actionTypes.MOVIE_DETAIL_FETCH_REJECTED:
    return {
      ...state,
      fetchStatus: 'rejected',
      error: 'errors: ${action.payload}'
    };
  default:
    return state;
  }

}
