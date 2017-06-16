import actionTypes from './actionTypes';

export const personFetchRequested=(id)=>({
  type: actionTypes.PERSON_FETCH_REQUESTED,
  payload: id
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
