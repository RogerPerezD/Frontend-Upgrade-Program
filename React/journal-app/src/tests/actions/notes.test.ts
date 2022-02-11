import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { startNewNote } from '../../actions/notes';
import { RootState } from '../../store/store';
import { DispatchTypeNote, NotesState } from '../../reducers/notesReducer';
import { UIState } from '../../reducers/uiReducer';

const middlewares = [ thunk ];
const mockStore = configureStore<RootState, DispatchTypeNote>(middlewares);

const store = mockStore({
    auth: {
        uid: 'Testing',
        name: 'Roger'
    },
    ui: {} as UIState,
    notes: {} as NotesState
});


describe('test in notes actions', () => { 
    test('should create a new note whit startNewNote', async () => { 

        await store.dispatch<any>( startNewNote(435435) );
    });
})