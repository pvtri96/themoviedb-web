import { createLogic } from 'redux-logic';
import actionTypes from './actionTypes';
import actionCreators from './actionCreators';
import moduleName from '../../components/list/Movie';

export const moviesFetchLogic = createLogic({
  type: actionTypes.DETAIL_FETCH,
  cancelType: actionTypes.DETAIL_FETCH_CANCEL,
  latest: true, // take latest only

  // use axios injected as http from configureStore logic deps
  // we also have access to getState and action in the first argument
  // but they were not needed for this particular code
  async process({ http,action }, dispatch, done) {
    try {
      // the delay query param adds arbitrary delay to the response
      const movieDetails = await http.get(process.env.MOVIE_URL + action.payload + "?api_key=" + process.env.API_KEY)
                        .then(response => response.data); // use data property of payload
      dispatch(actionCreators.detailFetchFulfilled(movieDetails));
    } catch(err) {
      console.error(err); //
      dispatch(actionCreators.detailFetchRejected(err));
    }
    done(); // call when finished dispatching
  }

});

export default [
  moviesFetchLogic
];
