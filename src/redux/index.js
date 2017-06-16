import { combineReducers, createStore, applyMiddleware } from 'redux';
import logic from './logics';
import axios from 'axios';
import { createLogicMiddleware } from 'redux-logic';
import {MoviesReducers} from './discover/movie';
import {MovieDetailReducers} from './discover/movieDetail';

const deps = { // injected dependencies for logic
  http: axios
};

const logicMiddleware = createLogicMiddleware(logic, deps);

const middleware = applyMiddleware(
  logicMiddleware
);

const reducer = combineReducers({
    movies: MoviesReducers,
    movieDetail: MovieDetailReducers
});

const store = createStore(reducer, middleware);

export const initStore = () => {
    return store;
}
