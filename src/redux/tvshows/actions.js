import axios from 'axios';
import actionCreators from './actionCreators';


export const fetchTvShows = () => async (dispatch) => {
  dispatch(actionCreators.tvshowsFetchRequested());
  try {
    const tvshows = await axios.get(process.env.TV_SHOW_URL + 'popular', {
      params: {
        api_key: process.env.API_KEY
      }
    })
      .then(response => response.data.results);
    const genres = await axios.get(process.env.GENRES_URL + 'genre/tv/list', {
      params: {
        api_key: process.env.API_KEY
      }
    });
    return dispatch(actionCreators.tvshowsFetchFulfilled(tvshows,genres));
  }
  catch (err) {
    return dispatch(actionCreators.tvshowsFetchRejected(err));
  }
};

export default {
  fetchTvShows
};
