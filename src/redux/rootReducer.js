import { combineReducers } from 'redux';
import { usersReducer, KEY as USERS_KEY } from './users';
import { moviesReducer, KEY as MOVIES_KEY} from './movies';
import { detailReducer, KEY as DETAILS_KEY} from './details';

export default combineReducers({
  [USERS_KEY]: usersReducer, //Remove if no need
  [MOVIES_KEY]: moviesReducer,
  [DETAILS_KEY]: detailReducer
});
