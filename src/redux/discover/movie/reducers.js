import actionTypes from './actionTypes';

const initialState = {
  list: [],
  fecthStatus: ''
};

export default function reducer (state = initialState, action) {
  switch (action.type) {
    case actionTypes.MOVIES_FETCH:
      return{
        ...state,
        fecthStatus: `fetching...`,
      }
    case actionTypes.MOVIES_FETCH_CANCEL:
      return{
        ...state,
        fecthStatus: `cancelled`
      }
    case actionTypes.MOVIES_FETCH_REJECTED:
      return{
        ...state,
        fecthStatus: `errored: ${action.payload}`
      }
    case actionTypes.MOVIES_FETCH_FULFILLED:
      return{
        ...state,
        fecthStatus: `suscess`,
        list: action.payload
      }
    default:
      return state;
  }
}
