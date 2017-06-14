import actionTypes from './actionTypes';

export const moviesFetch = (filter) => ({
  type: actionTypes.MOVIES_FETCH,
  payload: filter
});

export const moviesFetchFullfilled = (movies) => ({
  type: actionTypes.MOVIES_FETCH_FULLFILLED,
  payload: movies
});

export const moviesFetchCancel = () => ({
  type: actionTypes.MOVIES_FETCH_CANCEL
});

export const moviesFetchRejected = (err) => ({
  type: actionTypes.MOVIES_FETCH_REJECTED,
  payload: err,
  error: true
});



export default {
  moviesFetch,
  moviesFetchFullfilled,
  moviesFetchCancel,
  moviesFetchRejected,

}


