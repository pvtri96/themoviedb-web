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

  async process({ http, action}, dispatch, done) {
    // console.log(action);
    try {
      const movies = await http.get(process.env.MOVIE_URL + action.payload + '?api_key=' + process.env.API_KEY)
      .then(res => res.data.results)
      .then(list => dispatch(moviesFetchFullfilled(list)));

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
