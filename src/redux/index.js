import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunkMiddleware from 'redux-thunk';
import rootReducer from './rootReducer';
import { movieListINITIAL_STATE, movieListKEY} from './movies/list';
import { movieINITIAL_STATE, movieKEY} from './movies/detail';
const INITIAL_STATE = {
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
