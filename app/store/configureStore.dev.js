import { createStore, applyMiddleware, compose } from 'redux';
import createLogger from 'redux-logger';
import createSagaMiddleware from 'redux-saga';
import Immutable from 'immutable';

import rootReducer from '../reducers';
import sagas from '../sagas';

const emptyMap = Immutable.Map();
const sagaMiddleware = createSagaMiddleware();

/* eslint-disable no-underscore-dangle */
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
/* eslint-enable */

export default function configureStore(initialState = emptyMap) {
    const logger = createLogger();

    const store = createStore(
        rootReducer,
        initialState,
        composeEnhancers(applyMiddleware(sagaMiddleware, logger))
    );

    sagaMiddleware.run(sagas);
    return store;
}
