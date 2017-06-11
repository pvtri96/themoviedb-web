import {
  PEOPLE_FETCH,
  PEOPLE_FETCH_CANCEL,
  PEOPLE_FETCH_FULFILLED,
  PEOPLE_FETCH_REJECTED
} from './actions';
import {INITIAL_STATE} from './actions';

export default function reducer (state=INITIAL_STATE, action){
  switch (action.type){
    case PEOPLE_FETCH:
      return {
        ...state,
        fetchStatus: `fetching... ${(new Date()).toLocaleString()}`,
        listPeople:[]
      };
    case PEOPLE_FETCH_FULFILLED:
      return {
        ...state,
        fetchStatus: `Results from ${(new Date()).toLocaleString()}`,
        listPeople:action.payload
      };
    case PEOPLE_FETCH_REJECTED:
      return {
        ...state,
        fetchStatus: `errored: ${action.payload}`
      };
    case PEOPLE_FETCH_CANCEL:
      return {
        ...state,
        fetchStatus: 'people cancel'
      };
    default:
      return state;
  }
}
