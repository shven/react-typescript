import React from 'react';
import Courses from '../../components/Courses/Courses';
import CreateCourse from '../../components/CreateCourse/CreateCourse';
import CreateAuthor from '../../components/CreateCourse/components/CreateAuthor/CreateAuthor';

export default () => {
    return (
        <>
            <Courses />
            <section>
                <h2>Create course</h2>
                <CreateCourse />
            </section>
            <section>
                <h2>Create new author</h2>
                <CreateAuthor />
            </section>
        </>
    );
};
