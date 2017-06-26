import axios from 'axios'  ;

import actionCreators from './actionCreators';

// payload: detail,
//   credits,
//   reviews,
//   recommendations

export const fetchMovieDetail = (id) => async (dispatch) => {
  dispatch(actionCreators.movieDetailFetchRequested());
  try {
    const detail = await axios.get(process.env.API_URL + 'movie/' + id, {
      params: {
        api_key: process.env.API_KEY,
        append_to_response: "videos,images"
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

    const recommendations = await axios.get(process.env.API_URL + 'movie/' + id + '/recommendations', {
      params: {
        api_key: process.env.API_KEY
      }
    })
      .then(resp => resp.data.results);
      // get recommendations

    return dispatch(actionCreators.movieDetailFetchFullfilled(detail, credits, reviews, recommendations));
  } catch(error) {
    return dispatch(actionCreators.movieDetailFetchRejected(error));
  }
};

export const fetchMovieCredits = (id) => async (dispatch) => {
  dispatch(actionCreators.movieDetailFetchRequested());
  const credits = await axios.get(process.env.API_URL + 'movie/' + id + '/credits', {
    params: {
      api_key: process.env.API_KEY
    }
  })
    .then(resp => resp.data);
    // get credits
  return dispatch(actionCreators.movieDetailFetchFullfilled([], credits, [], [] ));
};

export const fetchMovieReviews = (id) => async (dispatch) => {
  dispatch(actionCreators.movieDetailFetchRequested());
  const reviews = await axios.get(process.env.API_URL + 'movie/' + id + '/reviews', {
    params: {
      api_key: process.env.API_KEY
    }
  })
    .then(resp => resp.data.results);
    // get reviews
  return dispatch(actionCreators.movieDetailFetchFullfilled([], [], reviews, []));
};

export const fetchMovieRecommendations = (id) => async (dispatch) => {
  dispatch(actionCreators.movieDetailFetchRequested());
  const recommendations = await axios.get(process.env.API_URL + 'movie/' + id + '/recommendations', {
    params: {
      api_key: process.env.API_KEY
    }
  })
    .then(resp => resp.data.results);
    // get recommendations
  return dispatch(actionCreators.movieDetailFetchFullfilled([], [], [], recommendations));
};


export default {
  fetchMovieDetail,
  fetchMovieCredits,
  fetchMovieReviews,
  fetchMovieRecommendations
};
