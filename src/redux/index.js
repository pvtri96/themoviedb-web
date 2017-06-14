import { combineReducers, createStore, applyMiddleware } from 'redux';
import { MovieListReducer } from './movies/movieList';
import { MovieReducer } from './movies/movie';
import logic from './logics';
import axios from 'axios';
import { createLogicMiddleware } from 'redux-logic';
import { composeWithDevTools } from 'redux-devtools-extension';

const deps = { // injected dependencies for logic
  http: axios
};

const logicMiddleware = createLogicMiddleware(logic, deps);

const middleware = composeWithDevTools(applyMiddleware(
  logicMiddleware
));

const reducer = combineReducers({
    movies: MovieListReducer,
    movie: MovieReducer
});

const store = createStore(reducer, middleware); // de khong tao nhieu store


export const initStore = () => {
    return store;
};
