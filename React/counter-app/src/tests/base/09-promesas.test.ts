import { getHeroeByIdAsync } from "../../base/09-promesas";
import heroes from "../../data/heroes";

describe('Trabajando con Promesas', () => {
    
    test('should return and Heroe Async', () => {
        const id = 1;

        // getHeroeByIdAsync( id ).then( heroe =>{
        //     expect( heroe ).toBe( heroes[0] );
        //     done();
        // }); 

    return expect(getHeroeByIdAsync(id)).resolves.toBe(heroes[0]);

    });


    test('should and reject in the promise', () => {
        const id = 6;
        return expect( getHeroeByIdAsync(id) ).rejects.toBe('No se pudo encontrar el héroe')
    });
});