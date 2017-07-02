import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunkMiddleware from 'redux-thunk';
import rootReducer from './rootReducer';
import { USERS_INITIAL_STATE, USERS_KEY } from './users';
import { MOVIES_INITIAL_STATE, MOVIES_KEY } from './discover/movie';
import {MOVIES_DETAIL_INITIAL_STATE, MOVIE_DETAIL_KEY} from './discover/movieDetail';
import { movieListINITIAL_STATE, movieListKEY} from './movies/movieList';
import { movieINITIAL_STATE, movieKEY} from './movies/movie';
const INITIAL_STATE = {
  [movieListKEY]: movieListINITIAL_STATE,
  [movieKEY]: movieINITIAL_STATE,
  [USERS_KEY]: USERS_INITIAL_STATE,
  [MOVIES_KEY]: MOVIES_INITIAL_STATE,
  [MOVIE_DETAIL_KEY]: MOVIES_DETAIL_INITIAL_STATE

};

const middleware = applyMiddleware(thunkMiddleware);

export const getStore = (initialState = INITIAL_STATE) => (
  createStore(rootReducer, initialState, composeWithDevTools(middleware))
);

export default {
  getStore
};
