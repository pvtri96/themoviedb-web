export const DETAIL_FETCH = 'DETAIL_FETCH';
export const DETAIL_FETCH_CANCEL = 'DETAIL_FETCH_CANCEL';
export const DETAIL_FETCH_FULFILLED = 'DETAIL_FETCH_FULFILLED';
export const DETAIL_FETCH_REJECTED = 'DETAIL_FETCH_REJECTED';

export const intialState = {
  detail: {},
  fetchStatus: ''
};

export default {
  DETAIL_FETCH,
  DETAIL_FETCH_CANCEL,
  DETAIL_FETCH_FULFILLED,
  DETAIL_FETCH_REJECTED,
  intialState
}
