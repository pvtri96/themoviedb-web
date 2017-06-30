import { combineReducers } from 'redux';
import { movieListReducer, movieListKEY} from './movies/movieList';
import { movieReducer, movieKEY} from './movies/movie';

export default combineReducers({
  [movieListKEY]: movieListReducer,
  [movieKEY]: movieReducer
});
