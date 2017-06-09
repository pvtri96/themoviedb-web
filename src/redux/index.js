import { combineReducers, createStore, applyMiddleware } from 'redux';
import { UsersReducer } from './Users';
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
    users: UsersReducer //Remove if no need
});

export const initStore = () => {
    return createStore(reducer, middleware);
}
