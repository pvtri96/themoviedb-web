import { combineReducers, createStore, applyMiddleware } from 'redux';
import { PeopleReducer } from './People';
import { PersonReducer } from './Person';
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
    people: PeopleReducer,
    person: PersonReducer
});

const store = createStore(reducer, middleware);

export const initStore = () => {
    return store;
}
