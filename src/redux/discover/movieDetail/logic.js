import {createLogic} from 'redux-logic';
import actionTypes from './actionTypes';
import actionCreators from './actionCreators';

const searchUrl = "https://api.themoviedb.org/3/movie/";
export const movieDetailFetchLogic = createLogic ({
  type: actionTypes.MOVIE_DETAIL_FETCH,
  cancelType: actionTypes.MOVIE_DETAIL_FETCH_CANCEL,
  latest: true,

  async process ({http,action}, dispatch, done){
    console.log(searchUrl+action.payload+"?api_key=16e5e30b4fc471b65e708e2070c257d4&language=en-US");
    try {
      const movieDetail = await http.get(searchUrl+action.payload+"?api_key=16e5e30b4fc471b65e708e2070c257d4&language=en-US")
                            .then(response => response.data);
      dispatch(actionCreators.movieDetailFetchFulfilled(movieDetail));
    } catch (err) {
      console.error(err);
      dispatch(actionCreators.movieDetailFetchRejected(err));
    }
    done();
  }
});

export default [
  movieDetailFetchLogic
];
