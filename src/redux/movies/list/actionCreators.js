import actionTypes from './actionTypes';

// movies
export const moviesFetchRequested = () => ({
  type: actionTypes.MOVIES_FETCH_REQUESTED
});

export const moviesFetchFullfilled = (movies) => ({
  type: actionTypes.MOVIES_FETCH_FULLFILLED,
  payload: movies,
});

export const moviesFetchRejected = (err) => ({
  type: actionTypes.MOVIES_FETCH_REJECTED,
  payload: err,
  error: true
});

// genres
export const genresFetchRequested = () => ({
  type: actionTypes.GENRES_FETCH_REQUESTED
});

export const genresFetchFullfilled = (genres) => ({
  type: actionTypes.GENRES_FETCH_FULLFILLED,
  payload: genres,
});

export const genresFetchRejected = (err) => ({
  type: actionTypes.GENRES_FETCH_REJECTED,
  payload: err,
  error: true
});
// current
export const currentFetchRequested = () => ({
  type: actionTypes.CURRENT_FETCH_REQUESTED
});

export const currentFetchFullfilled = (current) => ({
  type: actionTypes.CURRENT_FETCH_FULLFILLED,
  payload: current,
});

export const currentFetchRejected = (err) => ({
  type: actionTypes.CURRENT_FETCH_REJECTED,
  payload: err,
  error: true
});


export default {
  moviesFetchRequested,
  moviesFetchFullfilled,
  moviesFetchRejected,

  genresFetchRequested,
  genresFetchFullfilled,
  genresFetchRejected,

  currentFetchRequested,
  currentFetchFullfilled,
  currentFetchRejected
};


