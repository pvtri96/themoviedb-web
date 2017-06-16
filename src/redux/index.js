import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunkMiddleware from 'redux-thunk';
import rootReducer from './rootReducer';
import { USERS_INITIAL_STATE, USERS_KEY } from './users';
import { MOVIES_INITIAL_STATE, MOVIES_KEY } from './movies';
import { DETAILS_INITIAL_STATE, DETAILS_KEY } from './details';

const INITIAL_STATE = {
  [USERS_KEY]: USERS_INITIAL_STATE,
  [MOVIES_KEY]: MOVIES_INITIAL_STATE,
  [DETAILS_KEY]: DETAILS_INITIAL_STATE
};

const middleware = applyMiddleware(thunkMiddleware);

export const getStore = (initialState = INITIAL_STATE) => (
  createStore(rootReducer, initialState, composeWithDevTools(middleware))
);

export default {
  getStore
};
