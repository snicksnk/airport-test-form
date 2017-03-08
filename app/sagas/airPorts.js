import { takeLatest, put, call, fork } from 'redux-saga/effects';
import humps from 'humps';
import * as Constants from '../constants/air';

function* getItems(action) {
    const { query } = action.payload;
    if (!query) {
        yield put({ type: Constants.LOAD_AIRPORTS_SUCCESS, payload: { items: [] } });
        return;
    }
    try {
        const url = `https://places.aviasales.ru/match?max=100&term=${query}`;
        const result = yield call(fetch, url);
        const items = humps.camelizeKeys(yield result.json());
        yield put({ type: Constants.LOAD_AIRPORTS_SUCCESS, payload: { items } });
    } catch (error) {
        yield put({ type: Constants.LOAD_AIRPORTS_FAIL, payload: { error } });
    }
    console.log(action);
}

function* loadAirPortSaga() {
    yield takeLatest(Constants.LOAD_AIRPORTS, getItems);
}

function* airPortSaga() {
    yield fork(loadAirPortSaga);
}

export default airPortSaga;
