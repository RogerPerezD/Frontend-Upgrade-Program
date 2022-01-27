import React from 'react';
import {
    BrowserRouter as Router,
    Routes,
    Route
  } from "react-router-dom";
import { AboutScreen } from './AboutScreen';
import { LoginScreen } from './LoginScreen';
import { HomeScreen } from './HomeScreen';
import { NavBar } from './NavBar';
import { NotFoundScreen } from './NotFoundScreen';

export const AppRouter = () => {
  return (
    <Router>
      <div>
        <NavBar />
        <div className="container">
          <Routes>
            <Route path="/"  element={ <HomeScreen />}/>
            <Route path="/about"  element={ <AboutScreen />}/>
            <Route path="/login"  element={ <LoginScreen />}/>
            <Route path="*"  element={ <NotFoundScreen />}/>
          </Routes>
        </div>
      </div>
    </Router>
  );
};
