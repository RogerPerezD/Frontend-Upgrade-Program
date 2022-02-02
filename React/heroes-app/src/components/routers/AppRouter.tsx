
import { BrowserRouter as Router,Route, Routes } from 'react-router-dom';
import { LoginScreen } from '../login/LoginScreen';
import { DashboardRoutes } from './DashboardRoutes';
import { PrivateRouter } from './PrivateRoutes';
import { PublicRoutes } from './PublicRoutes';

export const AppRouter = () => {
  return (
    <Router>
        <Routes>
            <Route path="/login" element={ 
              <PublicRoutes>
                <LoginScreen />
              </PublicRoutes>
            }/>
            <Route path="/*" element={ 
              <PrivateRouter>
                <DashboardRoutes/>
              </PrivateRouter>
            }/>
        </Routes>
    </Router>
  );
};
