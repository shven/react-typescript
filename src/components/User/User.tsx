import React from 'react';
import 'react-toastify/dist/ReactToastify.css';
import { useAppSelector } from '../../app/hooks';
import { userGetUser } from '../../context/userSlice';

export default () => {
    const user = useAppSelector(userGetUser);

    return (
        <div>
            {user?.name && <h2>Welcom {user.name}</h2>}
            {user?.email && <p>Your email address is {user.email}</p>}
        </div>
    );
};
