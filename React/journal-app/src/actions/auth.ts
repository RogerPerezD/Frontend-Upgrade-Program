import { types } from '../types/types';
import { UserAction, DispatchType } from '../reducers/authReducer';
import { googleAuthProvider,firebase } from '../firebase/firebaseConfig';

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
        .then( ({user}) => {
            dispatch( login( (user?.uid as string), (user?.displayName as string)))
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