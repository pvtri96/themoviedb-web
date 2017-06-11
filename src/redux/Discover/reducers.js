import {
  MOVIES_FETCH,
  MOVIES_FETCH_CANCEL,
  MOVIES_FETCH_FULFILLED,
  MOVIES_FETCH_REJECTED
} from './actions.js';

const initialState = {
  list: [],
  fecthStatus: ''
};

export default function reducer (state = initialState, action) {
  switch (action.type) {
    case MOVIES_FETCH:
      return{
        ...state,
        fecthStatus: `fetching...`,
        list: []
      }
    case MOVIES_FETCH_CANCEL:
      return{
        ...state,
        fecthStatus: `cancelled`
      }
    case MOVIES_FETCH_REJECTED:
      return{
        ...state,
        fecthStatus: `errored: ${action.payload}`
      }
    case MOVIES_FETCH_FULFILLED:
      return{
        ...state,
        fecthStatus: `suscess`,
        list: action.payload
      }
    default:
      return state;
  }
}
