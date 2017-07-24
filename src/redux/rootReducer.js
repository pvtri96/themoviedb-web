import { combineReducers } from 'redux';

import { movieListReducer, movieListKEY} from './movies/list';
import { movieReducer, movieKEY} from './movies/detail';
import { tvshowsReducer, TVSHOWS_KEY} from './tvshows/list';
import { filterReducer, FILTER_KEY } from './filter';
import { tvshowReducer, TVSHOW_KEY} from './tvshows/detail';
import { menuReducer, MENU_KEY } from './menu';

export default combineReducers({
  [TVSHOWS_KEY]: tvshowsReducer,
  [TVSHOW_KEY]: tvshowReducer,
  [FILTER_KEY]: filterReducer,
  [movieListKEY]: movieListReducer,
  [movieKEY]: movieReducer,
  [MENU_KEY]: menuReducer
});
