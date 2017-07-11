import axios from 'axios';
import actionCreators from './actionCreators';


export const fetchTVshow = () => async (dispatch) => {
  dispatch(actionCreators.tvshowsFetchRequested());
  try {
    const tvshow = await axios.get(process.env.TV_SHOW_URL + 'popular', {
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
  fetchTVshow
};
