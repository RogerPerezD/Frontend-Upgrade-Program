
export enum types{
    uiOpenModal = '[ui] Open modal',
    uiCloseModal = '[ui] Close modal',

    
    eventSetActive = '[event] Set active',
    eventStartAddNew = '[event] Start add new',
    eventAddNew = '[event] Add new',
    eventClearActiveEvent = '[event] Clear active event',
    eventUpdated = '[event] Event updated',
    eventDeleted = '[event] Event deleted',

    authChecking = '[auth] Checking login state',
    authCheckingFinish = '[auth] Finish checking login state',
    authStartLogin = '[auth] Start Login',
    authLogin = '[auth] Login',
    authStartRegister = '[auth] Start Register',
    authStartTokenRenew = '[auth] Start Token Renew',
    authLogout = '[auth] Logout'
}