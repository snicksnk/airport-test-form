import Immutable from 'immutable';
import * as Contants from '../constants/air';

const initialState = Immutable.fromJS({
    items: [
    ]
});

export default (state = initialState, action) => {
    switch (action.type) {
    case Contants.LOAD_AIRPORTS_SUCCESS: {
        const { items } = action.payload;
        return state.setIn(['items'], Immutable.fromJS(items));
    }
    case 'NOTES_CREATE': {
        const note = Immutable.fromJS(action.payload.note);
        const newState = state.updateIn(['list'], list => list.unshift(note));
        console.log('reducers-notes-list-after', newState.toJS());
        return newState;
    }
    default:
        return state;
    }
};
