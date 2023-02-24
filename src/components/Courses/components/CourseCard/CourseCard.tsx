import React from 'react';
import styles from './CourseCard.module.css';
import Button from '../../../../common/Button/Button';
import type { TCourse } from '../../../../types';
import getCourseDuration from '../../../../helpers/getCourseDuration';
import formatCreationDate from '../../../../helpers/formatCreationDate';
import formatAuthorsByIds from '../../../../helpers/formatAuthorsByIds';
import { CourseContext, TCourseContext } from '../../../../context/courseContext';
import { AuthorContext, TAuthorContext } from '../../../../context/authorContext';
import { Link } from 'react-router-dom';

function CourseCard(course: TCourse) {
    const { deleteCourse } = React.useContext(CourseContext) as TCourseContext;
    const { authors } = React.useContext(AuthorContext) as TAuthorContext;

    return (
        <div className={styles.root}>
            <div className={styles.content}>
                <h3>{course.title}</h3>
                <p>{course.description}</p>
                <Button
                    variant={'secondary'}
                    text={'Delete course'}
                    onClick={() => {
                        deleteCourse(course.id);
                    }}
                />
            </div>
            <div className={styles.aside}>
                {course.authors && (
                    <p>
                        <strong>Authors:</strong> {formatAuthorsByIds(course.authors, authors)}
                    </p>
                )}

                <p>
                    <strong>Duration:</strong> {getCourseDuration(course.duration)}
                </p>
                <p>
                    <strong>Created:</strong> {formatCreationDate(course.creationDate)}
                </p>
                <Link to={`/courses/${course.id}`}>Show course</Link>
            </div>
        </div>
    );
}

export default CourseCard;
