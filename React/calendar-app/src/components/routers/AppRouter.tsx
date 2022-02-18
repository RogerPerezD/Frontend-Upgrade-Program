import {
    BrowserRouter as Router,
    Routes,
    Route,
    Navigate
} from "react-router-dom";
import { LoginScreen } from "../auth/LoginScreen";
import { CalendarScreen } from '../calendar/CalendarScreen';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { startChecking } from '../../actions/auth';
import { RootState } from '../../store/store';
import { PublicRoutes } from './PublicRoutes';
import { PrivateRoutes } from './PrivateRoutes';

export const AppRouter = () => {
    const dispatch = useDispatch();
    const { checking, user } = useSelector((state: RootState) => state.auth);

    useEffect(() => {
        dispatch( startChecking() );
    }, [dispatch])
    
    console.log(checking);
    if (checking) {
        return(<h5> Wait....</h5>);
    }

    return (
        <Router>
        <Routes>
            <Route 
                path="/" 
                element={
                <PrivateRoutes isAuth = { !!user?._id}>
                    <CalendarScreen/>
                </PrivateRoutes>
            }/>
            <Route 
                path="/login" 
                element={
                <PublicRoutes isAuth = { !!user?._id}>
                    <LoginScreen/>
                </PublicRoutes>
            }/>
            <Route
                path="*"
                element={<Navigate to="/" />}
            />
        </Routes>
        </Router>
    )
}
