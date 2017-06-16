import {createLogic} from 'redux-logic';
import actionTypes from './actionTypes';
import actionCreators from './actionCreators';

export const moviesFetchLogic = createLogic({
  type: actionTypes.MOVIES_FETCH,
  cancelType: actionTypes.MOVIES_FETCH_CANCEL,
  latest: true,

  async process({http}, dispatch, done){
    try{
      const movies = await http.get(process.env.DISCOVER_MOVIES_URL)
                          .then(response => response.data.results);  // use data property of payload
      dispatch(actionCreators.moviesFetchFulfilled(movies));
    } catch (err){
      console.error(err);
      dispatch(actionCreators.moviesFetchRejected(err));
    }
    done(); // call when finish dispatching
  }
});

export default [
  moviesFetchLogic
];
