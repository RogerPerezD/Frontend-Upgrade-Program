import { uiReducer, uiAction, uiState } from '../../reducers/uiReducer';
import { types } from '../../types/types';

const initState: uiState = {
    modalOpen: false
}

describe('test in uiReducer', () => { 

    test('should return the default value', () => { 
        const state = uiReducer( initState, {} as uiAction );
        expect( state ).toEqual( initState );
    });
    
    test('should open the modal', () => { 

        const action: uiAction = {
            type: types.uiOpenModal
        }

        const state = uiReducer( initState, action );
        expect( state.modalOpen ).toBe( true );
        
    });

    test('should close the modal', () => { 

        const action: uiAction = {
            type: types.uiCloseModal
        }

        const state = uiReducer( initState, action );
        expect( state.modalOpen ).toBe( false );
        
    });
 })