import axios from 'axios';
import actionCreators from './actionCreators';


export const fetMoviesSR = (filter = 'popular') => async (dispatch) => {
  dispatch(actionCreators.moviesFetchRequested());
  try {
    const movies = await axios.get(process.env.API_URL + 'movie/' + filter , {
      params: {
        api_key: process.env.API_KEY
      }
    })
      .then(resp => resp.data.results);

    return dispatch(actionCreators.moviesFetchFullfilled(movies));
  } catch (error) {
    return dispatch(actionCreators.moviesFetchRejected(error));
  }
};

export const fetchMovies = (filter = 'popular') => async (dispatch) => {
  dispatch(actionCreators.moviesFetchRequested());
  try {
    const movies = await axios.get(process.env.API_URL + 'movie/' + filter , {
      params: {
        api_key: process.env.API_KEY
      }
    })
      .then(resp => resp.data.results);

    const genres = await axios.get(process.env.API_URL + 'genre/movie/list' , {
      params: {
        api_key: process.env.API_KEY
      }
    })
      .then(resp => resp.data.genres);
    return dispatch(actionCreators.moviesFetchFullfilled(movies,genres));
  } catch (error) {
    return dispatch(actionCreators.moviesFetchRejected(error));
  }
};


export default {
  fetchMovies,
  fetMoviesSR,
};
