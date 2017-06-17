import actionTypes from './actionTypes';

export const personFetchRequested=()=>({
  type: actionTypes.PERSON_FETCH_REQUESTED,
});
export const personFetchFulfilled=(person)=>({
  type: actionTypes.PERSON_FETCH_FULFILLED,
  payload: person
});

export const personFetchRejected=(err)=>({
  type: actionTypes.PERSON_FETCH_REJECTED,
  payload: err,
  error: true
});

export default {
  personFetchRequested,
  personFetchFulfilled,
  personFetchRejected
};
