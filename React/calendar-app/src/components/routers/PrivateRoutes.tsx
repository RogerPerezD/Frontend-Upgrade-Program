import { Navigate } from 'react-router-dom';
type Props = {
    isAuth: boolean,
    children: JSX.Element
}
export const PrivateRoutes = ({ isAuth, children}: Props) => {
    return isAuth ? children : <Navigate to='login'/>
}
