import { userGetUser, userIsLoggedIn } from '../../context/userSlice';
import { Navigate, Outlet } from 'react-router-dom';
import { useAppSelector } from '../../app/hooks';
import React from 'react';

export default (props: { roles: string[] }) => {
    const isLoggedIn = useAppSelector(userIsLoggedIn);
    const user = useAppSelector(userGetUser);

    if (!isLoggedIn) {
        return <Navigate to={'/login'} />;
    } else if (!props.roles.includes(user?.role ?? '')) {
        return <Navigate to={'/not-allowed'} />;
    } else {
        return <Outlet />;
    }
};
