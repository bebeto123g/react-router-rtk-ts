import React, { ReactNode } from 'react';
import { Navigate, useLocation } from 'react-router-dom';

interface IRequireAuthProps {
    children: ReactNode;
}

const isAuth = true;

export const RequireAuth = (props: IRequireAuthProps) => {
    const location = useLocation();

    if (!isAuth) {
        // при переадресации можно прокидывать через state, он так же есть в useNavigate
        return <Navigate to={'/login'} state={{ from: location }} />;
    }

    return props.children;
};
