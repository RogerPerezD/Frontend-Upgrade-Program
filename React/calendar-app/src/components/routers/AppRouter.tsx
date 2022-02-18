import {
    BrowserRouter as Router,
    Routes,
    Route,
    Navigate
} from "react-router-dom";
import { LoginScreen } from "../auth/LoginScreen";
import { CalendarScreen } from '../calendar/CalendarScreen';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { startChecking } from '../../actions/auth';

export const AppRouter = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch( startChecking() );
    }, [dispatch])
    

    return (
        <Router>
        <Routes>
            <Route path="/" element={<CalendarScreen/>}/>
            <Route path="/login" element={<LoginScreen/>}/>
            <Route
                path="*"
                element={<Navigate to="/" />}
            />
        </Routes>
        </Router>
    )
}
