import { getImagen } from '../../base/11-async-await';

describe('Pruebas con async-await y fetch', () => {
    
    test('should return the url of the image', async() => {
        // Una alternativa
        // const url: string = await getImagen();
        // console.log(url)
        // expect(url.includes('https://')).toBe(true);

        // Otra alternativa
        const expression = /(https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|www\.[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9]+\.[^\s]{2,}|www\.[a-zA-Z0-9]+\.[^\s]{2,})/gi;
        const regex = new RegExp(expression);
        await expect(getImagen()).resolves.toMatch(regex);
        
    });
}); 