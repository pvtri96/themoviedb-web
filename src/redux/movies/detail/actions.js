import axios from 'axios'  ;

import actionCreators from './actionCreators';

// fetch movie detail from API
export const fetchMovieDetail = (id) => async (dispatch) => {
  dispatch(actionCreators.movieDetailFetchRequested());
  try {
    const detail = await axios.get(process.env.API_URL + 'movie/' + id, {
      params: {
        api_key: process.env.API_KEY,
      }
    })
      .then(resp => resp.data);
      //get detail
    return dispatch(actionCreators.movieDetailFetchFullfilled(detail));
  } catch(error) {
    return dispatch(actionCreators.movieDetailFetchRejected(error));
  }
};

// fetch credits from API
export const fetchMovieCredits = (id) => async (dispatch) => {
  dispatch(actionCreators.movieCreditsFetchRequested());
  try {
    const credits = await axios.get(process.env.API_URL + 'movie/' + id + '/credits', {
      params: {
        api_key: process.env.API_KEY
      }
    })
      .then(resp => resp.data);
      // get credits
    return dispatch(actionCreators.movieCreditsFetchFullfilled(credits));
  } catch(error) {
    return dispatch(actionCreators.movieCreditsFetchRejected(error));
  }
};

// fetch reviews from API
export const fetchMovieReviews = (id) => async (dispatch) => {
  dispatch(actionCreators.movieReviewsFetchRequested());
  try {
    const reviews = await axios.get(process.env.API_URL + 'movie/' + id + '/reviews', {
      params: {
        api_key: process.env.API_KEY
      }
    })
      .then(resp => resp.data.results);
      // get reviews
    return dispatch(actionCreators.movieReviewsFetchFullfilled(reviews));
  } catch(error) {
    return dispatch(actionCreators.movieReviewsFetchRejected(error));
  }
};

// fetch recommendations from API
export const fetchMovieRecommendations = (id) => async (dispatch) => {
  dispatch(actionCreators.movieRecommendationsFetchRequested());
  try {
    const recommendations = await axios.get(process.env.API_URL + 'movie/' + id + '/recommendations', {
      params: {
        api_key: process.env.API_KEY
      }
    })
      .then(resp => resp.data.results);
      // get recommendations
    return dispatch(actionCreators.movieRecommendationsFetchFullfilled(recommendations));
  } catch(error) {
    return dispatch(actionCreators.movieRecommendationsFetchRejected(error));
  }
};

// fetch release dates from API
export const fetchMovieReleaseDates = (id) => async (dispatch) => {
  dispatch(actionCreators.movieReleaseDatesFetchRequested());
  try {
    const releaseDates = await axios.get(process.env.API_URL + 'movie/' + id + '/release_dates', {
      params: {
        api_key: process.env.API_KEY
      }
    })
      .then(resp => resp.data.results)
      .then(temp => temp.filter(t => t.iso_3166_1 === "US" ))
      .then(temp => temp[0].release_dates);
      // get releaseDates
    return dispatch(actionCreators.movieReleaseDatesFetchFullfilled(releaseDates));
  } catch(error) {
    return dispatch(actionCreators.movieRecommendationsFetchRejected(error));
  }
};

// fetch keywords from API
export const fetchMovieKeywords = (id) => async (dispatch) => {
  dispatch(actionCreators.movieKeywordsFetchRequested());
  try {
    const keywords = await axios.get(process.env.API_URL + 'movie/' + id + '/keywords', {
      params: {
        api_key: process.env.API_KEY
      }
    })
      .then(resp => resp.data.keywords);
      // keywords
    return dispatch(actionCreators.movieKeywordsFetchFullfilled(keywords));
  } catch(error) {
    return dispatch(actionCreators.movieKeywordsFetchRejected(error));
  }
};

// fetch images from API
export const fetchMovieImages = (id) => async (dispatch) => {
  dispatch(actionCreators.movieImagesFetchRequested());
  try {
    const images = await axios.get(process.env.API_URL + 'movie/' + id + '/images', {
      params: {
        api_key: process.env.API_KEY
      }
    })
      .then(resp => resp.data);
      // images
    return dispatch(actionCreators.movieImagesFetchFullfilled(images));
  } catch(error) {
    return dispatch(actionCreators.movieImagesFetchRejected(error));
  }
};

// fetch videos from API
export const fetchMovieVideos = (id) => async (dispatch) => {
  dispatch(actionCreators.movieVideosFetchRequested());
  try {
    const videos = await axios.get(process.env.API_URL + 'movie/' + id + '/videos', {
      params: {
        api_key: process.env.API_KEY
      }
    })
      .then(resp => resp.data.results);
      // videos
    return dispatch(actionCreators.movieVideosFetchFullfilled(videos));
  } catch(error) {
    return dispatch(actionCreators.movieVideosFetchRejected(error));
  }
};





export default {
  fetchMovieDetail,
  fetchMovieCredits,
  fetchMovieReviews,
  fetchMovieRecommendations,
  fetchMovieReleaseDates,
  fetchMovieKeywords,
  fetchMovieImages,
  fetchMovieVideos,


};
