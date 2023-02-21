import React from 'react';
import 'react-toastify/dist/ReactToastify.css';
import { TUserContext, UserContext } from '../../context/userContext';

export default () => {
    const { user, isLoggedIn } = React.useContext(UserContext) as TUserContext;

    return (
        <div>
            {isLoggedIn && user?.name && <h2>Welcom {user.name}</h2>}
            {isLoggedIn && user?.email && <p>Your email address is {user.email}</p>}
        </div>
    );
};
