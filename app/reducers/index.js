import { combineReducers } from 'redux-immutable';
import airPorts from './airPorts';
import routing from './routing';

const rootReducer = combineReducers({
    routing,
    airPorts
});

export default rootReducer;
