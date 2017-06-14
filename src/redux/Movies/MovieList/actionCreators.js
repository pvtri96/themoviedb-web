import actionTypes from './actionTypes';

export const moviesFetch = () => ({
  type: actionTypes.MOVIES_FETCH
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

// export const popular = () => ({
//   type: POPULAR
// });

// export const topRated = () => ({
//   type: TOP_RATED
// });

// export const upcoming = () => ({
//   type: UPCOMING
// });

// export const nowPlaying = () => ({
//   type: NOW_PLAYING
// });

export default {
  moviesFetch,
  moviesFetchFullfilled,
  moviesFetchCancel,
  moviesFetchRejected,

  // popular,
  // topRated,
  // upcoming,
  // nowPlaying
}


