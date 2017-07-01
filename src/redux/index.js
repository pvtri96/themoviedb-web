import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunkMiddleware from 'redux-thunk';
import rootReducer from './rootReducer';
import { PEOPLE_INITIAL_STATE, PEOPLE_KEY } from './people';
import { PERSON_INITIAL_STATE, PERSON_KEY } from './person';
import { movieListINITIAL_STATE, movieListKEY} from './movies/movieList';
import { movieINITIAL_STATE, movieKEY} from './movies/movie';

const INITIAL_STATE = {
  [PEOPLE_KEY]: PEOPLE_INITIAL_STATE,
  [PERSON_KEY]: PERSON_INITIAL_STATE,
  [movieListKEY]: movieListINITIAL_STATE,
  [movieKEY]: movieINITIAL_STATE
};


const middleware = applyMiddleware(thunkMiddleware);

export const getStore = (initialState = INITIAL_STATE) => (
  createStore(rootReducer, initialState, composeWithDevTools(middleware))
);

export default {
  getStore
};
