import axios from 'axios';
import {
  usersFetchRequested,
  usersFetchFulfilled,
  usersFetchRejected
} from './actionCreators';

const API_URL = 'https://jsonplaceholder.typicode.com/users';

// Use async await
export const fetchUsers = () => async (dispatch) => {
  //console.log(dispatch);
  //Dispath user fetch
  dispatch(usersFetchRequested());
  try {
    const users = await axios.get(API_URL).then(response => response.data);
    return dispatch(usersFetchFulfilled(users));
  }
  catch (err) {
    return dispatch(usersFetchRejected(err));
  }
};

export default {
  fetchUsers
};
