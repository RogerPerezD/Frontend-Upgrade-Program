
import { BrowserRouter as Router,Route, Routes } from 'react-router-dom';
import { LoginScreen } from '../login/LoginScreen';
import { DashboardRoutes } from './DashboardRoutes';

export const AppRouter = () => {
  return (
    <Router>
        <Routes>
            <Route path="/login" element={<LoginScreen />} />
            <Route path="/*" element= { <DashboardRoutes/> }/>
        </Routes>
    </Router>
  );
};
