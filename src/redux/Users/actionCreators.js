import axios from 'axios';
import actionTypes from './actionTypes';

const API_URL = 'https://jsonplaceholder.typicode.com/users';

// action creators
const usersFetch = () => ({ type: actionTypes.USERS_FETCH });
const usersFetchFulfilled = (users) => ({
  type: actionTypes.USERS_FETCH_FULFILLED,
  payload: users
});
const usersFetchRejected = (err) => ({
  type: actionTypes.USERS_FETCH_REJECTED,
  payload: err,
  error: true
});

// actions
export const fetchUsers = () => async (dispatch) => {
  //console.log(dispatch);
  //Dispath user fetch
  dispatch(usersFetch());
  try {
    const users = await axios.get(API_URL).then(response => response.data);
    return dispatch(usersFetchFulfilled(users))
  }
  catch (err) {
    return dispatch(usersFetchRejected(err))
  }
};

export default {
  fetchUsers
};
