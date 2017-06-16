import { combineReducers } from 'redux';
// import { usersReducer, KEY } from './users';
import { movieListReducer, movieListKEY} from './movies/movieList';

export default combineReducers({
  // [KEY]: usersReducer //Remove if no need
  [movieListKEY]: movieListReducer
});
