
import { renderHook } from '@testing-library/react-hooks'
import { useFetchGifs } from '../../hooks/useFetchGifs';

describe('Test in the hook useFetchGifs', () => {
    
    test('should return the initial state of the hook', async() => {
        
        const { result, waitForNextUpdate } = renderHook(() => useFetchGifs({category: 'Naruto'}));
        
        const { data, loading }= result.current;
        await waitForNextUpdate();
        expect( data ).toEqual( null );
        expect( loading ).toBe( true );

    });

    test('should return a collection of imgs', async() => {
        const { result, waitForNextUpdate } = renderHook(() => useFetchGifs({category: 'Naruto'}));
        await waitForNextUpdate();
        const { data, loading }= result.current;
        expect( data?.length ).toEqual( 10 );
        expect( loading ).toBe( false );
    });
});