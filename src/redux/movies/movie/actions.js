import axios from 'axios'  ;

import actionCreators from './actionCreators';


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

    const releaseDates = await axios.get(process.env.API_URL + 'movie/' + id + '/release_dates', {
      params: {
        api_key: process.env.API_KEY
      }
    })
      .then(resp => resp.data.results)
      .then(temp => temp.filter(t => t.iso_3166_1 === "US" ))
      .then(temp => temp[0].release_dates);

      // get recommendations


    return dispatch(actionCreators.movieDetailFetchFullfilled(detail, credits,
      reviews, recommendations, releaseDates));
  } catch(error) {
    return dispatch(actionCreators.movieDetailFetchRejected(error));
  }
};



export default {
  fetchMovieDetail
}
