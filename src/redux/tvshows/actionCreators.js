import actionTypes from './actionTypes';

export const dataFetchRequested = () => ({
  type: actionTypes.DATA_FETCH_REQUESTED
});
export const dataFetchFulfilled = ( data, genres ) => ({
  type: actionTypes.DATA_FETCH_FULFILLED,
  payload: data, genres
});

export const dataFetchRejected = ( err ) => ({
  type: actionTypes.DATA_FETCH_REJECTED,
  payload: err,
  error: true
});

export default {
  dataFetchRequested,
  dataFetchFulfilled,
  dataFetchRejected
};
