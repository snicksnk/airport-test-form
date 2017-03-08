import { combineReducers } from 'redux-immutable';
import notes from './notes';
import airPorts from './airPorts';
import routing from './routing';

const rootReducer = combineReducers({
    routing,
    notes,
    airPorts
});

export default rootReducer;
