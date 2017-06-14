export const INITIAL_STATE = {
  movies: [],
  fetchStatus :''
};

export const POPULAR = 'popular';

export const TOP_RATED = 'top_rated';

export const UPCOMING = 'upcoming';

export const NOW_PLAYING = 'now_playing';

export const MOVIES_FETCH = 'MOVIES_FETCH';

export const MOVIES_FETCH_FULLFILLED = 'MOVIES_FETCH_FULLFILLED';

export const MOVIES_FETCH_CANCEL = 'MOVIES_FETCH_CANCEL';

export const MOVIES_FETCH_REJECTED = 'MOVIES_FETCH_REJECTED';

export default {
  INITIAL_STATE,
  POPULAR,
  TOP_RATED,
  UPCOMING,
  NOW_PLAYING,

  MOVIES_FETCH,
  MOVIES_FETCH_FULLFILLED,
  MOVIES_FETCH_CANCEL,
  MOVIES_FETCH_REJECTED
}
