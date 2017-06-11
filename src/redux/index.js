import { combineReducers, createStore, applyMiddleware } from 'redux';
import logic from './logics';
import axios from 'axios';
import { createLogicMiddleware } from 'redux-logic';
import {MoviesReducers} from './Discover';

const deps = { // injected dependencies for logic
  http: axios
};

const logicMiddleware = createLogicMiddleware(logic, deps);

const middleware = applyMiddleware(
  logicMiddleware
);

const reducer = combineReducers({
    movies: MoviesReducers
});

export const initStore = () => {
    return createStore(reducer, middleware);
}
