import actionTypes from './actionTypes';

export const detailFetch = (id) => ({
   type: actionTypes.DETAIL_FETCH,
   payload: id
});

export const detailFetchCancel = () => ({ type: actionTypes.DETAIL_FETCH_CANCEL });

export const detailFetchFulfilled = (detail) => ({
  type: actionTypes.DETAIL_FETCH_FULFILLED,
  payload: detail
});

export const detailFetchRejected = (err) => ({
  type: actionTypes.DETAIL_FETCH_REJECTED,
  payload: err,
  error: true
});

export default {
  detailFetch,
  detailFetchCancel,
  detailFetchFulfilled,
  detailFetchRejected
}
