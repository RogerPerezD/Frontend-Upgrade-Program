import React from 'react';
import { Link } from "react-router-dom";

export const NavBar = () => {
  return (
        <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
            <div className="container-fluid">
                <Link className='navbar-brand' to="/">useContext</Link>

                <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav">
                    <Link className="nav-link active" to="/">Home</Link>
                    <Link className="nav-link" to="about">About</Link>
                    <Link className="nav-link" to="login">Login</Link>
                </ul>
                </div>
            </div>
        </nav>
  );
};
