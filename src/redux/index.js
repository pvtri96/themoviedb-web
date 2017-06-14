import { combineReducers, createStore, applyMiddleware } from 'redux';
// import { UsersReducer } from './Users';
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
    // users: UsersReducer,  //Remove if no need
    movieList: MovieListReducer,
    movieDetail: MovieReducer
});

const store = createStore(reducer, middleware);


export const initStore = () => {
    // return createStore(reducer, middleware);
    return store;
};
