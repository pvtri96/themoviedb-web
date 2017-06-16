// <<<<<<< HEAD
// import { combineReducers, createStore, applyMiddleware } from 'redux';
// import { MovieListReducer } from './movies/movieList';
// import { MovieReducer } from './movies/movie';
// import logic from './logics';
// import axios from 'axios';
// import { createLogicMiddleware } from 'redux-logic';
// import { composeWithDevTools } from 'redux-devtools-extension';
// =======
import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunkMiddleware from 'redux-thunk';
import rootReducer from './rootReducer';
// >>>>>>> origin

const middleware = applyMiddleware(thunkMiddleware);

// <<<<<<< HEAD
// const middleware = composeWithDevTools(applyMiddleware(
//   logicMiddleware
// ));

// const reducer = combineReducers({
//     movies: MovieListReducer,
//     movie: MovieReducer
// });

// const store = createStore(reducer, middleware); // de khong tao nhieu store


// export const initStore = () => {
//     return store;
// =======
const store = createStore(rootReducer, composeWithDevTools(middleware));

export const getStore = () => store;

export default {
  getStore
// >>>>>>> origin
};
