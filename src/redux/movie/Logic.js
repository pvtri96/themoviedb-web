import { createLogic } from 'redux-logic';
import actionTypes from './actionTypes';
import actionCreators from './actionCreators';

export const moviesFetchLogic = createLogic({
  type: actionTypes.MOVIE_FETCH,
  cancelType: actionTypes.MOVIE_FETCH_CANCEL,
  latest: true, // take latest only

  // use axios injected as http from configureStore logic deps
  // we also have access to getState and action in the first argument
  // but they were not needed for this particular code
  async process({ http }, dispatch, done) {
    try {
      // the delay query param adds arbitrary delay to the response
      const movies = await http.get(process.env.MOVIE_URL + 'popular?api_key=' + process.env.API_KEY)
                        .then(response => response.data.results); // use data property of payload
      dispatch(actionCreators.moviesFetchFulfilled(movies));
    } catch(err) {
      console.error(err); //
      dispatch(actionCreators.moviesFetchRejected(err));
    }
    done(); // call when finished dispatching
  }

});

export default [
  moviesFetchLogic
];
