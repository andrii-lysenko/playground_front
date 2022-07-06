import { ReactNode } from 'react';
import { Navigate, Route, useLocation } from 'react-router-dom';

type AuthorizedRouteParams = {
    isLoggedIn: boolean;
    path: string;
    component: ReactNode;
};

const AuthorizedRoute: React.FC<AuthorizedRouteParams> = ({ isLoggedIn, path, component }) => {
    const location = useLocation();

    const idUrl = `/login?redirectUrl=${location.pathname}`;

    return isLoggedIn ? <Route path={path} element={component} /> : <Navigate to={idUrl} />;
};

export default AuthorizedRoute;
