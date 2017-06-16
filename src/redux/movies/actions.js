import axios from 'axios';
import actionCreators from './actionCreators';


export const fetchMovies = () => async (dispatch) => {
  dispatch(actionCreators.moviesFetchRequested());
  try {
    const movies = await axios.get(process.env.MOVIE_URL + 'popular?api_key=' + process.env.API_KEY)
      .then(response => response.data.results);
    return dispatch(actionCreators.moviesFetchFulfilled(movies));
  }
  catch (err) {
    return dispatch(actionCreators.moviesFetchRejected(err));
  }
};
export default {
  fetchMovies
};
