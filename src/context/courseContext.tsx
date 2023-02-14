import * as React from 'react';
import { TCourse } from '../types';
import { mockedCoursesList } from '../constants';
import getRandomString from '../helpers/getRandomString';
import { useEffect } from 'react';

interface Props {
    children: React.ReactNode;
}

export type TCourseContext = {
    courses: TCourse[];
    saveCourse: (course: TCourse) => void;
    deleteCourse: (id: string) => void;
};

export const CourseContext = React.createContext<TCourseContext | null>(null);

function getInitialState() {
    const courses = localStorage.getItem('courses');
    return courses ? JSON.parse(courses) : mockedCoursesList;
}

const CourseProvider: React.FC<Props> = ({ children }) => {
    const [courses, setCourses] = React.useState<TCourse[]>(getInitialState);

    const saveCourse = (course: TCourse) => {
        const newCourse: TCourse = {
            id: getRandomString(),
            title: course.title,
            description: course.description,
            creationDate: course.creationDate,
            duration: course.duration,
            authors: course.authors
        };
        setCourses([...courses, newCourse]);
    };

    const deleteCourse = (id: string) => {
        const remainingCourses = courses.filter((course) => course.id !== id);
        setCourses(remainingCourses);
    };

    useEffect(() => {
        localStorage.setItem('courses', JSON.stringify(courses));
    }, [courses]);

    return <CourseContext.Provider value={{ courses, saveCourse, deleteCourse }}>{children}</CourseContext.Provider>;
};

export default CourseProvider;
