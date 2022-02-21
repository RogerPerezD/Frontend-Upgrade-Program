import { authReducer, AuthAction, User } from '../../reducers/authReducer';
import { types } from '../../types/types';

const initialState = {
    checking: true
}

describe('test in authReducer', () => { 
    test('should return defualt value', () => { 
        const state = authReducer(initialState, {} as AuthAction);

        expect( state ).toEqual( initialState );
    });

    test('should return a user logged', () => { 
        const user: User = {
            _id: '123',
            name: 'TestName'
        }

        const action: AuthAction = {
            type: types.authLogin,
            payload: user
        }
        const state = authReducer(initialState, action);

        expect(state).toEqual({
            checking: false,
            user
        });
     });
})