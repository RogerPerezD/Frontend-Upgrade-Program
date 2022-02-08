import { types } from '../types/types';
import { UserAction, DispatchType } from '../reducers/authReducer';
import { googleAuthProvider,firebase } from '../firebase/firebaseConfig';
// import  from 'firebase';

export const startLoginEmailPassword = ( email: string, password: string) =>{
    return (( dispatch: DispatchType ) =>{
        setTimeout(() => {
            dispatch( login( '123', 'Carol'));
        }, 3500);
    });
}

export const startGoogleLogin = () =>{
    return ( dispatch: DispatchType ) =>{
        firebase.auth().signInWithPopup( googleAuthProvider )
        .then( userCred => {
            console.log(userCred);
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