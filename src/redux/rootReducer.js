import { combineReducers } from 'redux';
import UsersReducer from './Users/reducer';

export default combineReducers({
  users: UsersReducer //Remove if no need
});
