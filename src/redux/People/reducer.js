import actionTypes from './actionTypes';

export const PEOPLE_KEY = 'people';

export const INITIAL_STATE = {
  listPeople:[],
  fetchStatus:''
};

export const selector = (state) => state[PEOPLE_KEY];

export default (state = INITIAL_STATE, action) => {
  switch (action.type){
  case actionTypes.PEOPLE_FETCH_REQUESTED:
    return {
      ...state,
      fetchStatus: `fetching... ${(new Date()).toLocaleString()}`,
      listPeople:[]
    };
  case actionTypes.PEOPLE_FETCH_FULFILLED:
    return {
      ...state,
      fetchStatus: `Results from ${(new Date()).toLocaleString()}`,
      listPeople:action.payload
    };
  case actionTypes.PEOPLE_FETCH_REJECTED:
    return {
      ...state,
      fetchStatus: `errored: ${action.payload}`
    };
  default:
    return state;
  }
};
