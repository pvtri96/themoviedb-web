import { createLogic } from 'redux-logic';
import {
  MOVIE_FETCH,
  MOVIE_FETCH_CANCEL
} from './Actions';
import {
  moviesFetchFulfilled,
  moviesFetchRejected
} from './ActionCreators';

export const moviesFetchLogic = createLogic({
  type: MOVIES_FETCH,
  cancelType: MOVIES_FETCH_CANCEL,
  latest: true, // take latest only

  // use axios injected as http from configureStore logic deps
  // we also have access to getState and action in the first argument
  // but they were not needed for this particular code
  async process({ http }, dispatch, done) {
    try {
      // the delay query param adds arbitrary delay to the response
      const movies = await http.get(`https://api.themoviedb.org/3/movie/popular?api_key=e1c2e1e415becaf826d5e1ee0b5f4792`)
                        .then(response => response.data); // use data property of payload
      dispatch(moviesFetchFulfilled(movies));
    } catch(err) {
      console.error(err); //
      dispatch(moviesFetchRejected(err));
    }
    done(); // call when finished dispatching
  }
});

export default [
  moviesFetchLogic
];
