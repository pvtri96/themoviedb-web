import {
  PERSON_FETCH,
  PERSON_FETCH_CANCEL,
  PERSON_FETCH_FULFILLED,
  PERSON_FETCH_REJECTED
} from './actions';
import {INITIAL_STATE} from './actions';

export default function reducer (state=INITIAL_STATE, action){
  switch (action.type){
    case PERSON_FETCH:
      return {
        ...state,
        fetchStatus: `fetching... ${(new Date()).toLocaleString()}`,
      };
    case PERSON_FETCH_FULFILLED:
      return {
        ...state,
        fetchStatus: `Results from ${(new Date()).toLocaleString()}`,
        person:action.payload
      };
    case PERSON_FETCH_REJECTED:
      return {
        ...state,
        fetchStatus: `errored: ${action.payload}`
      };
    case PERSON_FETCH_CANCEL:
      return {
        ...state,
        fetchStatus: 'person cancel'
      };
    default:
      return state;
  }
}
