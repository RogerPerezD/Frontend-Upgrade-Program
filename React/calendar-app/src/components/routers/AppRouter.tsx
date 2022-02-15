import {
    BrowserRouter as Router,
    Routes,
    Route,
    Navigate
} from "react-router-dom";
import { LoginScreen } from "../auth/LoginScreen";
import { CalendarScreen } from '../calendar/CalendarScreen';

export const AppRouter = () => {
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
