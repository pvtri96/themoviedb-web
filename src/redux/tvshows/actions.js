import axios from 'axios';
import actionCreators from './actionCreators';


export const fetchData = () => async (dispatch) => {
  dispatch(actionCreators.dataFetchRequested());
  try {
    const data = await axios.get(process.env.TV_SHOW_URL + 'popular', {
      params: {
        api_key: process.env.API_KEY
      }
    }).then(response => response.data.results);
    const genres = await axios.get(process.env.GENRES_URL + 'genre/tv/list', {
      params: {
        api_key: process.env.API_KEY
      }
    }).then(response => response.data.genres);
    return dispatch(actionCreators.dataFetchFulfilled(data,genres));
  }
  catch (err) {
    return dispatch(actionCreators.dataFetchRejected(err));
  }
};

export default {
  fetchData
};
