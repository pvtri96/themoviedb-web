import { combineReducers } from 'redux';

import { movieListReducer, movieListKEY} from './movies/list';
import { movieReducer, movieKEY} from './movies/detail';
import { tvshowsReducer, TVSHOWS_KEY} from './tvshows/list';
import { filterReducer, FILTER_KEY } from './filter';
import { tvshowReducer, TVSHOW_KEY} from './tvshows/detail';

export default combineReducers({
  [TVSHOWS_KEY]: tvshowsReducer,
  [TVSHOW_KEY]: tvshowReducer,
  [FILTER_KEY]: filterReducer,
  [movieListKEY]: movieListReducer,
  [movieKEY]: movieReducer
});
