import React from 'react';
import styles from './CourseCard.module.css';
import Button from './Button';
import { TCourse } from '../types';
import formatDuration from '../helpers/formatDuration';
function CourseCard(course: TCourse) {
    return (
        <div className={styles.root}>
            <div className={styles.content}>
                <h3>{course.title}</h3>
                <p>{course.description}</p>
            </div>
            <p className={styles.aside}>
                <strong>Authors:</strong> {course.authors}
                <br />
                <strong>Duration:</strong> {formatDuration(course.duration)}
                <br />
                <strong>Created:</strong> {course.creationDate}
            </p>
            <Button
                text={'Show course'}
                onClick={() => {
                    alert('show course');
                }}
            />
        </div>
    );
}

export default CourseCard;
