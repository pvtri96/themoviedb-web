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
    return dispatch(actionCreators.movieDetailFetchFullfilled(detail));
  } catch(error) {
    return dispatch(actionCreators.movieDetailFetchRejected(error));
  }
};

export default {
  fetchMovieDetail
};
