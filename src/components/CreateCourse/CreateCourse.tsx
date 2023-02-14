import getRandomString from '../../helpers/getRandomString';
import { TCourse } from '../../types';
import React, { useState } from 'react';
import { CourseContext, TCourseContext } from '../../context/courseContext';
import { AuthorContext, TAuthorContext } from '../../context/authorContext';

const forbiddenSymbols = /[@#$%^&]/;

function CreateCourse() {
    const { saveCourse } = React.useContext(CourseContext) as TCourseContext;
    const { authors } = React.useContext(AuthorContext) as TAuthorContext;

    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [creationDate, setCreationDate] = useState('');
    const [duration, setDuration] = useState(90);
    const [courseAuthors, setCourseAuthors] = useState([] as string[]);

    function handleFormSubmit(e: React.SyntheticEvent) {
        e.preventDefault();
        const course: TCourse = {
            id: getRandomString(),
            title,
            description,
            creationDate,
            duration,
            authors: courseAuthors
        };

        saveCourse(course);
    }

    return (
        <form onSubmit={handleFormSubmit}>
            <p>
                <label>
                    Title
                    <br />
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
                    <br />
                    <textarea
                        required={true}
                        onChange={(e) => {
                            if (!forbiddenSymbols.test(e.target.value)) {
                                setDescription(e.target.value);
                            }
                        }}
                        value={description}
                    />
                </label>
            </p>
            <p>
                <label>
                    Creation date
                    <br />
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
                    Duration in minutes
                    <br />
                    <input
                        required={true}
                        type={'number'}
                        min={0}
                        max={3600}
                        value={duration}
                        onChange={(e) => {
                            const duration = typeof e.target.value === 'string' ? parseInt(e.target.value) : 0;
                            setDuration(duration);
                        }}
                    />
                </label>
            </p>
            <p>
                <label>Author(s)</label>
                <br />
                <select
                    required={true}
                    value={courseAuthors}
                    multiple={true}
                    onChange={(e) => {
                        const authors = Array.from(e.target.selectedOptions, (option) => option.value);
                        console.log(authors, 'authors 2');
                        setCourseAuthors(authors);
                    }}
                >
                    {authors.map((author) => (
                        <option value={author.id}>{author.name}</option>
                    ))}
                </select>
            </p>
            <button type='submit'>Create course</button>
        </form>
    );
}

export default CreateCourse;
