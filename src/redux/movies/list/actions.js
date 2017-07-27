import axios from 'axios';
import actionCreators from './actionCreators';
import actionTypes from './actionTypes';

export const fetchCurrentMovie = (current) => (dispatch) => {
  dispatch(actionCreators.currentFetchRequested());
  try {
    return dispatch(actionCreators.currentFetchFullfilled(current));
  } catch (error) {
    return dispatch(actionCreators.currentFetchRejected(error));
  }
};

export const fetchMoviePopular = () => async (dispatch) => {
  dispatch(actionCreators.moviesFetchRequested());
  try {
    const movies = await axios.get(process.env.API_URL + 'movie/' + actionTypes.POPULAR , {
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

export const fetchMovieTopRated = () => async (dispatch) => {
  dispatch(actionCreators.moviesFetchRequested());
  try {
    const movies = await axios.get(process.env.API_URL + 'movie/' + actionTypes.TOP_RATED , {
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

export const fetchMovieUpComing = () => async (dispatch) => {
  dispatch(actionCreators.moviesFetchRequested());
  try {
    const movies = await axios.get(process.env.API_URL + 'movie/' + actionTypes.UPCOMING , {
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

export const fetchMovieNowPlaying = () => async (dispatch) => {
  dispatch(actionCreators.moviesFetchRequested());
  try {
    const movies = await axios.get(process.env.API_URL + 'movie/' + actionTypes.NOW_PLAYING , {
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
  fetchMoviePopular,
  fetchMovieTopRated,
  fetchMovieUpComing,
  fetchMovieNowPlaying,
  fetchGenres,
  fetchCurrentMovie
};
