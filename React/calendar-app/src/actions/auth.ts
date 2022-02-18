import { fetchWithoutToken, fetchWithToken } from "../helpers/fetch"
import { User, DispatchAuth } from '../reducers/authReducer';
import { types } from '../types/types';
import Swal from 'sweetalert2';

export const startLogin = ( email: string, password: string) =>{
    return async ( dispatch: DispatchAuth)=>{
        
        const resp = await fetchWithoutToken('auth', {email, password}, 'POST');
        const body = await resp.json();

        // console.log(body);
        if ( body.ok ) {
            localStorage.setItem('token', body.token);
            localStorage.setItem('token-init-date', new Date().getTime().toString());
        
            dispatch( 
                login({
                _id: body.uid,
                name: body.name
                }) 
            );
        }else{
            Swal.fire('Error', body.msg, 'error');
        }

    }
}

const login = ( user: User) =>{
    return {
        type: types.authLogin,
        payload: user
    }
}

export const startRegister = ( email: string, password: string, name: string) =>{
    return async ( dispatch: DispatchAuth )=>{
        
        const resp = await fetchWithoutToken('auth/new', {email, password, name}, 'POST');
        const body = await resp.json();

        // console.log(body);
        if ( body.ok ) {
            localStorage.setItem('token', body.token);
            localStorage.setItem('token-init-date', new Date().getTime().toString());
        
            dispatch( 
                register({
                _id: body.uid,
                name: body.name
                }) 
            );
        }else{
            Swal.fire('Error', body.msg, 'error');
        }

    }
}


const register = ( user: User) =>{
    return {
        type: types.authStartRegister,
        payload: user
    }
}

export const startChecking = ()=>{
    return async ( dispatch: DispatchAuth )=>{
        
        const resp = await fetchWithToken('auth/renew');
        const body = await resp.json();

        // console.log(body);
        if ( body.ok ) {
            localStorage.setItem('token', body.token);
            localStorage.setItem('token-init-date', new Date().getTime().toString());
        
            dispatch( 
                login({
                _id: body.uid,
                name: body.name
                }) 
            );
        }else{
            dispatch(checkingFinish());
        }

    }
}

const checkingFinish = ()=>{
    return {
        type: types.authCheckingFinish
    }
}

export const startLogout = ()=>{
    return (dispatch: DispatchAuth) =>{
        // localStorage.removeItem('token');
        // localStorage.removeItem('token-init-date');
        localStorage.clear();
        dispatch( logout() );
    }
}

const logout = ()=>{
    return {
        type: types.authLogout
    }
}