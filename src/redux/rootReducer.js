import { combineReducers } from 'redux';
import { usersReducer, KEY } from './users';
import {moviesReducer, MOVIES_KEY} from './discover/movie';

export default combineReducers({
  [KEY]: usersReducer, //Remove if no need
  [MOVIES_KEY]: moviesReducer
});
