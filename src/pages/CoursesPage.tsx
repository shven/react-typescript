import React, { useEffect } from 'react';
import { Outlet, useNavigate } from 'react-router-dom';
import { userIsLoggedIn } from '../context/userSlice';
import { useAppSelector } from '../app/hooks';

function CoursesPage() {
    const navigate = useNavigate();
    const isLoggedIn = useAppSelector(userIsLoggedIn);

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
