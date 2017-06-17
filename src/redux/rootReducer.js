import { combineReducers } from 'redux';
import { peopleReducer, PEOPLE_KEY } from './people';
import { personReducer, PERSON_KEY } from './person';
//import { usersReducer, USERS_KEY } from './users';

export default combineReducers({
  // [USERS_KEY]: usersReducer,
  [PEOPLE_KEY]: peopleReducer,
  [PERSON_KEY]: personReducer
});
