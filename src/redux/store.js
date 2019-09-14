import { createStore, combineReducers, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';

import { usersReducer } from './reducers';

export default createStore(
    combineReducers({
        users: usersReducer
    }),
    {},
    applyMiddleware(logger, thunk)
)