
import React from 'react';
import { RouteProps, Redirect, Route } from 'react-router';

type Props = {
    isAuth: boolean
} & RouteProps;

export const PublicRoutes = ({ isAuth, component: Component, ...rest}: Props) => {
    console.log(isAuth);
    const renderComponent = () => (
        isAuth ?
            () => {
            return <Redirect to="/"/>
            }
        : 
            Component 
    );

    return <Route {...rest} component={ renderComponent() } />;
};
