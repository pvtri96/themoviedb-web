import { combineReducers } from 'redux';
import { usersReducer,  USERS_KEY } from './users';
import { tvshowsReducer, TVSHOWS_KEY} from './tvshows';
import { detailsReducer, DETAILS_KEY} from './detail';
import { filterReducer, FILTER_KEY } from './filter';
import { movieListReducer, movieListKEY} from './movies/movieList';
import { movieReducer, movieKEY} from './movies/movie';

export default combineReducers({
  [USERS_KEY]: usersReducer, //Remove if no need
  [TVSHOWS_KEY]: tvshowsReducer,
  [DETAILS_KEY]: detailsReducer,
  [FILTER_KEY]: filterReducer,
  [movieListKEY]: movieListReducer,
  [movieKEY]: movieReducer
});
