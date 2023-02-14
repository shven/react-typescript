import React from 'react';
import styles from './CourseCard.module.css';
import Button from '../../../../common/Button/Button';
import { TCourse } from '../../../../types';
import getCourseDuration from '../../../../helpers/getCourseDuration';
import formatCreationDate from '../../../../helpers/formatCreationDate';
import formatAuthorsByIds from '../../../../helpers/formatAuthorsByIds';
import { CourseContext, TCourseContext } from '../../../../context/courseContext';

function CourseCard(course: TCourse) {
    const { deleteCourse } = React.useContext(CourseContext) as TCourseContext;

    return (
        <div className={styles.root}>
            <div className={styles.content}>
                <h3>{course.title}</h3>
                <p>{course.description}</p>
                <Button
                    text={'Delete course'}
                    onClick={() => {
                        deleteCourse(course.id);
                    }}
                />
            </div>
            <div className={styles.aside}>
                {course.authors && (
                    <p>
                        <strong>Authors:</strong> {formatAuthorsByIds(course.authors)}
                    </p>
                )}

                <p>
                    <strong>Duration:</strong> {getCourseDuration(course.duration)}
                </p>
                <p>
                    <strong>Created:</strong> {formatCreationDate(course.creationDate)}
                </p>
                <Button
                    text={'Show course'}
                    onClick={() => {
                        alert('show course');
                    }}
                />
            </div>
        </div>
    );
}

export default CourseCard;
