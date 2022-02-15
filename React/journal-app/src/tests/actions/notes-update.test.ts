/**
 * @jest-environment node 
 */

import * as fs from 'fs';
import thunk from 'redux-thunk';
import configureStore from 'redux-mock-store';

import { RootState } from '../../store/store';
import { DispatchTypeNote, NotesState } from '../../reducers/notesReducer';
import { UIState } from '../../reducers/uiReducer';
import { startUploadingFile } from '../../actions/notes';
import { db } from '../../firebase/firebaseConfig';
import { fileUpload } from '../../helpers/fileUpload';

jest.mock('../../helpers/fileUpload');
// Our mock of add is now fully typed
const mockFileUpload= fileUpload as jest.MockedFunction<typeof fileUpload>;



const middlewares = [ thunk ];
const mockStore = configureStore<RootState, DispatchTypeNote>(middlewares);
const initialState = {
    auth: {
        uid: 'Testing',
        name: 'Roger'
    },
    ui: {} as UIState,
    notes: {
        // notes: [] as Notes[],
        active: {
            id: '3JlQfrQkJpMx73it8LaZ',
            body: 'update file',
            title: 'titi'
        }
    } as NotesState
};

let store = mockStore(initialState);

describe('test in startUpload', () => { 

    test('should first', async() => { 
        // const file = new File([],'foto.jpg');
        mockFileUpload.mockReturnValue(Promise.resolve('https://hola-mundo/cosa2.jpg'));
        fs.writeFileSync('foto.jpg', '')
        const file = fs.readFileSync('foto.jpg');
        await store.dispatch<any>( startUploadingFile( file ) );
        const docRef = await db.doc(`Testing/journal/notes/3JlQfrQkJpMx73it8LaZ`).get();
        const imageUrl = docRef.data()?.imageUrl;
        expect( imageUrl ).toBe('https://hola-mundo/cosa2.jpg');
    });

});