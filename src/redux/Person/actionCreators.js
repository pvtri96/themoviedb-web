import {
  PERSON_FETCH,
  PERSON_FETCH_FULFILLED,
  PERSON_FETCH_CANCEL,
  PERSON_FETCH_REJECTED
} from './actions';

export const personFetch=(id)=>(
  {
    type: PERSON_FETCH,
    payload: id
  }
);
export const personFetchCancel=()=>({type: PERSON_FETCH_CANCEL});
export const personFetchFulfilled=(person)=>({
  type: PERSON_FETCH_FULFILLED,
  payload: person
});

export const personFetchRejected=(err)=>({
  type: PERSON_FETCH_REJECTED,
  payload: err,
  error: true
});

export default {
  personFetch,
  personFetchCancel,
  personFetchFulfilled,
  personFetchRejected
};
