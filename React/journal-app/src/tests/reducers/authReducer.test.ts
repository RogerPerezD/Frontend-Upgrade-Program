import { UserState, authReducer, UserAction } from '../../reducers/authReducer';
import { types } from '../../types/types';

describe('test in authReducer', () => { 

    const user: UserState = {
        uid: '123a',
        name: 'Roger'
    };
    test('should pass a user and store it in the state', () => { 
        
        const action: UserAction = {
            type: types.login,
            payload: user
        } 
        
        const newState = authReducer( {} as UserState, action );

        expect( newState ).toEqual( user );
    });

    test('should clean the state ', () => {
        const action: UserAction = {
            type: types.logout
        } 
        
        const newState = authReducer( user, action );

        expect( newState ).toEqual( {} );
    });

    test('should return the same state if the action is incorrect', () => { 
        const action: UserAction = {
            type: 'type wrong'
        } 
        
        const newState = authReducer( user, action );

        expect( newState ).toEqual( user );
    })
})