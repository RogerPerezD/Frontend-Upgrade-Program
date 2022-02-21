
import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { RootState } from '../../store/store';
import { startLogin } from '../../actions/auth';
import { AuthAction } from '../../reducers/authReducer';
import { types } from '../../types/types';

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

        console.log(localStorage.setItem .mock.calls)
    });
})