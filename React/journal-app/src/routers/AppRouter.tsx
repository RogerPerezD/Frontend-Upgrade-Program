import {
    BrowserRouter as Router,
    Switch,
    Redirect,
} from "react-router-dom";
import { AuthRouter } from "./AuthRouter";
import { JournalScreen } from '../components/journal/JournalScreen';
import { useEffect, useState } from 'react';
import { firebase } from '../firebase/firebaseConfig';
import { useDispatch } from 'react-redux';
import { login } from '../actions/auth';
import { PrivateRoutes } from './PrivateRoutes';
import { PublicRoutes } from './PublicRoutes';
import { startLoadingNotes } from '../actions/notes';

export const AppRouter = () => {

    const dispatch = useDispatch();
    const [checking, setChecking] = useState(true);
    const [isAuth, setIsAuth] = useState(false);

    useEffect(() => {
        firebase.auth().onAuthStateChanged((user) =>{
            if (user?.uid && user?.displayName) {
                dispatch( login( user.uid, user.displayName));
                setIsAuth(true);

                dispatch( startLoadingNotes() );

            }else{
                setIsAuth(false);
            }
            setChecking(false);
        });

    }, [ dispatch ]);

    if (checking) {
        return (<h1>Wait....</h1>)
    }
    
    return (
        <Router>
            <div>
            <Switch>
                <PublicRoutes
                    isAuth={ isAuth } 
                    path="/auth" 
                    component={ AuthRouter }
                />
                <PrivateRoutes 
                    exact 
                    isAuth={ isAuth } 
                    path="/" 
                    component={ JournalScreen }
                />
                
                <Redirect to="/auth/login" />
            </Switch>
            </div>
        </Router>
    );
};
