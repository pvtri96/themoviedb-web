import actionTypes from './actionTypes';

const initialState = {
  detail: {},
  fetchStatus: ''
};

export default function Reducer (state = initialState, action){
  switch (action.type) {
    case actionTypes.MOVIE_DETAIL_FETCH:
      return {
        ...state,
        fetchStatus: 'fetching...',
      }
    case actionTypes.MOVIE_DETAIL_FETCH_CANCEL:
      return {
        ...state,
        fetchStatus: 'canceled',
      }
    case actionTypes.MOVIE_DETAIL_FETCH_FULFILLED:
      return {
        ...state,
        fetchStatus: 'success',
        detail: action.payload
      }
    case actionTypes.MOVIE_DETAIL_FETCH_REJECTED:
      return {
        ...state,
        fetchStatus: 'rejected',
        error: 'errors: ${action.payload}'
      }
    default:
      return state;
  }

}
