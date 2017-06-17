import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunkMiddleware from 'redux-thunk';
import rootReducer from './rootReducer';
import { PEOPLE_INITIAL_STATE, PEOPLE_KEY } from './people';
import { PERSON_INITIAL_STATE, PERSON_KEY } from './person';

const INITIAL_STATE = {
  [PEOPLE_KEY]: PEOPLE_INITIAL_STATE,
  [PERSON_KEY]: PERSON_INITIAL_STATE
};

const middleware = applyMiddleware(thunkMiddleware);

export const getStore = (initialState = INITIAL_STATE) => (
  createStore(rootReducer, initialState, composeWithDevTools(middleware))
);

export default {
  getStore
};
