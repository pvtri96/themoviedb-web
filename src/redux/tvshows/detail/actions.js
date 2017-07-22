import axios from 'axios'  ;

import actionCreators from './actionCreators';


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


// fetch recommendations from API
export const fetchRecommendations = (id) => async (dispatch) => {
  dispatch(actionCreators.recommendationsFetchRequested());
  try {
    const recommendations = await axios.get(process.env.API_URL + 'tv/' + id + '/recommendations', {
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


// fetch keywords from API
export const fetchKeywords = (id) => async (dispatch) => {
  dispatch(actionCreators.keywordsFetchRequested());
  try {
    const keywords = await axios.get(process.env.API_URL + 'tv/' + id + '/keywords', {
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
    const images = await axios.get(process.env.API_URL + 'tv/' + id + '/images', {
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
    const videos = await axios.get(process.env.API_URL + 'tv/' + id + '/videos', {
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
  fetchTvshowDetail,
  fetchCredits,
  fetchRecommendations,
  fetchKeywords,
  fetchImages,
  fetchVideos,

};
