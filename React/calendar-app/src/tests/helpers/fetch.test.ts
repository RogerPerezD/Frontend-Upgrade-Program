import { fetchWithoutToken, fetchWithToken } from '../../helpers/fetch';

describe('test in helper fetch', () => { 
    let token = ''

    test('fetchWithoutToken should work it', async () => { 
        const resp = await fetchWithoutToken('auth',{email: 'test@mail.com', password: 'test123'},'POST');
        const body = await resp.json();
        token = body.token;

        expect( resp instanceof Response).toBe( true );
        expect(body.ok).toBe(true);
        expect(body.name).toBe('Test');
    });

    test('fetchWithoutToken should work it', async () => { 
        // Put token in localStorage to send a request
        localStorage.setItem('token',token);
        // Send Request
        const resp = await fetchWithToken('events/620e9f2efdd76caac03cd94d','DELETE');
        const body = await resp.json();

        expect( body.msg ).toBe('Event doesnt exists');
    })
})