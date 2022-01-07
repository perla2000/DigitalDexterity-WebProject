import { createStore, combineReducers, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import {Tests} from "./tests.js";

export const ConfigureStore = () => {
    const store = createStore(
        combineReducers({
           tests: Tests
          
           
        }),
        applyMiddleware(thunk, logger)
    );

    return store;
}