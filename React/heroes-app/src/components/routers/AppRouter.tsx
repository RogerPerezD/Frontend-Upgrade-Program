import React from 'react';
import { BrowserRouter as Router,Route, Routes } from 'react-router-dom';
import { MarvelScreen } from '../marvel/MarvelScreen';
import { DcScreen } from '../dc/DcScreen';
import { SearchScreen } from '../search/SearchScreen';
import { LoginScreen } from '../login/LoginScreen';
import { Navbar } from '../ui/NavBar';
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
