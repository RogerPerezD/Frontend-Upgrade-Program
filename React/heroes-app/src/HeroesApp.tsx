import { AppRouter } from './components/routers/AppRouter';
import { AuthContext } from './auth/authContext';
import { useEffect, useReducer } from 'react';
import { authReducer, UserState } from './auth/authReducer';


const init = (): UserState =>{
    return (
    (JSON.parse(localStorage.getItem('user')!) as UserState) 
    || { logged: false}
    );
}

export const HeroesApp = () => {
    const [user, dispatch] = useReducer(authReducer,{},init);
    useEffect(() => {
        if(!user) return;

        localStorage.setItem('user', JSON.stringify( user ));
    }, [user]);
    
    return (
        <AuthContext.Provider 
            value={{
                user,
                dispatch
                }}>
        <AppRouter/>
        </AuthContext.Provider>
    );
};
