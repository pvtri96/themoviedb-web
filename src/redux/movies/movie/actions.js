import axios from 'axios'  ;

import actionCreators from './actionCreators';

export const fetchMovieDetail = (id) => async (dispatch) => {
  dispatch(actionCreators.movieDetailFetchRequested());
  try {
    const detail = await axios.get(process.env.API_URL + 'movie/' + id, {
      params: {
        api_key: process.env.API_KEY
      }
    })
      .then(resp => resp.data);
      //get detail
    const credits = await axios.get(process.env.API_URL + 'movie/' + id + '/credits', {
      params: {
        api_key: process.env.API_KEY
      }
    })
      .then(resp => resp.data);
      // get credits

    const reviews = await axios.get(process.env.API_URL + 'movie/' + id + '/reviews', {
      params: {
        api_key: process.env.API_KEY
      }
    })
      .then(resp => resp.data.results);
      // get reviews

    const videos = await axios.get(process.env.API_URL + 'movie/' + id + '/videos', {
      params: {
        api_key: process.env.API_KEY
      }
    })
      .then(resp => resp.data.results);
      //  get videos

    const recommendations = await axios.get(process.env.API_URL + 'movie/' + id + '/recommendations', {
      params: {
        api_key: process.env.API_KEY
      }
    })
      .then(resp => resp.data.results);

    return dispatch(actionCreators.movieDetailFetchFullfilled(detail, credits, reviews, videos, recommendations));
  } catch(error) {
    return dispatch(actionCreators.movieDetailFetchRejected(error));
  }
};

export default {
  fetchMovieDetail
};
