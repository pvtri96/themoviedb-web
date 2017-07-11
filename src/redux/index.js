import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunkMiddleware from 'redux-thunk';
import rootReducer from './rootReducer';
import { TVSHOWS_INITIAL_STATE, TVSHOWS_KEY } from './tvshows/list';
import { DETAILS_INITIAL_STATE, DETAILS_KEY } from './detail';
import { FILTER_INITIAL_STATE, FILTER_KEY } from './filter';
import { movieListINITIAL_STATE, movieListKEY} from './movies/movieList';
import { movieINITIAL_STATE, movieKEY} from './movies/movie';

const INITIAL_STATE = {
  [TVSHOWS_KEY]: TVSHOWS_INITIAL_STATE,
  [DETAILS_KEY]: DETAILS_INITIAL_STATE,
  [FILTER_KEY]: FILTER_INITIAL_STATE,
  [movieListKEY]: movieListINITIAL_STATE,
  [movieKEY]: movieINITIAL_STATE
};

const middleware = applyMiddleware(thunkMiddleware);

export const getStore = (initialState = INITIAL_STATE) => (
  createStore(rootReducer, initialState, composeWithDevTools(middleware))
);

export default {
  getStore
};
