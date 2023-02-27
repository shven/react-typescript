import React from 'react';
import type { ICourse } from '../../types';

export default (props: { course: ICourse }) => {
    return (
        <section>
            <h2>{props.course.title}</h2>
            <p>{props.course.description}</p>
            <p>@todo: more info/markup</p>
        </section>
    );
};
