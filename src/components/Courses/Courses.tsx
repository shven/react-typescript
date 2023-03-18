import React, { useEffect } from 'react';
import CourseCard from './components/CourseCard/CourseCard';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { fetchCoursesAsync, selectCourseIdsReversed } from './courseSlice';
import { Link } from 'react-router-dom';
import { userGetUser } from '../../context/userSlice';
import CreateCourse from '../CreateCourse/CreateCourse';
import CreateAuthor from '../CreateCourse/components/CreateAuthor/CreateAuthor';

function Courses() {
    const user = useAppSelector(userGetUser);
    const dispatch = useAppDispatch();
    const courseIds = useAppSelector(selectCourseIdsReversed);

    useEffect(() => {
        dispatch(fetchCoursesAsync());
    }, [dispatch]);

    return (
        <div>
            {user?.role === 'admin' && (
                <section>
                    <Link to='/courses/add' data-testid={`courses-add-course-link`}>
                        Add course
                    </Link>
                </section>
            )}
            {courseIds.map((id) => (
                <CourseCard key={id} id={id} />
            ))}

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
        </div>
    );
}

export default Courses;
