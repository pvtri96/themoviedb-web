import { combineReducers } from 'redux';
import { tvshowsReducer, TVSHOWS_KEY} from './tvshows/list';
import { detailsReducer, DETAILS_KEY} from './detail';
import { filterReducer, FILTER_KEY } from './filter';
import { movieListReducer, movieListKEY} from './movies/movieList';
import { movieReducer, movieKEY} from './movies/movie';

export default combineReducers({
  [TVSHOWS_KEY]: tvshowsReducer,
  [DETAILS_KEY]: detailsReducer,
  [FILTER_KEY]: filterReducer,
  [movieListKEY]: movieListReducer,
  [movieKEY]: movieReducer
});
