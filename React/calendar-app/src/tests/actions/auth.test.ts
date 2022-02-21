
import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { RootState } from '../../store/store';
import { startLogin, startRegister, startChecking } from '../../actions/auth';
import { types } from '../../types/types';
import Swal from 'sweetalert2';
// import { fetchWithoutToken, fetchWithToken } from '../../helpers/fetch';
import * as fetchModule from '../../helpers/fetch';

jest.mock('sweetalert2', ()=>({
    fire: jest.fn()
}));

const middlewares = [ thunk ];
const mockStore = configureStore<RootState>(middlewares);
const initState = {} as RootState;

let store = mockStore(initState);

Storage.prototype.setItem = jest.fn();

describe('test in auth action', () => { 
    beforeEach(() => {
        store = mockStore(initState);
        jest.clearAllMocks();
    });

    test('startLogin should work it', async () => { 
        await store.dispatch<any>(startLogin('test@mail.com','test123'));
        const actions = store.getActions();
        // console.log(actions);
        expect(actions[0]).toEqual({
            type: types.authLogin,
            payload: {
                _id: expect.any(String),
                name: 'Test'
            }
        });

        expect( localStorage.setItem ).toHaveBeenCalledWith('token', expect.any(String));
        expect( localStorage.setItem ).toHaveBeenCalledWith('token-init-date', expect.any(String));

        // console.log(localStorage.setItem.mock.calls)
        // token =( localStorage.setItem as any).mock.calls
    });

    test('startLogin should fail if the data is wrong', async () => { 
        await store.dispatch<any>(startLogin('test@mail.com','passWrong'));
        const actions = store.getActions();

        expect( actions ).toEqual([]);
        expect( Swal.fire ).toHaveBeenCalledWith("Error", "The password is incorrect", "error");
    });

    test('startRegister should work', async () => { 
        const name = 'Roger Test';
        const uid = '123';
        const token = 'dgert4e23da';

        (fetchModule as any).fetchWithoutToken = jest.fn(() => ({
            json(){
                return {
                    ok: true,
                    uid,
                    name,
                    token
                }
            }
        }));

        await store.dispatch<any>(startRegister('test2@mail.com','test123','Test2'));
        const actions = store.getActions();
        // console.log(actions,'actions');

        expect( actions[0] ).toEqual({
            type: types.authStartRegister,
            payload: {
                _id: uid,
                name
            }
        });

        expect( localStorage.setItem ).toHaveBeenCalledWith('token', token);
        expect( localStorage.setItem ).toHaveBeenCalledWith('token-init-date', expect.any(String));

    });

    test('startChecking should worl', async () => { 
        const name = 'Roger Test';
        const uid = '123';
        const token = 'dgert4e23da';
        (fetchModule as any).fetchWithToken = jest.fn(() => ({
            json(){
                return {
                    ok: true,
                    uid,
                    name,
                    token
                }
            }
        }));

        await store.dispatch<any>( startChecking() );
        const actions = store.getActions();
        // console.log(actions)
        expect( actions[0] ).toEqual({
            type: types.authLogin,
            payload: {
                _id: uid,
                name
            }
        });
        
        expect( localStorage.setItem ).toHaveBeenCalledWith('token', token);
    });

})