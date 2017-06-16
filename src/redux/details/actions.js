import axios from 'axios';
import actionCreators from './actionCreators';


export const fetchDetails = (id) => async (dispatch) => {
  dispatch(actionCreators.detailFetchRequested());
  try {
    const tvshowsDetails = await axios.get(process.env.TV_SHOW_URL + id , {
      params: {
        api_key: process.env.API_KEY
      }
    })
      .then(response => response.data);
    return dispatch(actionCreators.detailFetchFulfilled(tvshowsDetails));
  }
  catch (err) {
    return dispatch(actionCreators.detailFetchRejected(err));
  }
};
export default {
  fetchDetails
};
