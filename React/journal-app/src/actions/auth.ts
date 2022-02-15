import Swal from 'sweetalert2';
import { types } from '../types/types';
import { UserAction, DispatchTypeUser } from '../reducers/authReducer';
import { googleAuthProvider,firebase } from '../firebase/firebaseConfig';
import { DispatchTypeUI } from '../reducers/uiReducer';
import { finishLoading, removeError, setError, startLoading } from './ui';
import { DispatchTypeNote } from '../reducers/notesReducer';
import { noteLogout } from './notes';

export const startLoginEmailPassword = ( email: string, password: string) =>{
    return (( dispatch: (DispatchTypeUI & DispatchTypeUser) ) =>{

        dispatch( startLoading() );

        return firebase.auth().signInWithEmailAndPassword( email, password)
            .then(({user}) => {
                dispatch( login( (user?.uid as string), (user?.displayName as string)));
                dispatch( removeError() );
                dispatch( finishLoading() );
            })
            .catch( (e: Error) =>{
                dispatch( setError(e.message) );
                dispatch( finishLoading() );
                Swal.fire({
                    title: 'Error!',
                    text: e.message,
                    icon: 'error',
                    confirmButtonText: 'Confirm'
                });
            });
    });
}

export const startGoogleLogin = () =>{
    return ( dispatch: DispatchTypeUser ) =>{
        firebase.auth().signInWithPopup( googleAuthProvider )
        .then( ({user}) => {
            dispatch( login( (user?.uid as string), (user?.displayName as string)));
        });
    }
}

export const login = ( uid: string, displayName: string) =>{ 
    const action: UserAction = {
        type: types.login,
        payload: {
            uid,
            name: displayName
        }
    }
    return action;
}

export const  startRegisterWhitEmailAndPassword = ( email: string, password: string, name: string)=>{

    return ( dispatch: DispatchTypeUser ) => {
        firebase.auth().createUserWithEmailAndPassword( email, password )
        .then( async ({user}) => {
            // Put user's name in firebase 
            await user?.updateProfile({ displayName: name });

            // After register, the user is logged in.
            dispatch( login( (user?.uid as string), (user?.displayName as string)));
        });
    }
}

export const startLogout = () =>{
    return async ( dispatch: (DispatchTypeUser & DispatchTypeNote) )=>{
        await firebase.auth().signOut();
        dispatch( logout() );
        dispatch( noteLogout() );
    }
}

export const logout = (): UserAction =>{
    return {
        type: types.logout
    }
}