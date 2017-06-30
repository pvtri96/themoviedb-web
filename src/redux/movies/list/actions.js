import axios from 'axios';
import actionCreators from './actionCreators';

export const fetchCurrentMovie = (current) => (dispatch) => {
  dispatch(actionCreators.currentFetchRequested());
  try {
    return dispatch(actionCreators.currentFetchFullfilled(current));
  } catch (error) {
    return dispatch(actionCreators.currentFetchRejected(error));
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

    return dispatch(actionCreators.moviesFetchFullfilled(movies));
  } catch (error) {
    return dispatch(actionCreators.moviesFetchRejected(error));
  }
};

export const fetchGenres = () => async (dispatch) => {
  dispatch(actionCreators.genresFetchRequested());
  try {
    const genres = await axios.get(process.env.API_URL + 'genre/movie/list' , {
      params: {
        api_key: process.env.API_KEY
      }
    })
      .then(resp => resp.data.genres);
    return dispatch(actionCreators.genresFetchFullfilled(genres));
  } catch (error) {
    return dispatch(actionCreators.genresFetchRejected(error));
  }
};


export default {
  fetchMovies,
  fetchGenres,
  fetchCurrentMovie
};
