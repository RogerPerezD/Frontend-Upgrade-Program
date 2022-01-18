import { getHeroeById, getHeroesByOwner } from '../../base/08-imp-exp';
import heroes from '../../data/heroes';

describe('Pruebas en funciones de heroes', () => {

    test('should return and heroe by id', () => {
        // Recibir un id que no existe
        // mandar un id correcto pero no exioste un heroe
        // Mandar id correcto y encontrar el heroe
        const heroeWrongID = getHeroeById( 6 );
        const heroe = getHeroeById( 5 );

        expect( heroeWrongID ).toBeUndefined();
        expect( heroe ).toBeDefined();
        
    });


    test('should return an heroes Dc array', () => {
        const owner = 'DC';
        const heroesTest = getHeroesByOwner( owner );
        const heroesDc = heroes.filter( h => h.owner === owner);

        expect( heroesDc ).toEqual( heroesTest );
    });

    test('should return an heroes Marvel array', () => {
        const owner = 'Marvel';
        const heroesTest = getHeroesByOwner( owner );

        // Existen dos heroes de marvel en la data
        expect( heroesTest.length ).toBe( 2 );
    });
    
});