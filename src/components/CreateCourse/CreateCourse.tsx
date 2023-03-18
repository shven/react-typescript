import getRandomString from '../../helpers/getRandomString';
import type { ICourse } from '../../types';
import React, { useEffect, useState } from 'react';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { fetchAuthorsAsync, selectAuthorEntities } from '../Authors/authorSlice';
import { addCourseAsync } from '../Courses/courseSlice';
import { toast, ToastContainer } from 'react-toastify';

const forbiddenSymbols = /[@#$%^&]/;

function CreateCourse() {
    const dispatch = useAppDispatch();
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [creationDate, setCreationDate] = useState('');
    const [duration, setDuration] = useState(90);
    const [courseAuthors, setCourseAuthors] = useState([] as string[]);
    const authors = useAppSelector(selectAuthorEntities);
    const errors = useAppSelector((state) => state.courses.errors);
    const status = useAppSelector((state) => state.courses.status);

    useEffect(() => {
        dispatch(fetchAuthorsAsync());
    }, [dispatch]);

    useEffect(() => {
        errors?.forEach((error) => {
            toast.error(error, {
                position: 'top-center',
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: 'light'
            });
        });
    }, [errors]);

    const handleFormSubmit = (e: React.SyntheticEvent) => {
        e.preventDefault();
        const course: ICourse = {
            id: getRandomString(),
            title,
            description,
            creationDate,
            duration,
            authors: courseAuthors
        };
        dispatch(addCourseAsync(course));
    };

    return (
        <form data-testid={`create-course-form`} onSubmit={handleFormSubmit}>
            <p>
                <label>
                    Title
                    <br />
                    <input
                        required={true}
                        type={'text'}
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
                        console.log(authors, 'selected authors');
                        setCourseAuthors(authors);
                    }}
                >
                    {authors
                        .sort((a, b) => a.name.localeCompare(b.name))
                        .map((author) => (
                            <option value={author.id} key={author.id}>
                                {author.name}
                            </option>
                        ))}
                </select>
            </p>
            {errors?.map((error) => (
                <p key={error}>{error}</p>
            ))}

            <button type='submit'>Create course</button>
            <div>Status: {status}</div>
            <ToastContainer />
        </form>
    );
}

export default CreateCourse;
