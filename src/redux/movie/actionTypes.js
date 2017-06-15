export const MOVIE_FETCH = 'MOVIE_FETCH';
export const MOVIE_FETCH_CANCEL = 'MOVIE_FETCH_CANCEL';
export const MOVIE_FETCH_FULFILLED = 'MOVIE_FETCH_FULFILLED';
export const MOVIE_FETCH_REJECTED = 'MOVIE_FETCH_REJECTED';

export const initialState = {
  list: [],
  fetchStatus: ''
};


export default {
  MOVIE_FETCH,
  MOVIE_FETCH_CANCEL,
  MOVIE_FETCH_FULFILLED,
  MOVIE_FETCH_REJECTED,
  initialState
}
