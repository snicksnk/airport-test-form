import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import rootReducer from '../reducers';
import sagas from '../sagas';

const emptyMap = Immutable.Map();
const sagaMiddleware = createSagaMiddleware();

export default function configureStore(initialState = emptyMap) {
    const store = createStore(
        rootReducer,
        initialState,
        applyMiddleware(sagaMiddleware)
    );
    sagaMiddleware.run(sagas);
    return store;
}
