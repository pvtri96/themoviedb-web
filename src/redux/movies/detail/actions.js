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
export const fetchCredits = (id) => async (dispatch) => {
  dispatch(actionCreators.creditsFetchRequested());
  try {
    const credits = await axios.get(process.env.API_URL + 'movie/' + id + '/credits', {
      params: {
        api_key: process.env.API_KEY
      }
    })
      .then(resp => resp.data);
      // get credits
    return dispatch(actionCreators.creditsFetchFullfilled(credits));
  } catch(error) {
    return dispatch(actionCreators.creditsFetchRejected(error));
  }
};

// fetch reviews from API
export const fetchReviews = (id) => async (dispatch) => {
  dispatch(actionCreators.reviewsFetchRequested());
  try {
    const reviews = await axios.get(process.env.API_URL + 'movie/' + id + '/reviews', {
      params: {
        api_key: process.env.API_KEY
      }
    })
      .then(resp => resp.data.results);
      // get reviews
    return dispatch(actionCreators.reviewsFetchFullfilled(reviews));
  } catch(error) {
    return dispatch(actionCreators.reviewsFetchRejected(error));
  }
};

// fetch recommendations from API
export const fetchRecommendations = (id) => async (dispatch) => {
  dispatch(actionCreators.recommendationsFetchRequested());
  try {
    const recommendations = await axios.get(process.env.API_URL + 'movie/' + id + '/recommendations', {
      params: {
        api_key: process.env.API_KEY
      }
    })
      .then(resp => resp.data.results);
      // get recommendations
    return dispatch(actionCreators.recommendationsFetchFullfilled(recommendations));
  } catch(error) {
    return dispatch(actionCreators.recommendationsFetchRejected(error));
  }
};

// fetch release dates from API
export const fetchReleaseDates = (id) => async (dispatch) => {
  dispatch(actionCreators.releaseDatesFetchRequested());
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
    return dispatch(actionCreators.releaseDatesFetchFullfilled(releaseDates));
  } catch(error) {
    return dispatch(actionCreators.releaseDatesFetchRejected(error));
  }
};

// fetch keywords from API
export const fetchKeywords = (id) => async (dispatch) => {
  dispatch(actionCreators.keywordsFetchRequested());
  try {
    const keywords = await axios.get(process.env.API_URL + 'movie/' + id + '/keywords', {
      params: {
        api_key: process.env.API_KEY
      }
    })
      .then(resp => resp.data.keywords);
      // keywords
    return dispatch(actionCreators.keywordsFetchFullfilled(keywords));
  } catch(error) {
    return dispatch(actionCreators.keywordsFetchRejected(error));
  }
};

// fetch images from API
export const fetchImages = (id) => async (dispatch) => {
  dispatch(actionCreators.imagesFetchRequested());
  try {
    const images = await axios.get(process.env.API_URL + 'movie/' + id + '/images', {
      params: {
        api_key: process.env.API_KEY
      }
    })
      .then(resp => resp.data);
      // images
    return dispatch(actionCreators.imagesFetchFullfilled(images));
  } catch(error) {
    return dispatch(actionCreators.imagesFetchRejected(error));
  }
};

// fetch videos from API
export const fetchVideos = (id) => async (dispatch) => {
  dispatch(actionCreators.videosFetchRequested());
  try {
    const videos = await axios.get(process.env.API_URL + 'movie/' + id + '/videos', {
      params: {
        api_key: process.env.API_KEY
      }
    })
      .then(resp => resp.data.results);
      // videos
    return dispatch(actionCreators.videosFetchFullfilled(videos));
  } catch(error) {
    return dispatch(actionCreators.videosFetchRejected(error));
  }
};





export default {
  fetchMovieDetail,
  fetchCredits,
  fetchReviews,
  fetchRecommendations,
  fetchReleaseDates,
  fetchKeywords,
  fetchImages,
  fetchVideos,


};
