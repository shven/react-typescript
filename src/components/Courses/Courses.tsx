import React from 'react';
import CourseCard from './components/CourseCard/CourseCard';
import { CourseContext, TCourseContext } from '../../context/courseContext';

function Courses() {
    const { courses } = React.useContext(CourseContext) as TCourseContext;

    return (
        <div>
            {courses.map((course) => (
                <CourseCard
                    key={course.id}
                    authors={course.authors}
                    creationDate={course.creationDate}
                    title={course.title}
                    description={course.description}
                    id={course.id}
                    duration={course.duration}
                />
            ))}
        </div>
    );
}

export default Courses;
