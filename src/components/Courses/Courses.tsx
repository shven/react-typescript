import React from 'react';
import { mockedCoursesList } from '../../constants';
import CourseCard from './components/CourseCard/CourseCard';

function Courses() {
    const courses = mockedCoursesList.map((course) => (
        <CourseCard
            key={course.id}
            authors={course.authors}
            creationDate={course.creationDate}
            title={course.title}
            description={course.description}
            id={course.id}
            duration={course.duration}
        />
    ));
    return <div>{courses}</div>;
}

export default Courses;
