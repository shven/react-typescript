import React, { useEffect } from 'react';
import User from '../components/User/User';
import { Link, useNavigate } from 'react-router-dom';
import { TUserContext, UserContext } from '../context/userContext';

export default () => {
    const navigate = useNavigate();
    const { isLoggedIn } = React.useContext(UserContext) as TUserContext;

    useEffect(() => {
        return () => {
            if (!isLoggedIn) {
                navigate('/login');
            }
        };
    }, []);

    return (
        <section>
            <User />
            {isLoggedIn && (
                <p>
                    You have access to our <Link to={'/courses'}>courses</Link>
                </p>
            )}
        </section>
    );
};
