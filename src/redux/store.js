import { createStore, combineReducers, applyMiddleware } from 'redux';
import logger from 'redux-logger';

export default createStore(
    combineReducers({
        firstReducer: (state, action) => state
    }),
    {},
    applyMiddleware(logger)
)