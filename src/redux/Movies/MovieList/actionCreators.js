import actionTypes from './actionTypes';

export const moviesFetchRequested = () => ({
  type: actionTypes.MOVIES_FETCH_REQUESTED
});

export const moviesFetchFullfilled = (movies, genres) => ({
  type: actionTypes.MOVIES_FETCH_FULLFILLED,
  payload: movies,
  genres,
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


