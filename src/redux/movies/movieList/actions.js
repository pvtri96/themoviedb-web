import axios from 'axios';
import actionCreators from './actionCreators';

export const fetchMovies = () => async (action, dispatch) => {
  dispatch(actionCreators.moviesFetchRequested());
  try {
    const movies = await axios.get(process.env.MOVIE_URL + action.payload + '?api_key=' + process.env.API_KEY)
      .then(resp => resp.data.results);
    return dispatch(actionCreators.moviesFetchFullfilled(movies));
  } catch (error) {
    return dispatch(actionCreators.moviesFetchRejected(error));
  }
};

export default {
  fetchMovies
};
