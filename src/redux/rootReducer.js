import { combineReducers } from 'redux';
import { usersReducer, USERS_KEY } from './users';
import {moviesReducer, MOVIES_KEY} from './discover/movie';

export default combineReducers({
  [USERS_KEY]: usersReducer, //Remove if no need
  [MOVIES_KEY]: moviesReducer
});
