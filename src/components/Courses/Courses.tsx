import React, { useEffect } from 'react';
import CourseCard from './components/CourseCard/CourseCard';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { fetchCoursesAsync, selectCourseIdsReversed } from './courseSlice';

function Courses() {
    const dispatch = useAppDispatch();
    const courseIds = useAppSelector(selectCourseIdsReversed);

    useEffect(() => {
        dispatch(fetchCoursesAsync());
    }, [dispatch]);

    return (
        <div>
            {courseIds.map((id) => (
                <CourseCard key={id} id={id} />
            ))}
        </div>
    );
}

export default Courses;
