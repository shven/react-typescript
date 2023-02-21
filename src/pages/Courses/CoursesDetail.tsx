import React from 'react';
import { useParams } from 'react-router-dom';
import { CourseContext, TCourseContext } from '../../context/courseContext';
import CourseInfo from '../../components/CourseInfo/CourseInfo';

export default () => {
    const params = useParams();
    const { courses } = React.useContext(CourseContext) as TCourseContext;
    const course = courses.find((c) => c.id === params.pageId);

    if (!course) {
        alert('course not found, redirect');
    }
    return (
        <>
            <div>{course && <CourseInfo course={course} />}</div>
        </>
    );
};
