import React from 'react';
import styles from './CourseCard.module.css';
import Button from '../../../../common/Button/Button';
import getCourseDuration from '../../../../helpers/getCourseDuration';
import formatCreationDate from '../../../../helpers/formatCreationDate';
import formatAuthorsByIds from '../../../../helpers/formatAuthorsByIds';
import { Link } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../../../app/hooks';
import { deleteCourseAsync, selectCourseById } from '../../courseSlice';
import { selectAuthorEntities } from '../../../Authors/authorSlice';
import { userGetUser } from '../../../../context/userSlice';

function CourseCard(props: { id: string }) {
    const dispatch = useAppDispatch();
    const course = useAppSelector((state) => selectCourseById(state, props.id));
    const user = useAppSelector(userGetUser);
    const authors = useAppSelector(selectAuthorEntities);

    return (
        <div className={styles.root} data-testid={`course-card`}>
            <div className={styles.content}>
                <h3 data-testid={`course-title`}>{course.title}</h3>
                <p data-testid={`course-description`}>{course.description}</p>
                {user?.role === 'admin' && (
                    <Button
                        variant={'secondary'}
                        text={'Delete course'}
                        onClick={() => {
                            dispatch(deleteCourseAsync(course.id));
                        }}
                    />
                )}
            </div>
            <div className={styles.aside}>
                {course.authors && (
                    <p>
                        <strong>Authors:</strong> <span data-testid={`course-authors`}>{formatAuthorsByIds(course.authors, authors)}</span>
                    </p>
                )}

                {course.duration && (
                    <p>
                        <strong>Duration:</strong> <span data-testid={`course-duration`}>{getCourseDuration(course.duration)}</span>
                    </p>
                )}

                {course.creationDate && (
                    <p>
                        <strong>Created:</strong> <span data-testid={`course-creation-date`}>{formatCreationDate(course.creationDate)}</span>
                    </p>
                )}
                <p>
                    <Link to={`/courses/${course.id}`}>Show course</Link>
                </p>
            </div>
        </div>
    );
}

export default CourseCard;
