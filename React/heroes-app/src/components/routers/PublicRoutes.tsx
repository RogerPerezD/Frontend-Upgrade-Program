import React, { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import { AuthContext } from '../../auth/authContext';

type Props = {
    children: JSX.Element
}

export const PublicRoutes = ( { children }: Props) => {
  const {user} = useContext(AuthContext);
  return (user.logged ? 
    <Navigate to="/marvel"/>
    : children);
};
