import { types } from '../../types/types';

describe('test in actions types', () => { 
    test('should make match whit the types defined previus', () => { 
        const typesTest = {
            'uiOpenModal' : '[ui] Open modal',
            'uiCloseModal' : '[ui] Close modal',
            'eventSetActive' : '[event] Set active',
            'eventStartAddNew' : '[event] Start add new',
            'eventAddNew' : '[event] Add new',
            'eventClearActiveEvent' : '[event] Clear active event',
            'eventUpdated' : '[event] Event updated',
            'eventDeleted' : '[event] Event deleted',
            'eventLoaded' : '[event] Events loaded',
            'eventClearLogout' : '[event] Clear Logout events',
            'authChecking' : '[auth] Checking login state',
            'authCheckingFinish' : '[auth] Finish checking login state',
            'authStartLogin' : '[auth] Start Login',
            'authLogin' : '[auth] Login',
            'authStartRegister' : '[auth] Start Register',
            'authStartTokenRenew' : '[auth] Start Token Renew',
            'authLogout' : '[auth] Logout'
        }

        expect(typesTest).toEqual(types);
     })
 })