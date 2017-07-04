import { combineReducers } from 'redux';
import { peopleReducer, PEOPLE_KEY } from './people/peoplelist';
import { personReducer, PERSON_KEY } from './people/person';
//import { usersReducer, USERS_KEY } from './users';
import { movieListReducer, movieListKEY} from './movies/movieList';
import { movieReducer, movieKEY} from './movies/movie';

export default combineReducers({
  // [USERS_KEY]: usersReducer,
  [PEOPLE_KEY]: peopleReducer,
  [PERSON_KEY]: personReducer,
  [movieListKEY]: movieListReducer,
  [movieKEY]: movieReducer


});
