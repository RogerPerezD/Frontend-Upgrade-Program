import { types } from '../types/types';
import { UserAction, DispatchTypeUser } from '../reducers/authReducer';
import { googleAuthProvider,firebase } from '../firebase/firebaseConfig';
import { DispatchTypeUI } from '../reducers/uiReducer';
import { finishLoading, removeError, setError, startLoading } from './ui';

export const startLoginEmailPassword = ( email: string, password: string) =>{
    return (( dispatch: (DispatchTypeUI & DispatchTypeUser) ) =>{

        dispatch( startLoading() );

        firebase.auth().signInWithEmailAndPassword( email, password)
            .then(({user}) => {
                dispatch( login( (user?.uid as string), (user?.displayName as string)));
                dispatch( removeError() );
                dispatch( finishLoading() );
            })
            .catch( (e: Error) =>{
                dispatch( setError(e.message) );
                dispatch( finishLoading() );
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
    return async ( dispatch: DispatchTypeUser )=>{
        await firebase.auth().signOut();
        dispatch( logout() );
    }
}

export const logout = (): UserAction =>{
    return {
        type: types.logout
    }
}