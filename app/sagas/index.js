import { fork } from 'redux-saga/effects';
import AirPortsSaga from './airPorts';

function* rootSaga() {
    yield fork(AirPortsSaga);
}

export default rootSaga;
