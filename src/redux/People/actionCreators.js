import {
  PEOPLE_FETCH,
  PEOPLE_FETCH_CANCEL,
  PEOPLE_FETCH_FULFILLED,
  PEOPLE_FETCH_REJECTED
} from './actions';

export const peopleFetch=()=>({type: PEOPLE_FETCH});
export const peopleFetchCancel=()=>({type: PEOPLE_FETCH_CANCEL});
export const peopleFetchFulfilled=(people)=>({
  type: PEOPLE_FETCH_FULFILLED,
  payload: people
});

export const peopleFetchRejected=(err)=>({
  type: PEOPLE_FETCH_REJECTED,
  payload: err,
  error: true
});

export default {
  peopleFetch,
  peopleFetchCancel,
  peopleFetchFulfilled,
  peopleFetchRejected
};
