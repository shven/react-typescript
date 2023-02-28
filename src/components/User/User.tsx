import React from 'react';
import 'react-toastify/dist/ReactToastify.css';
import { useAppSelector } from '../../app/hooks';
import { userGetUser, userIsLoggedIn } from '../../context/userSlice';

export default () => {
    const isLoggedIn = useAppSelector(userIsLoggedIn);
    const user = useAppSelector(userGetUser);

    return (
        <div>
            {isLoggedIn && user?.name && <h2>Welcom {user.name}</h2>}
            {isLoggedIn && user?.email && <p>Your email address is {user.email}</p>}
        </div>
    );
};
