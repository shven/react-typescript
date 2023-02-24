import React, { useEffect } from 'react';
import { Outlet, useNavigate } from 'react-router-dom';
import { TUserContext, UserContext } from '../context/userContext';

function CoursesPage() {
    const navigate = useNavigate();
    const { isLoggedIn } = React.useContext(UserContext) as TUserContext;

    useEffect(() => {
        if (!isLoggedIn) {
            navigate('/login');
        }
    }, []);

    return (
        <>
            {isLoggedIn && (
                <div>
                    <Outlet />
                </div>
            )}
        </>
    );
}

export default CoursesPage;
