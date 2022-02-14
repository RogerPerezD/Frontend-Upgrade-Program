import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { startNewNote } from '../../actions/notes';
import { RootState } from '../../store/store';
import { DispatchTypeNote, NotesState } from '../../reducers/notesReducer';
import { UIState } from '../../reducers/uiReducer';
import { types } from '../../types/types';
import { db } from '../../firebase/firebaseConfig';

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
        const noteDate = new Date().getTime();
        await store.dispatch<any>( startNewNote(noteDate) );
        const actions = store.getActions();

        expect( actions[0] ).toEqual(
            {
                type: types.notesActive,
                payload: { 
                    id: expect.any(String), 
                    title: '', 
                    body: '', 
                    date: noteDate 
                }
            }
        );

        expect( actions[1] ).toEqual(
            {
                type: types.notesAddNew,
                payload: { 
                    id: expect.any(String), 
                    title: '', 
                    body: '', 
                    date: noteDate 
                }
            }
        );

        await db.doc(`Testing/journal/notes/${ actions[0].payload.id }`).delete();

    });
})