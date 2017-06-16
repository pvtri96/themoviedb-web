import { combineReducers } from 'redux';
import { usersReducer, USERS_KEY } from './users';

export default combineReducers({
  [USERS_KEY]: usersReducer //Remove if no need
});
