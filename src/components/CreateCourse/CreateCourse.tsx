import getRandomString from '../../helpers/getRandomString';
import { TCourse } from '../../types';
import React, { useState } from 'react';
import { CourseContext, TCourseContext } from '../../context/courseContext';

const forbiddenSymbols = /[@#$%^&]/;

function CreateCourse() {
    const { saveCourse } = React.useContext(CourseContext) as TCourseContext;

    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [creationDate, setCreationDate] = useState('');
    const [duration, setDuration] = useState(0);

    function handleFormSubmit(e: React.SyntheticEvent) {
        e.preventDefault();

        const course: TCourse = {
            id: getRandomString(),
            title,
            description,
            creationDate,
            duration
        };

        saveCourse(course);
    }

    // @todo move fields into a child component
    return (
        <form onSubmit={handleFormSubmit}>
            <p>
                <label>
                    Title
                    <input
                        type={'text'}
                        required={true}
                        value={title}
                        onChange={(e) => {
                            if (!forbiddenSymbols.test(e.target.value)) {
                                setTitle(e.target.value);
                            }
                        }}
                    />
                </label>
            </p>
            <p>
                <label>
                    Description
                    <input
                        type={'text'}
                        required={true}
                        value={description}
                        onChange={(e) => {
                            if (!forbiddenSymbols.test(e.target.value)) {
                                setDescription(e.target.value);
                            }
                        }}
                    />
                </label>
            </p>
            <p>
                <label>
                    Creation date
                    <input
                        required={true}
                        type={'date'}
                        value={creationDate}
                        onChange={(e) => {
                            if (!forbiddenSymbols.test(e.target.value)) {
                                setCreationDate(e.target.value);
                            }
                        }}
                    />
                </label>
            </p>
            <p>
                <label>
                    Duration
                    <input
                        required={true}
                        type={'number'}
                        min={0}
                        max={3600}
                        value={duration}
                        onChange={(e) => {
                            console.log(e.target.value, typeof e.target.value);
                            const duration = typeof e.target.value === 'string' ? parseInt(e.target.value) : 0;
                            setDuration(duration);
                        }}
                    />
                </label>
            </p>
            <button type='submit'>Create course</button>
        </form>
    );
}

export default CreateCourse;
