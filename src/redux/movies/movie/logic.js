import { createLogic } from 'redux-logic';
import actionTypes from './actionTypes';
import actionCreators from './actionCreators';

export const movieFetchLogic = createLogic ({
  type: actionTypes.MOVIE_DETAIL_FETCH,
  cancelType: actionTypes.MOVIE_DETAIL_FETCH_CANCEL,
  latest: true,

  async process({ http ,action}, dispatch , done)  {
    try {
      await http.get(process.env.MOVIE_URL + action.payload + "?api_key=" + process.env.API_KEY)
      .then(res => res.data)
      .then(movie => dispatch(actionCreators.movieDetailFetchFullfilled(movie)))
    } catch (err) {
      dispatch(actionCreators.movieDetailFetchReject(err));
    }

    done();
  }
});

export default [
  movieFetchLogic
];
