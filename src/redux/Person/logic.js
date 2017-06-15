import { createLogic } from 'redux-logic';
import {
  PERSON_FETCH,
  PERSON_FETCH_CANCEL
} from './actions';
import {
  personFetchFulfilled,
  personFetchRejected
} from './actionCreators';
//`https://api.themoviedb.org/3/person/${pid}?api_key=14240ace62bcafe15227f35ad9cd8580`

export const personFetchLogic = createLogic({
  type: PERSON_FETCH,
  cancelType: PERSON_FETCH_CANCEL,
  latest: true,

  async process({ http, action }, dispatch, done) {
    try {
      const person = await http.get(process.env.GET_DETAIL_PERSON + action.payload + "?api_key=" + process.env.API_KEY)
                        .then(response => response.data); // use data property of payload
      dispatch(personFetchFulfilled(person));
    } catch(err) {
      console.error(err); //
      dispatch(personFetchRejected(err));
    }
    done(); // call when finished dispatching
  }
});

export default [
  personFetchLogic
];
