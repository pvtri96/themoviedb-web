import actionTypes from './actionTypes';

export const tvshowsFetchRequested = () => ({
  type: actionTypes.TVSHOWS_FETCH_REQUESTED
});
export const tvshowsFetchFulfilled = ( tvshow, genres ) => ({
  type: actionTypes.TVSHOWS_FETCH_FULFILLED,
  payload: tvshow, genres
});

export const tvshowsFetchRejected = ( err ) => ({
  type: actionTypes.TVSHOWS_FETCH_REJECTED,
  payload: err,
  error: true
});

export default {
  tvshowsFetchRequested,
  tvshowsFetchFulfilled,
  tvshowsFetchRejected
};
