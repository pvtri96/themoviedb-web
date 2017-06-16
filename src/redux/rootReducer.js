import { combineReducers } from 'redux';
import { usersReducer, KEY } from './users';

export default combineReducers({
  [KEY]: usersReducer //Remove if no need
});
