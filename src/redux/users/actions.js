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

// More understanable example
// export const fetchUsers = () => {
//   return async (dispatch) => {
//     // To do here
//   };
// };

// Use promise
// export const fetchUsers = () => (dispatch) => {
//   //console.log(dispatch);
//   //Dispath user fetch
//   dispatch(usersFetchRequested());

//   return axios
//     .get(API_URL)
//     // Get response data
//     .then(response => response.data)
//     // Dispatch users data
//     .then(users => dispatch(usersFetchFulfilled(users)))
//     // Error catcher
//     .catch(err => dispatch(usersFetchRejected(err)));
// };

export default {
  fetchUsers
};
