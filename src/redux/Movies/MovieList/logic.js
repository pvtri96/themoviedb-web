import { createLogic } from 'redux-logic';
import actionTypes from './actionTypes'

import {
  moviesFetchFullfilled,
  moviesFetchRejected
} from './actionCreators';

export const moviesFetchLogic = createLogic({
  type: actionTypes.MOVIES_FETCH,
  cancelType: actionTypes.MOVIES_FETCH_CANCEL,
  latest: true,

  async process({ http, getState, action}, dispatch, done) {
    // console.log(action);
    try {
      //const movies = MoviesListFilteringActionCreators.getMovies(POPULAR);
      // const movies = await http.get('https://api.themoviedb.org/3/movie/popular/?api_key=80654656c6586a0c705642639595a994&language=en-US&page=1')
      const movies = await http.get(process.env.MOVIE_URL + 'popular' + '?api_key=' + process.env.API_KEY)
      .then(res => res.data.results)
      .then(results => dispatch(moviesFetchFullfilled(results)));

      // console.log(movies);
    } catch (err) {
      console.log(err);
      dispatch(moviesFetchRejected(err));
    }
    done();
  }
});

export default [
  moviesFetchLogic
];
