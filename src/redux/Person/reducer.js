import actionTypes from './actionTypes';

export const PERSON_KEY = 'person';

export const INITIAL_STATE = {
  person: {},
  know_for:{},
  externalIds:{},
  tagged_images:{},
  fetchStatus:''
};

export const selector =(state) => state[PERSON_KEY];

export default (state = INITIAL_STATE, action)=>{
  switch (action.type){
  case actionTypes.PERSON_FETCH_REQUESTED:
    return {
      ...state,
      fetchStatus: `fetching... ${(new Date()).toLocaleString()}`
    };
  case actionTypes.PERSON_FETCH_FULFILLED:
    return {
      ...state,
      fetchStatus: `Results from ${(new Date()).toLocaleString()}`,
      person:action.payload,
      know_for: action.know_for,
      externalIds: action.externalIds,
      tagged_images: action.tagged_images,
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
