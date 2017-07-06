import actionTypes from './actionTypes';

export const PERSON_KEY = 'person';

export const INITIAL_STATE = {
  person: {},
  know_for:{},
  externalIds:{},
  tagged_images:{},
  tv_credits:{},
  person_image:{},
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
      tv_credits: action.tv_credits,
      person_image: action.person_image
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
