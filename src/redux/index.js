import { combineReducers, createStore, applyMiddleware } from 'redux';
import { MoviesReducer } from './movie';
import { DetailsReducer } from './details';
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
  movies: MoviesReducer,
  movieDetails: DetailsReducer
});

const store = createStore(movieReducer, middleware);

export const initStore = () => {
    return store;
}
