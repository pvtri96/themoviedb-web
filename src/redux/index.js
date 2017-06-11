import { combineReducers, createStore, applyMiddleware } from 'redux';
import { PeopleReducer } from './People';
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

const reducer = combineReducers({
    people: PeopleReducer
});

export const initStore = () => {
    return createStore(reducer, middleware);
}
