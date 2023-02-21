import React, { useEffect } from 'react';
import Login from '../components/Login/Login';
import { useNavigate } from 'react-router-dom';
import { TUserContext, UserContext } from '../context/userContext';

export default () => {
    const navigate = useNavigate();
    const { isLoggedIn } = React.useContext(UserContext) as TUserContext;

    useEffect(() => {
        if (isLoggedIn) navigate('/user');
    }, [isLoggedIn]);

    return (
        <section>
            <h2>Login</h2>
            <Login />
        </section>
    );
};
