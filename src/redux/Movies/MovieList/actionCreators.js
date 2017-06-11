import {
  POPULAR,
  TOP_RATED,
  UPCOMING,
  NOW_PLAYING,

  MOVIES_FETCH,
  MOVIES_FETCH_FULLFILLED,
  MOVIES_FETCH_CANCEL,
  MOVIES_FETCH_REJECTED
} from './actions.js';

export const moviesFetch = () => ({
  type: MOVIES_FETCH
});

export const moviesFetchFullfilled = (movies) => ({
  type: MOVIES_FETCH_FULLFILLED,
  payload: movies
});

export const moviesFetchCancel = () => ({
  type: MOVIES_FETCH_CANCEL
});

export const moviesFetchRejected = (err) => ({
  type: MOVIES_FETCH_REJECTED,
  payload: err,
  error: true
});

export const popular = () => ({
  type: POPULAR
});

export const topRated = () => ({
  type: TOP_RATED
});

export const upcoming = () => ({
  type: UPCOMING
});

export const nowPlaying = () => ({
  type: NOW_PLAYING
});

export default {
  moviesFetch,
  moviesFetchFullfilled,
  moviesFetchCancel,
  moviesFetchRejected,

  popular,
  topRated,
  upcoming,
  nowPlaying
}


