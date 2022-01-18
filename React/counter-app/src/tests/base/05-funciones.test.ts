import { getUser, getUsuarioActivo } from "../../base/05-funciones";
import '@testing-library/jest-dom'

describe('05-Functions', () => {
    test('should compare two users', () => {
        
        const userTest = {
            uid: '123',
            username: 'El_Papi1502'
        };

        const user = getUser();

        expect( user ).toEqual( userTest );
    });


    test('should compare two users whit one param', () => {
        
        const name = 'Mike';
        const userTest = {
            uid: 'ABC567',
            username: name
        };

        const user = getUsuarioActivo( name );

        expect( user ).toEqual( userTest );
    });
});