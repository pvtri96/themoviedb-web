import axios from 'axios'  ;

import actionCreators from './actionCreators';


// fetch current tvshow transfered from tvshow list
export const fetchCurrentTvshow = (detail) => (dispatch) => {
  dispatch(actionCreators.tvshowDetailFetchRequested());
  try {
    return dispatch(actionCreators.tvshowDetailFetchFullfilled(detail));
  } catch(error) {
    return dispatch(actionCreators.tvshowDetailFetchRejected(error));
  }
};

// fetch tvshow detail from API
export const fetchTvshowDetail = (id) => async (dispatch) => {
  dispatch(actionCreators.tvshowDetailFetchRequested());
  try {
    const detail = await axios.get(process.env.API_URL + 'tv/' + id, {
      params: {
        api_key: process.env.API_KEY,
        append_to_response: "videos,images"
      }
    })
      .then(resp => resp.data);
      //get detail
    return dispatch(actionCreators.tvshowDetailFetchFullfilled(detail));
  } catch(error) {
    return dispatch(actionCreators.tvshowDetailFetchRejected(error));
  }
};

// fetch credits from API
export const fetchCredits = (id) => async (dispatch) => {
  dispatch(actionCreators.creditsFetchRequested());
  try {
    const credits = await axios.get(process.env.API_URL + 'tv/' + id + '/credits', {
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







export default {
  fetchMovieDetail,
  fetchCurrentMovie,
  fetchCredits,
  fetchReviews,
  fetchRecommendations,
  fetchReleaseDates,
  fetchKeywords,
};
