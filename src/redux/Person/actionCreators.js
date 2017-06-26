import actionTypes from './actionTypes';

export const personFetchRequested=()=>({
  type: actionTypes.PERSON_FETCH_REQUESTED,
});
export const personFetchFulfilled=(person, know_for, externalIds, tagged_images)=>({
  type: actionTypes.PERSON_FETCH_FULFILLED,
  payload: person,
  know_for: know_for,
  externalIds: externalIds,
  tagged_images: tagged_images,
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
