import { combineReducers } from 'redux';
import { usersReducer, KEY } from './users';
import { peopleReducer, KEY_PEOPLE } from './people';
import { personReducer, KEY_PERSON } from './person';

export default combineReducers({
  [KEY]: usersReducer, //Remove if no need
  [KEY_PEOPLE]: peopleReducer,
  [KEY_PERSON]: personReducer
});
