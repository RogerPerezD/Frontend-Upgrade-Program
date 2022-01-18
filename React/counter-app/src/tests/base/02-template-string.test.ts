
import { getSaludo } from '../../base/02-template-string';


describe('Pruebas en 02-template-string', () => {
    test('should return a greet', () => {
        // Arrange
        const name = 'Rogelio';
        // Act
        const saludo: string = getSaludo( name );
        // Assert
        expect( saludo ).toBe(`Hola ${name}`);
    });
});
