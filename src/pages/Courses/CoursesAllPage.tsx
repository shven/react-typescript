import React from 'react';
import Courses from '../../components/Courses/Courses';
import CreateCourse from '../../components/CreateCourse/CreateCourse';
import CreateAuthor from '../../components/CreateCourse/components/CreateAuthor/CreateAuthor';
import { useAppSelector } from '../../app/hooks';
import { userGetUser } from '../../context/userSlice';
import { Link } from 'react-router-dom';

export default () => {
    const user = useAppSelector(userGetUser);

    return (
        <>
            {user?.role === 'admin' && (
                <section>
                    <Link to='/courses/add'>Add course</Link>
                </section>
            )}
            <Courses />
            {user?.role === 'admin' && (
                <>
                    <section>
                        <h2>Create course</h2>
                        <CreateCourse />
                    </section>
                    <section>
                        <h2>Create new author</h2>
                        <CreateAuthor />
                    </section>
                </>
            )}
            {user?.role !== 'admin' && (
                <>
                    <section>
                        <h2>Create course</h2>
                        <p>Login with an admin user to create courses</p>
                    </section>
                </>
            )}
        </>
    );
};
