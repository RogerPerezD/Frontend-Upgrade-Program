import { login, logout, startLogout, startLoginEmailPassword } from '../../actions/auth';
import { types } from '../../types/types';
import thunk from 'redux-thunk';
import configureStore from 'redux-mock-store';
import { RootState } from '../../store/store';
import { DispatchTypeNote, NotesState } from '../../reducers/notesReducer';
import { UIState } from '../../reducers/uiReducer';

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

describe('test in auth actions', () => { 

    beforeEach(()=>{
        store = mockStore(initialState);
    });

    test('login and logout should create the action belongs', () => { 
        const uid = '2eers';
        const displayName = 'Roger';

        const loginAction = login( uid, displayName);
        const logoutAction = logout();

        expect( loginAction ).toEqual({
            type: types.login,
            payload: {
                uid,
                name: displayName
            }
        });

        expect( logoutAction ).toEqual({
            type: types.logout
        });

    });

    test('should perform the startLogout', async() => { 
        await store.dispatch<any>( startLogout() );
        const actions = store.getActions();

        console.log(actions)

        expect( actions[0] ).toEqual({
            type: types.logout
        });

        expect( actions[1] ).toEqual({
            type:types.notesLogoutCleaning
        });
    });

    test('should login the user into the system', async() => { 
        const email = 'test@mail.com';
        const password = '1234567';
        await store.dispatch<any>( startLoginEmailPassword( email, password));

        const actions = store.getActions();

        expect( actions[1].type ).toBe( types.login );
        expect( typeof actions[1].payload.uid ).toBe( 'string' );
    });
})