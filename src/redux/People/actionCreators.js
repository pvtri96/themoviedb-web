import actionTypes from './actionTypes';

export const peopleFetchRequested = () => ({
  type: actionTypes.PEOPLE_FETCH_REQUESTED
});
export const peopleFetchFulfilled = (people) => ({
  type: actionTypes.PEOPLE_FETCH_FULFILLED,
  payload: people
});

export const peopleFetchRejected=(err)=>({
  type: actionTypes.PEOPLE_FETCH_REJECTED,
  payload: err,
  error: true
});

export default {
  peopleFetchRequested,
  peopleFetchFulfilled,
  peopleFetchRejected
};
