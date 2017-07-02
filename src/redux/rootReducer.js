import { combineReducers } from 'redux';

import { usersReducer, USERS_KEY } from './users';
import {moviesReducer, MOVIES_KEY} from './discover/movie';
import {movieDetailReducer, MOVIE_DETAIL_KEY} from './discover/movieDetail';
import { movieListReducer, movieListKEY} from './movies/movieList';
import { movieReducer, movieKEY} from './movies/movie';

export default combineReducers({
  [movieListKEY]: movieListReducer,
  [movieKEY]: movieReducer,
  [USERS_KEY]: usersReducer, //Remove if no need
  [MOVIES_KEY]: moviesReducer,
  [MOVIE_DETAIL_KEY]: movieDetailReducer
});
