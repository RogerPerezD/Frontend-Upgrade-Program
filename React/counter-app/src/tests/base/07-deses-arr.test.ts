import { retornaArreglo } from "../../base/07-deses-arr";

describe('07-deses-arr test', () => {
    test('should return an array', () => {
        
        const arrTest = ['ABC', 123];

        const arr = retornaArreglo();

        expect( arr ).toEqual( arrTest );
        
    });
});