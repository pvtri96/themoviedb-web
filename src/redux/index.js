import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunkMiddleware from 'redux-thunk';
import rootReducer from './rootReducer';


import { movieListINITIAL_STATE, movieListKEY} from './movies/list';
import { movieINITIAL_STATE, movieKEY} from './movies/detail';
import { TVSHOWS_INITIAL_STATE, TVSHOWS_KEY } from './tvshows/list';
import { FILTER_INITIAL_STATE, FILTER_KEY } from './filter';
import { MENU_INITIAL_STATE, MENU_KEY } from './menu';

const INITIAL_STATE = {
  [TVSHOWS_KEY]: TVSHOWS_INITIAL_STATE,
  [FILTER_KEY]: FILTER_INITIAL_STATE,
  [movieListKEY]: movieListINITIAL_STATE,
  [movieKEY]: movieINITIAL_STATE,
  [MENU_KEY]: MENU_INITIAL_STATE
};

const middleware = applyMiddleware(thunkMiddleware);

export const getStore = (initialState = INITIAL_STATE) => (
  createStore(rootReducer, initialState, composeWithDevTools(middleware))
);

export default {
  getStore
};
