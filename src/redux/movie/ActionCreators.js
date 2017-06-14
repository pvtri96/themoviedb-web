import { MOVIE_FETCH,
  MOVIE_FETCH_CANCEL,
  MOVIE_FETCH_FULFILLED,
  MOVIE_FETCH_REJECTED
} from './Actions';

export const moviesFetch = () => ({ type: MOVIE_FETCH });
export const moviesFetchCancel = () => ({ type: MOVIE_FETCH_CANCEL });
export const moviesFetchFulfiller = ( movies ) => ({
  type: MOVIE_FETCH_FULFILLED,
  payload: movies
});

export const moviesFetchRejected = ( err ) => ({
  type: MOVIE_FETCH_REJECTED,
  payload: err,
  error: true
});

export default {
  moviesFetch,
  moviesFetchCancel,
  moviesFetchFulfiller,
  moviesFetchRejected
};
