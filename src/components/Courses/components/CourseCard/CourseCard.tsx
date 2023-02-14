import React from 'react';
import styles from './CourseCard.module.css';
import Button from '../../../../common/Button/Button';
import { TCourse } from '../../../../types';
import getCourseDuration from '../../../../helpers/getCourseDuration';
import formatCreationDate from '../../../../helpers/formatCreationDate';
import formatAuthorsByIds from '../../../../helpers/formatAuthorsByIds';

function CourseCard(course: TCourse) {
    return (
        <div className={styles.root}>
            <div className={styles.content}>
                <h3>{course.title}</h3>
                <p>{course.description}</p>
            </div>
            <div className={styles.aside}>
                <p>
                    <strong>Authors:</strong> {formatAuthorsByIds(course.authors)}
                </p>
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
