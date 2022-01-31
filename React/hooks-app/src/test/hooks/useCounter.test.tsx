import useCounter from '../../hooks/useCounter';
import { act, renderHook } from '@testing-library/react-hooks'


describe('Pruebas sobre el hook useCounter', () => {
    
    test('should return the default values', () => {
        const { result } = renderHook(() => useCounter())

        expect( result.current.state ).toBe( 0 );
        expect( typeof result.current.increment ).toBe( 'function' );
        expect( typeof result.current.decrement ).toBe( 'function' );
    });

    test('should return the value pass in the argument', () => {
        const { result } = renderHook(() => useCounter(100))

        expect( result.current.state ).toBe( 100 );
    });

    test('should increment the counter', () => {
        const { result } = renderHook(() => useCounter(5))

        act(() => {
            result.current.increment()
        })

        expect( result.current.state ).toBe( 6 );
    });

    test('should decrement the counter', () => {
        const { result } = renderHook(() => useCounter(5))

        act(() => {
            result.current.decrement()
        })

        expect( result.current.state ).toBe( 4 );
    });
});