import { combineReducers } from 'redux';
import { movieListReducer, movieListKEY} from './movies/list';
import { movieReducer, movieKEY} from './movies/detail';

export default combineReducers({
  [movieListKEY]: movieListReducer,
  [movieKEY]: movieReducer
});
