import { combineReducers } from 'redux';
import { usersReducer,  USERS_KEY } from './users';
import { tvshowsReducer, TVSHOWS_KEY} from './tvshows';
import { detailsReducer, DETAILS_KEY} from './details';

export default combineReducers({
  [USERS_KEY]: usersReducer, //Remove if no need
  [TVSHOWS_KEY]: tvshowsReducer,
  [DETAILS_KEY]: detailsReducer
});
