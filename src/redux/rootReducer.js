import { combineReducers } from 'redux';

import { movieListReducer, movieListKEY} from './movies/list';
import { movieReducer, movieKEY} from './movies/detail';
import { tvshowsReducer, TVSHOWS_KEY} from './tvshows/list';
import { filterReducer, FILTER_KEY } from './filter';
import { menuReducer, MENU_KEY } from './menu';

export default combineReducers({
  [TVSHOWS_KEY]: tvshowsReducer,
  [FILTER_KEY]: filterReducer,
  [movieListKEY]: movieListReducer,
  [movieKEY]: movieReducer,
  [MENU_KEY]: menuReducer
});
