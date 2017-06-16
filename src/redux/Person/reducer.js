import actionTypes from './actionTypes';

export const KEY_PERSON = 'person';

export const INITIAL_STATE = {
  person: {},
  fetchStatus:''
};

export const selector =(state) => state[KEY_PERSON];

export default (state = INITIAL_STATE, action)=>{
  switch (action.type){
  case actionTypes.PERSON_FETCH_REQUESTED:
    return {
      ...state,
      fetchStatus: `fetching... ${(new Date()).toLocaleString()}`,
      person: {}
    };
  case actionTypes.PERSON_FETCH_FULFILLED:
    return {
      ...state,
      fetchStatus: `Results from ${(new Date()).toLocaleString()}`,
      person:action.payload
    };
  case actionTypes.PERSON_FETCH_REJECTED:
    return {
      ...state,
      fetchStatus: `errored: ${action.payload}`
    };
  default:
    return state;
  }
};
