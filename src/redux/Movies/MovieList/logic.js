import { createLogic } from 'redux-logic';
import {
  MOVIES_FETCH,
  MOVIES_FETCH_CANCEL,
  POPULAR,
  TOP_RATED,
  NOW_PLAYING,
  UPCOMING
} from './actions';

import {

  moviesFetchFullfilled,
  moviesFetchRejected
} from './actionCreators';

export const moviesFetchLogic = createLogic({
  type: MOVIES_FETCH,
  cancelType: MOVIES_FETCH_CANCEL,
  latest: true,

  async process({ http, getState, action}, dispatch, done) {
    // console.log(action);
    try {
      //const movies = MoviesListFilteringActionCreators.getMovies(POPULAR);
      // const movies = await http.get('https://api.themoviedb.org/3/movie/popular/?api_key=80654656c6586a0c705642639595a994&language=en-US&page=1')
      const movies = await http.get(process.env.MOVIE_URL + POPULAR + '?api_key=' + process.env.API_KEY)
      .then(res => res.data.results)
      .then(results => dispatch(moviesFetchFullfilled(results)));

      // console.log(movies);
    } catch (err) {
      console.log(err);
    }
    done();
  }
});

export default [
  moviesFetchLogic
];
