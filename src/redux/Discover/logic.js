import {createLogic} from 'redux-logic';
import {MOVIES_FETCH, MOVIES_FETCH_CANCEL} from './actions';
import {moviesFetchFulfilled, moviesFetchRejected} from './actionCreators';

export const moviesFetchLogic = createLogic({
  type: MOVIES_FETCH,
  cancelType: MOVIES_FETCH_CANCEL,
  latest: true,

  async process({http}, dispatch, done){
    try{
      const movies = await http.get(process.env.DISCOVER_MOVIES_URL)
                          .then(response => response.data.results);  // use data property of payload
      dispatch(moviesFetchFulfilled(movies));
    } catch (err){
      console.error(err);
      dispatch(moviesFetchRejected(err));
    }
    done(); // call when finish dispatching
  }
});

export default [
  moviesFetchLogic
];
