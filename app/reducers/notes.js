import Immutable from 'immutable';

const initialState = Immutable.fromJS({
    list: [
        {
            id: 1,
            tags: [{ id: 1, text: 'important' }, { id: 2, text: 'documents' }, { id: 3, text: 'secrets' }],
            title: 'First',
            text: 'Here is some text here'
        },
        {
            id: 2,
            tags: [{ id: 4, text: 'notes' }, { id: 2, text: 'documents' }, { id: 3, text: 'secrets' }],
            title: 'Second',
            text: 'Here is some another text here'
        },
    ]
});

export default (state = initialState, action) => {
    switch (action.type) {
    case 'GET_LIST':
        return state.set('activeLocationId', action.id);
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
