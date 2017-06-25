import { combineReducers } from 'redux';
import { usersReducer, USERS_KEY } from './users';
import {moviesReducer, MOVIES_KEY} from './discover/movie';
import {movieDetailReducer, MOVIE_DETAIL_KEY} from './discover/movieDetail';

export default combineReducers({
  [USERS_KEY]: usersReducer, //Remove if no need
  [MOVIES_KEY]: moviesReducer,
  [MOVIE_DETAIL_KEY]: movieDetailReducer
});
