import React from 'react';
import { TCourse } from '../../types';

export default (props: { course: TCourse }) => {
    return (
        <section>
            <h2>{props.course.title}</h2>
            <p>{props.course.description}</p>
            <p>@todo: more info/markup</p>
        </section>
    );
};
