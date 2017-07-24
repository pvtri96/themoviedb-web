import axios from 'axios';
import actionCreators from './actionCreators';
import actionTypes from './actionTypes';

export const fetchTVshowPopular = () => async (dispatch) => {
  dispatch(actionCreators.tvshowsFetchRequested());
  try {
    const tvshow = await axios.get(process.env.TV_SHOW_URL + actionTypes.POPULAR , {
      params: {
        api_key: process.env.API_KEY
      }
    }).then(response => response.data.results);const genres = await axios.get(process.env.API_URL + 'genre/tv/list', {
      params: {
        api_key: process.env.API_KEY
      }
    }).then(response => response.data.genres);
    return dispatch(actionCreators.tvshowsFetchFulfilled(tvshow,genres));
  }
  catch (err) {
    return dispatch(actionCreators.tvshowsFetchRejected(err));
  }
};

export const fetchTVshowTopRated = () => async (dispatch) => {
  dispatch(actionCreators.tvshowsFetchRequested());
  try {
    const tvshow = await axios.get(process.env.TV_SHOW_URL + actionTypes.TOP_RATED , {
      params: {
        api_key: process.env.API_KEY
      }
    }).then(response => response.data.results);
    const genres = await axios.get(process.env.API_URL + 'genre/tv/list', {
      params: {
        api_key: process.env.API_KEY
      }
    }).then(response => response.data.genres);
    return dispatch(actionCreators.tvshowsFetchFulfilled(tvshow,genres));
  }
  catch (err) {
    return dispatch(actionCreators.tvshowsFetchRejected(err));
  }
};

export const fetchTVshowOnTheAir = () => async (dispatch) => {
  dispatch(actionCreators.tvshowsFetchRequested());
  try {
    const tvshow = await axios.get(process.env.TV_SHOW_URL + actionTypes.ON_THE_AIR , {
      params: {
        api_key: process.env.API_KEY
      }
    }).then(response => response.data.results);
    const genres = await axios.get(process.env.API_URL + 'genre/tv/list', {
      params: {
        api_key: process.env.API_KEY
      }
    }).then(response => response.data.genres);
    return dispatch(actionCreators.tvshowsFetchFulfilled(tvshow,genres));
  }
  catch (err) {
    return dispatch(actionCreators.tvshowsFetchRejected(err));
  }
};

export default {
  fetchTVshowPopular,
  fetchTVshowTopRated,
  fetchTVshowOnTheAir
};
