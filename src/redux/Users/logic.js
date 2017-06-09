import { createLogic } from 'redux-logic';
import {
  USERS_FETCH,
  USERS_FETCH_CANCEL
} from './actions';
import {
  usersFetchFulfilled,
  usersFetchRejected
} from './actionCreators';

export const usersFetchLogic = createLogic({
  type: USERS_FETCH,
  cancelType: USERS_FETCH_CANCEL,
  latest: true, // take latest only

  // use axios injected as http from configureStore logic deps
  // we also have access to getState and action in the first argument
  // but they were not needed for this particular code
  async process({ http }, dispatch, done) {
    try {
      // the delay query param adds arbitrary delay to the response
      const users = await http.get(`https://jsonplaceholder.typicode.com/users`)
                        .then(response => response.data); // use data property of payload
      dispatch(usersFetchFulfilled(users));
    } catch(err) {
      console.error(err); //
      dispatch(usersFetchRejected(err));
    }
    done(); // call when finished dispatching
  }
});

export default [
  usersFetchLogic
];
