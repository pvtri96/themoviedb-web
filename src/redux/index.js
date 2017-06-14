import { combineReducers, createStore, applyMiddleware } from 'redux';
import { MoviesReducer } from './movie';
import logic from './logics';
import axios from 'axios';
import { createLogicMiddleware } from 'redux-logic';

const deps = { // injected dependencies for logic
  http: axios
};

const logicMiddleware = createLogicMiddleware(logic, deps);

const middleware = applyMiddleware(
  logicMiddleware
);

const movieReducer = combineReducers({
  movies: MoviesReducer
});

export const initStore = () => {
    return createStore(movieReducer, middleware);
}
