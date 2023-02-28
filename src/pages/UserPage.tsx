import React, { useEffect } from 'react';
import User from '../components/User/User';
import { Link, useNavigate } from 'react-router-dom';
import { useAppSelector } from '../app/hooks';
import { userIsLoggedIn } from '../context/userSlice';

export default () => {
    const navigate = useNavigate();
    const isLoggedIn = useAppSelector(userIsLoggedIn);

    useEffect(() => {
        if (!isLoggedIn) {
            navigate('/login');
        }
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
