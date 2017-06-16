import actionTypes from './actionTypes';

export const moviesFetchRequested = (filter) => ({
  type: actionTypes.MOVIES_FETCH_REQUESTED,
  payload: filter
});

export const moviesFetchFullfilled = (movies) => ({
  type: actionTypes.MOVIES_FETCH_FULLFILLED,
  payload: movies
});

export const moviesFetchRejected = (err) => ({
  type: actionTypes.MOVIES_FETCH_REJECTED,
  payload: err,
  error: true
});


export default {
  moviesFetchRequested,
  moviesFetchFullfilled,
  moviesFetchRejected,
};


