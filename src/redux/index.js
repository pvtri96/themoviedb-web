import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunkMiddleware from 'redux-thunk';
import rootReducer from './rootReducer';
import { USERS_INITIAL_STATE, USERS_KEY } from './users';
import { TVSHOWS_INITIAL_STATE, TVSHOWS_KEY } from './tvshows';
import { DETAILS_INITIAL_STATE, DETAILS_KEY } from './detail';
import { FILTER_INITIAL_STATE, FILTER_KEY } from './filter';

const INITIAL_STATE = {
  [USERS_KEY]: USERS_INITIAL_STATE,
  [TVSHOWS_KEY]: TVSHOWS_INITIAL_STATE,
  [DETAILS_KEY]: DETAILS_INITIAL_STATE,
  [FILTER_KEY]: FILTER_INITIAL_STATE
};

const middleware = applyMiddleware(thunkMiddleware);

export const getStore = (initialState = INITIAL_STATE) => (
  createStore(rootReducer, initialState, composeWithDevTools(middleware))
);

export default {
  getStore
};
