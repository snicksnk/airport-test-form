import * as Constants from '../constants/air';

export function loadAirPorts(query) {
    return {
        type: Constants.LOAD_AIRPORTS,
        payload: { query }
    };
}
