import actionTypes from './actionTypes';

export default function reducer (state = actionTypes.intialState, action) {
  switch (action.type) {
    case actionTypes.DETAIL_FETCH:
      return {
        ...state,
        fetchStatus: `fetching ... ${(new Date()).toLocaleDateString()}`,
      }
    case actionTypes.DETAIL_FETCH_FULFILLED:
      return {
        ...state,
        detail: action.payload,
        fetchStatus: `results from ... ${(new Date()).toLocaleDateString()}`
      }
    case actionTypes.DETAIL_FETCH_REJECTED:
      return {
        ...state,
        fetchStatus: `errored: ${action.payload}`
      }
    case actionTypes.DETAIL_FETCH_CANCEL:
      return {
        ...state,
        fetchStatus: `details cancelled`
      }
    default: return state;
  }
}
