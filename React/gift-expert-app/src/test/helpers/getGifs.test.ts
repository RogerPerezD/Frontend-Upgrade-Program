import { getGifs } from "../../helpers/getGifs";

describe('test api fetch function', () => {
  
    test('should retrieve 10 items of the endpoint', async() => {
        
        const gifs = await getGifs('Naruto');

        expect( gifs.length ).toBe( 10 );
    });

    test('should return an empty array', async() => {
        
        const gifs = await getGifs('');

        expect( gifs.length ).toBe( 0 );
    });
});
