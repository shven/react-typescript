import React from 'react';
import Courses from '../../components/Courses/Courses';
import { Link } from 'react-router-dom';

export default () => {
    return (
        <>
            <Courses />
            <section>
                <Link to='/courses/add'>Add course</Link>
            </section>
        </>
    );
};
