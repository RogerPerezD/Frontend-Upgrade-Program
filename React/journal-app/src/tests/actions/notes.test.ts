/**
 * @jest-environment node
 */
import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { startNewNote, startLoadingNotes, startSaveNote, startUploadingFile } from '../../actions/notes';
import { RootState } from '../../store/store';
import { DispatchTypeNote, Notes, NotesState } from '../../reducers/notesReducer';
import { UIState } from '../../reducers/uiReducer';
import { types } from '../../types/types';
import { db } from '../../firebase/firebaseConfig';


const middlewares = [ thunk ];
const mockStore = configureStore<RootState, DispatchTypeNote>(middlewares);
const initialState = {
    auth: {
        uid: 'Testing',
        name: 'Roger'
    },
    ui: {} as UIState,
    notes: {} as NotesState
};

let store = mockStore(initialState);

describe('test in notes actions', () => { 

    beforeEach(()=>{
        store = mockStore(initialState);
    });

    test('should create a new note whit startNewNote', async() => { 
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

    test('startLoadingNotes should load the notes', async() => { 
        await store.dispatch<any>( startLoadingNotes() );
        const actions = store.getActions();
        
        expect( actions[0] ).toEqual({
            type: types.notesLoad,
            payload: expect.any(Array)
        });

        const expectedNote = {
            id: expect.any(String),
            title: expect.any(String),
            body: expect.any(String),
            date: expect.any(Number)
        };

        expect( actions[0].payload[0] ).toMatchObject( expectedNote );
    });

    test('startSaveNote should update the note', async() => { 
        const note:Notes = {
            id:"3JlQfrQkJpMx73it8LaZ",
            body: 'body update',
            title: 'title edit',
            date: 123434
        }

        await store.dispatch<any>( startSaveNote( note ) );

        const actions = store.getActions();
        expect( actions[0].type ).toBe( types.notesUpdated );

        const docRef = await db.doc(`Testing/journal/notes/${ note.id}`).get();

        expect( docRef.data()?.title ).toBe( note.title );
    });

    // test('startUploading should update the url of the image entry', async() => { 
    //     const file = new File([],'foto.jpg');
    //     await store.dispatch<any>( startUploadingFile( file ) );
    //  })

});