import React from 'react';
import { useParams } from 'react-router-dom';
import CourseInfo from '../../components/CourseInfo/CourseInfo';
import { useAppSelector } from '../../app/hooks';
import { selectCourseById } from '../../components/Courses/courseSlice';

export default () => {
    const params = useParams(); // to get page params
    const course = useAppSelector((state) => selectCourseById(state, params.pageId || ''));

    if (!course) {
        alert('course not found, redirect');
    }

    return (
        <>
            <div>{course && <CourseInfo course={course} />}</div>
        </>
    );
};
