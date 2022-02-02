import { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../../auth/authContext';

type Props = {
    children: JSX.Element
}

export const PrivateRouter = ({ children } : Props) => {
    const {user} = useContext(AuthContext);
    const { pathname, search} = useLocation();

    localStorage.setItem('lastRoute', `${pathname}${search}`);

    return (user.logged ? 
        children
        : <Navigate to="/login"/>);
};
