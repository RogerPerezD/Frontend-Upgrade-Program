
import React from 'react';
import { Route, Redirect, RouteProps } from 'react-router';

type Props = {
    isAuth: boolean
} & RouteProps;

export const PrivateRoutes = ({ isAuth, component: Component, ...rest}: Props) => {
    const renderComponent = () => (
        isAuth ?
            Component
        : 
            () => {
            return <Redirect to="/auth/login"/>
            }
    );

    return <Route {...rest} component={ renderComponent() } />;
};

// isAuth ? <Component/> : <Redirect to={{pathname: '/'}}/> 

