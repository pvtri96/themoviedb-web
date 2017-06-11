import { createLogic } from 'redux-logic';
import {
  PEOPLE_FETCH,
  PEOPLE_FETCH_CANCEL
} from './actions';

import {
  peopleFetchFulfilled,
  peopleFetchRejected
} from './actionCreators';

export const peopleFetchLogic = createLogic({
  type: PEOPLE_FETCH,
  cancelType: PEOPLE_FETCH_CANCEL,
  latest: true,

  async process({ http }, dispatch, done) {
    try {
      // the delay query param adds arbitrary delay to the response
      const users = await http.get(`https://api.themoviedb.org/3/person/popular?api_key=14240ace62bcafe15227f35ad9cd8580&language=en-US&page=1`)
                        .then(response => response.data.results); // use data property of payload
      dispatch(peopleFetchFulfilled(users));
    } catch(err) {
      console.error(err); //
      dispatch(peopleFetchRejected(err));
    }
    done(); // call when finished dispatching
  }
});

export default [
  peopleFetchLogic
];

