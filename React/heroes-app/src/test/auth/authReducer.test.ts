import { authReducer, ActionReducer } from '../../auth/authReducer';
import { types } from '../../types/types';

describe('Test in authReducer', () => {
    
    test('should return the default state', () => {
        const auth = authReducer({ logged: false},{} as ActionReducer); 
        
        expect( auth ).toEqual( {logged: false});
    });

    test('should return the new user authenticated', () => {
        const action: ActionReducer = {
            type: types.login,
            payload: {
                name: 'Roger',
                logged: true
            }
        }

        const auth = authReducer({ logged: false}, action); 
        
        expect( auth ).toEqual({
            name: 'Roger',
            logged: true
        });
    });


    test('should eliminate the user and return logged false', () => {
        const action: ActionReducer = {
            type: types.logout
        }

        const auth = authReducer({ name: 'Roger',logged: false}, action); 

        expect( auth ).toEqual( {logged: false });
    });
    
    
    
});
